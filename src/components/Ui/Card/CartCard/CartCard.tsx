import { useState } from "react";
import Font from "../../../icons/Font";
 
const CartCard = ({ data, deleteFromCart }: any) => {
 
   return (
    <div className="p-2 border-b-4 border-gray my-2">
      <div className="flex justify-between items-center text-lg">
        <div>
          <img src={data.img} className="h-[100px]" alt="" />
        </div>
        <div>
          <h2>{data.name}</h2>
        </div>
        <div>
          <h2>${data.price}</h2>
        </div>
        
        <div>
          <h2>{data.quantity}</h2>
        </div>
        <div>
          <button
            className="text-primary"
            onClick={() => {
              deleteFromCart(data.id);
            }}
          >
            <Font iconName="fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
