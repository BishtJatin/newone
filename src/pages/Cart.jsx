import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className=" flex justify-center">
  {
    cart.length > 0  ? 
    (< div className="flex">


      <div className=" w-[850px]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      
      </div>
     
      <div>

        <div className="mt-24 ">
          <div className="text-xl text-green-700 font-semibold tracking-wide">YOUR CART</div>
          <div className="text-5xl text-green-700 font-semibold tracking-wide">SUMMARY</div>
          <p  className="mt-8 mb-4 text-xl font-semibold opacity-70">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="mt-16 mb-4 text-xl font-semibold opacity-70">Total Amount: ${totalAmount}</p>
          <button className="border  border-green-700 text-white font-semibold px-40 text-xl  bg-green-700 hover:bg-white hover:text-green-700  rounded-md w-full py-4 transition-all">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col  items-center justify-center mx-auto gap-[250px] h-full w-full">
      <h1 className=''>Cart Empty</h1>
      <Link to={"/"}>
        <button  className="text-green-700 border-2 border-green-700 rounded-full font-semibold 
          text-[22px] p-1 px-3 uppercase 
          hover:bg-green-500
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
