import React from "react";
import Bannne from "../../Components/Bannne";
import CatoryContent from "../../Components/CatoryContent";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Bannne></Bannne>
      <CatoryContent></CatoryContent>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
