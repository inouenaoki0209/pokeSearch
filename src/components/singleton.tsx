import { PokeLanguageType } from "./search";

export class Singleton {
  private static instance: Singleton;
  private favoriteItems: PokeLanguageType[] = [];

  // privateでコンストラクタを宣言
  private constructor() {
  }

  /**
   * Singletonクラスをインスタンス化
   * 他クラスで使うSingletonのインスタンスはここで取得する
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // お気に入りリストにアイテムを追加
  public addItem = (item: PokeLanguageType) => {
    this.favoriteItems.push(item);
  };

  // 登録されているアイテムリストを取得
  public getItemList() {
    return this.favoriteItems;
  }
}
