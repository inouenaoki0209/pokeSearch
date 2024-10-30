import { PokeLanguageType } from "./search";

export class Singleton {
    private static instance: Singleton;
    private favoriteItems: PokeLanguageType[] = [];

    // コンストラクタをprivateにする
    private constructor() {}

    // インスタンスを取得
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // ここでアイテムを追加
    public addItem = (item: PokeLanguageType) => {
        this.favoriteItems.push(item);
    }
    public getItemList(){
        return this.favoriteItems;
    }
}