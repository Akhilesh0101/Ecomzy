import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex  justify-center ml-[400px] mt-8 gap-10 items-center  max-w-[350px]">
      {cart.length > 0 ? (
        <div className="flex justify-center items-center gap-4 ">
          <div>
            {cart.map((item, index) => {
              return (
                <div className=" flex  flex-col gap-2">
                  <CartItem key={item.id} item={item} itemIndex={index} />
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-col justify-between  ml-16 h-[500px]   ">
            <div>
              <div className="text-green-600">Your Cart</div>
              <div className="text-green-600 font-bold text-[40px]">
                Summary
              </div>
              <p>
                <span className="font-semibold">
                  Total Items :{cart.length}
                </span>
              </p>
            </div>
            <div>
              <p>
                Total Amount : ${totalAmount}
                <p />
              </p>
              <button className="bg-green-600 px-6 py-2 mt-4">
                Checkout Now
              </button>
            </div>
          </div>
          </div>

         
        
      ) : (
        <div className="flex justify-center mx-auto  items-center w-screen h-screen">
          <div className=" flex flex-col gap-6 ">
            <h1 className="flex justify-center items-center">
              Your Cart is Empty
            </h1>
            <Link to={"/"}>
              <button className="px-8 text-white py-2 bg-green-600">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
