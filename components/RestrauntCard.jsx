import { ImageUrl } from "../Utils/Constants";

const RestrauntCard = ({ resData }) => {
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resData.info;

  return (
    <>
      <div className="resCard rounded-tl-xl rounded-tr-xl w-[240px] h-auto shadow-lg hover:px-[7px] ">
        <div className="foodImg">
          <img
            className="rounded-tl-xl rounded-tr-xl h-[20vh] w-[100%] "
            src={ImageUrl + cloudinaryImageId}
            alt=""
          />
        </div>
        <div className="cardDetails flex flex-col gap-1 py-3 px-1">
          <h2 className="font-extrabold">{name} </h2>

          <h4>{cuisines.join(", ")} </h4>

          <h4>{avgRating}</h4>

          <h4>{sla.slaString}</h4>

          <h4>{costForTwo}</h4>
        </div>
      </div>
    </>
  );
};
export default RestrauntCard;

export const cardWithLabel = (RestrauntCard) => {
  return () => {
    return (
      <>
        <label>Promoted</label>
        <RestrauntCard />
      </>
    );
  };
};
