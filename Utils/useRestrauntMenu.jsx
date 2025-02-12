import { useEffect, useState } from "react";
import { resDetailsUrl } from "./Constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resDetailsUrl + resId);
    const json = await data.json();
    setResInfo(json.data);
    console.log("RESINFO", json.data);
  };

  return resInfo;
};
export default useRestrauntMenu;
