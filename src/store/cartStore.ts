import { create } from "zustand";
import { ListItemType } from "../type/index";

type StateType = {
  totalNum: number;
  totalPrice: number;
  cartProducts: ListItemType[];
};
type Action = {
  updateCartProducts: (products: ListItemType) => void;
  removeFromCart: (productId: string) => void;
};

const useCartStore = create<StateType & Action>((set) => ({
  totalNum: 0,
  totalPrice: 0,
  cartProducts: [],

  updateCartProducts: (product) =>
    set((state) => {
      // 数量、总价
      const existingProductIndex = state.cartProducts.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cartProducts];
        updatedCart[existingProductIndex].number += 1;
        // 总价
        const newTotalPrice = updatedCart.reduce((acc, cur) => acc + Number(cur.price) * cur.number, 0);
        // 商品总数量
        const newTotalNum = updatedCart.reduce((acc, cur) => acc + cur.number, 0);
        return { cartProducts: updatedCart, totalPrice: newTotalPrice, totalNum: newTotalNum };
      } else {
        const newCart = [...state.cartProducts, { ...product, number: 1 }];
        const newTotalPrice = newCart.reduce((acc, cur) => acc + Number(cur.price) * cur.number, 0);
        const newTotalNum = newCart.reduce((acc, cur) => acc + cur.number, 0);
        return { cartProducts: newCart, totalPrice: newTotalPrice, totalNum: newTotalNum };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cartProducts.filter((product) => product.id !== productId);
      const newTotalPrice = updatedCart.reduce((acc, cur) => acc + Number(cur.price) * cur.number, 0);
      const newTotalNum = updatedCart.reduce((acc, cur) => acc + cur.number, 0);
      return { cartProducts: updatedCart, totalPrice: newTotalPrice, totalNum: newTotalNum };
    }),
}));

export default useCartStore;
