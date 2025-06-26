import React, { useMemo } from "react";
import { CATEGORIES } from "../../consts/categories";
import { useNavigate } from "react-router-dom";
import cl from "./CategoriesContainer.module.css";
import { useAppDispatch } from "../../../../shared/hooks/redux";
import { searchSlice } from "../../../../shared/store/reducers/SearchBarSlice";

const CategoriesContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {setSearchQuery} = searchSlice.actions;

  const sevenCategories = useMemo(() => {
    const randomCategories = [...CATEGORIES].sort(() => Math.random() - 0.5);
    return randomCategories.slice(0, 7);
  }, []);

  const handleCategorySearch = (value: string) => {
    dispatch(setSearchQuery(value))
    navigate(`/search/${encodeURIComponent(value)}`);
  };

  return (
    <div className={cl.categories_container}>
      {sevenCategories.map((category) => (
        <button
          key={category.label}
          onClick={() => handleCategorySearch(category.value)}
          className={cl.category_button}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoriesContainer;
