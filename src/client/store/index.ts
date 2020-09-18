/**
 * Component等のvueファイルからStoreにアクセスできるようにするファイル
 */
import { ActionTree, Store } from "vuex";
import { initialiseStores } from '@/utils/store-accessor';
import { AppState } from '@/store/app';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// initializerを作成
const initializer = (store: Store<any>): void => initialiseStores(store);
// pluginsと名前のついたArrayを定義することでNuxtが最初に処理を実行してくれる
export const plugins = [initializer];
// このexportでappStoreがVueのコンポーネントで使えるようになる
export * from '@/utils/store-accessor';

// AppStateを取り込んだRootStateを定義
export interface RootState {
  appState: AppState
}

/**
 * サーバ側でデータを処理してあらかじめ描画しておくための関数
 */
export const actions: ActionTree<AppState, RootState> = {
  // nuxtServerInitこのアクションはVuexのストアに定義されたら、リクエストが来たら、ルートを問わずにNuxt.jsはそれを呼び出します
  async nuxtServerInit({ commit }): Promise<void> {
    // APIのエンドポイント/api/wine_attributesをGETで叩いています
    const res = await this.$axios.$get('/api/wine_attributes');
    // APIの結果が返ってきていた場合
    if (res.wine_attributes) {
      // mutationsのSET_WINE_ATTRを呼び出します
      commit('app/SET_WINE_ATTR', res.wine_attributes);
    }
  }
};