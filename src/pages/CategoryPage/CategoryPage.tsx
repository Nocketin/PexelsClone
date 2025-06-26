import React from "react";
import CategoryPageNavbar from "./components/CategoryPageNavbar/CategoryPageNavbar";
import CategoryPhotosContainer from "./components/CategoryPagePhotosContainer/CategoryPagePhotosContainer";

const CategoryPage = () => {
  return (
    <div>
      <CategoryPageNavbar />
      <CategoryPhotosContainer/>
    </div>
  );
};

export default CategoryPage;
