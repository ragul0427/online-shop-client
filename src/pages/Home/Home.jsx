import React from "react";
import "./home.scss";
import Slider from "../../Components/Slider/Slider";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
}

export default Home;
