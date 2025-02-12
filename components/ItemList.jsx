import React from "react";
import { ImageUrl } from "../Utils/Constants";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
    console.log("items", item);
  };

  return (
    <>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2
          border-gray-200 border-b-2 text-left flex flex-row justify-between "
          >
            <div className="py-2  w-9/12">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
              <div className="text-xs pt-1">{item.card.info.description}</div>
            </div>
            <div className=" w-3/12 p-4">
              <div className="absolute  ">
                <button
                  className="p-2 bg-white shadow-lg mx-8 rounded-xl mt-14"
                  onClick={() => handleAddItems(item)}
                >
                  Add +
                </button>
              </div>
              <img
                className="w-full h-20"
                src={ImageUrl + item?.card?.info?.imageId}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
