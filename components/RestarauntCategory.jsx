import ItemList from "./ItemList";

const RestarauntCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log("data", data);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <>
      <div
        className=" w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-3 "
        onClick={handleClick}
      >
        <div className="flex justify-between cursor-pointer">
          <span className="font-bold text-xl cursor-pointer">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⇣</span>
        </div>
        <div className="pt-2">
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </>
  );
};
export default RestarauntCategory;
