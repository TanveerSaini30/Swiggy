import RestrauntCard from "./RestrauntCard";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestraunt, setlistOfRestraunt] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const searchFilter = listOfRestraunt.filter((curr) =>
      curr.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestraunt(searchFilter);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.671406264655456&lng=75.87452753433992&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    setlistOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log("list of res:", listOfRestraunt);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>your Net is off!!</h1>;
  }

  // const PromotedCard = cardWithLabel(RestrauntCard);

  if (listOfRestraunt.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="body mt-4 "></div>
      <div className="flex m-2 p-2 justify-center gap-2 ">
        <div className="flex gap-2">
          <div className="flex items-center">
            <input
              type="text"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500  "
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
              onKeyUp={(event) => {
                console.log(event);
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
          <div className="flex   ">
            <button
              className=" px-4 py-2 bg-gray-100 rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="items-center flex gap-2">
          <button
            className="filterBtn px-[16px] py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              {
                const filteredList = listOfRestraunt.filter(
                  (res) => res.info.avgRating > 4
                );

                setlistOfRestraunt(filteredList);
              }
            }}
          >
            Top-Rated
          </button>
          <button
            className="reloadBtn px-3 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              setFilteredRestraunt(listOfRestraunt);
            }}
          >
            Reload
          </button>
        </div>
      </div>

      <div className="resContainer mx-20 grid grid-cols-5 gap-4 justify-center">
        {filteredRestraunt.map((currentVal) => (
          <Link to={"restraunt/" + currentVal.info.id} key={currentVal.info.id}>
            <RestrauntCard resData={currentVal} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
