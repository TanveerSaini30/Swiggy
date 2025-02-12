import React from "react";
import { ImageUrl } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const Carousel = ({ data }) => {
  console.log("data", data);

  const { title } = data;
  const { imageId, price } = data?.dish?.info;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    const formattedList = {
      card: {
        info: {
          id: item.dish.info.id,
          name: item.title,
          imageId: item.dish.info.imageId,
          price: item.dish.info.price,
          description: item.dish.info.description,
        },
      },
    };
    console.log("formatted list", formattedList);
    dispatch(addItem(formattedList));
  };

  return (
    <>
      <div className=" w-72  ">
        <div className="relative">
          <img className="border rounded-xl " src={ImageUrl + imageId} />
          <h1 className="absolute top-1 left-1  text-white text-lg  max-w-[90%] text-left ">
            {title}
          </h1>
          <h1 className="absolute  text-white bottom-2 font-bold left-2  ">
            Rs.
            {price / 100}
          </h1>
          <button
            className="absolute font-bold bg-white text-green-500 rounded-lg bottom-2 right-8 w-20 h-9"
            onClick={() => {
              handleClick(data);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
