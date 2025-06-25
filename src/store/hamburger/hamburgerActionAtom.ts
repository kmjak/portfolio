import { atom } from "jotai";

/**
 * @description
 * このatomは、ハンバーガーメニューの開閉状態を管理します。
 */
export const hamburgerActionAtom = atom<boolean>(false);
