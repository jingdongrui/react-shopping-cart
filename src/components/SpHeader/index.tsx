import React, { useState, useEffect } from "react";
import "./index.css";
import useCartStore from "../../store/cartStore";

const SpHeader: React.FC = () => {
  const { cartProducts, totalPrice, totalNum, removeFromCart } = useCartStore();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    if (showPopup) return;
    setShowPopup(true);
  };

  // 点击空白处关闭购物车
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const cartPopup = document.querySelector(".cart-popup") as HTMLElement;

      if (cartPopup && !cartPopup.contains(event.target as Node)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="shopping-header">
      <h3>购物天堂</h3>
      {/* 购物车按钮 */}
      <div className="shopping-header__cart-button">
        <button onClick={handleAddToCart}>购物车({totalNum})</button>

        {/* 弹窗 */}
        {showPopup && (
          <div className="cart-popup">
            {cartProducts.length === 0 ? (
              <div>空。。。</div>
            ) : (
              <div className="cart-content">
                <div className="product-list">
                  {cartProducts.map((item, index) => (
                    <div className="product" key={index}>
                      <div className="product-content">
                        <p>{item.name}</p>
                        <p>
                          {item.price}*{item.number}
                        </p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="del-btn  btn">
                        删除
                      </button>
                    </div>
                  ))}
                  <div>总价：{totalPrice}</div>
                </div>
                <button className="checkout-btn btn">结算</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default SpHeader;
