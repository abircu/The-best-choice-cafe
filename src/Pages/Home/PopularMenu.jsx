import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../../Components/MenuItem";

const PopularMenu = () => {
  const [menudata, setMenudata] = useState([]);
  useEffect(() => {
    fetch("Menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenudata(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heding={"FROM OUR MENU"}
        subHeading={"check it out"}
      ></SectionTitle>
      <div className=" max-w-6xl mx-auto  px-2 grid gap-10 grid-cols-1 md:grid-cols-2 my-10">
        {menudata.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
