import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../Utils/useRestrauntMenu";
import RestarauntCategory from "./RestarauntCategory";
import { useState } from "react";
import TopPicks from "./TopPicks";

function RestrauntMenu() {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  // console.log("resInfo", resInfo);

  const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards, title } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log("ITEMCARD", itemCards);

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("categories  ", categories);

  return (
    <>
      <div className="text-center p-4 ">
        <h1 className="font-bold p-2  text-2xl">{name}</h1>
        <p className="font-bold ">{cuisines.join(", ")}</p>
        <p className="font-bold ">{avgRating}</p>
        <br />

        <TopPicks resInfo={resInfo} />

        {categories.map((category, index) => (
          <RestarauntCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
}

export default RestrauntMenu;
