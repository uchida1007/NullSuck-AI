/**
 * Storeのmoduleを取得できるようにするためのスクリプトファイル
 */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import App from '@/store/app';
import { RootState } from '@/store';

// オブジェクト
let appStore: App;

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */
const initialiseStores = (store: Store<RootState>): void => {
  // App を型推論できるストアモジュール化
  appStore = getModule(App, store);
};

// 名前付きエクスポート(インクルードすることができる)
export {
  initialiseStores,
  appStore
};