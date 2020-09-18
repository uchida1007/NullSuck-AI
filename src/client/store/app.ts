/**
 * ワイン評価のStoreファイル
 */
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { InputValue, Result, WineAttribute } from "@/models";
import axios, { AxiosResponse } from "axios";

// AIアプリで利用する変数となる値を定義
export interface AppState {
  // ページのタイトル
  title: string
  // ワインの属性値
  wineAttributes: WineAttribute[]
  // 予測結果
  result: Result
}

/**
 * vuex-module-decoratorsの使用
 */
// stateFactory: true → Vuex をモジュールモードで扱うために指定
@Module({ stateFactory: true, name: "app", namespaced: true })
export default class App extends VuexModule implements AppState {
  // state(初期値、クラスのプロパティ)
  public title: string = '';
  public wineAttributes: WineAttribute[] = [];
  public result: Result = { value: 0, comment: '', status: false};

  // ページ上部に表示されるタイトルを設定
  @Mutation
  public SET_TITLE(title: string): void {
    this.title = title
  }

  // ワインの属性のマスタデータを設定する
  @Mutation
  public SET_WINE_ATTR(wineAttributes: WineAttribute[]): void {
    this.wineAttributes = wineAttributes;
  }

  // ワインの属性値に対して、値を入力する
  @Mutation
  public SET_WINE_VALUE(payload: {id: number, value: number}): void {
    this.wineAttributes[payload.id - 1].value = payload.value
  }

  // 入力値、予測結果をすべてクリアする
  @Mutation
  public CLEAR(): void {
    this.wineAttributes = this.wineAttributes.map((w): WineAttribute => {
      delete w.value;
      return w;
    });
    this.result = { value: 0, comment: '', status: false};
  }

  // 予測結果を格納する
  @Mutation
  public SET_RESULT({value, status}): void {
    this.result.value = value;
    this.result.status = status;
  }

  // 入力値をもとに、APIにリクエストし、予測結果を取得する
  @Action({})
  public async POST_WINE_VALUE(): Promise<void> {
    // 画面の入力値をリクエスト用のデータに編集
    const inputValues = this.wineAttributes.map((attr): InputValue =>
      ({id: attr.id, value: attr.value})
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // エンドポイント/api/predictにPOSTリクエスト
    const res: AxiosResponse<Result> = await axios.post('/api/predict', inputValues);

    // 正しくデータが取れていれば(status=Trueなら)、SET_RESULTのMutationを呼び出す
    if (res.data.status) {
      this.context.commit("SET_RESULT", res.data);
    }
  }

  /**
  * バリデーションのため、入力値がすべて入力されているかどうかを確認するGeter
  */
  public get IsAllValueSet(): (() => boolean) {
    return (): boolean => {
      return this.wineAttributes.every((attr): boolean => {
        return 'value' in attr && attr.value != 0
      });
    }
  }
}