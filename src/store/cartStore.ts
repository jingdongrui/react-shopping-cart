import { create } from "zustand";
import { ListItemType } from "../type/index";

type StateType = {
  totalPrice: number;
  cartProducts: ListItemType[];
};
type Action = {
  updateCartProducts: (products: ListItemType) => void;
  removeFromCart: (productId: string) => void;
};

const useCartStore = create<StateType & Action>((set) => ({
  totalPrice: 0,
  cartProducts: [],

  updateCartProducts: (product) =>
    set((state) => {
      // 数量、总价
      const existingProductIndex = state.cartProducts.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cartProducts];
        updatedCart[existingProductIndex].number += 1;
        const newTotalPrice = updatedCart.reduce((acc, cur) => acc + Number(cur.price) * cur.number, 0);
        return { cartProducts: updatedCart, totalPrice: newTotalPrice };
      } else {
        const newCart = [...state.cartProducts, { ...product, number: 1 }];
        const newTotalPrice = newCart.reduce((acc, cur) => acc + Number(cur.price) * cur.number, 0);
        return { cartProducts: newCart, totalPrice: newTotalPrice };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cartProducts.filter((product) => product.id !== productId);
      const newTotalPrice = updatedCart.reduce((acc, cur) => acc + Number(cur.price) * cur.number, 0);
      return { cartProducts: updatedCart, totalPrice: newTotalPrice };
    }),
}));

export default useCartStore;
