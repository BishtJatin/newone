
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className='flex items-center justify-center h-[270px]  w-full gap-16 p-28  ml-5 '>

        <div className="h-[215px] w-[160px] ">
          <img src={item.image} className="h-full w-full"/>
        </div>
        <div className="w-[350px]">
          <h1 className="text-gray-700 font-semibold text-xl text-left w-full ">{item.title}</h1>
          <h1 className="w-full text-gray-600 font-normal mb-5 mt-5 text-sm text-[10px] text-left">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex gap-64">
            <p className="text-green-600 font-extrabold" >${item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase className="h-8 w-9 -mt-2"/>
            </div>
          <div className='w-full h-1 text-green-600'></div>
          </div>
         
        </div>


      </div>
      <div className="bg-gray-400 h-[2px] w-[90%]  "></div>
    </div>
  );
};

export default CartItem;
