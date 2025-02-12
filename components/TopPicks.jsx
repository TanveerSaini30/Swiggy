import Carausel from "./Carousel";

const TopPicks = (resInfo) => {
  const { title, carousel } =
    resInfo?.resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  //   console.log(title);

  if (carousel && carousel.length > 0)
    return (
      <>
        <h1 className="w-7/12 m-auto text-left text-2xl font-bold  mb-1 ">
          {title}
        </h1>
        <div className="w-7/12 m-auto mb-5 flex flex-col items-start overflow-x-scroll ">
          <div className="flex flex-row object-cover">
            {carousel.map((item) => (
              <Carausel key={item.bannerId} data={item} />
            ))}
          </div>
        </div>
      </>
    );
};

export default TopPicks;
