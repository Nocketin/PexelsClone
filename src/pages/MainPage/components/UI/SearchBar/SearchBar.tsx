import React, { useState } from "react";
import cl from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../../../../shared/assets/svg/search_icon.svg";
import { useAppDispatch } from "../../../../../shared/hooks/redux";
import { searchSlice } from "../../../../../shared/store/reducers/SearchBarSlice";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  // const savedQuery = useAppSelector((state) => state.searchReducer.query)
  const dispatch = useAppDispatch();
  const {setSearchQuery} = searchSlice.actions;

  // useEffect(() => {
  //   setQuery(savedQuery);
  // }, [savedQuery]);


  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(setSearchQuery(query));
      navigate(`/search/${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={cl.search_container}>
      <input
        type="text"
        placeholder="Поиск бесплатных изображений"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={cl.input}
      />
      <button onClick={handleSearch} className={cl.button}>
        <img src={searchIcon} alt="searcIcon" />
      </button>
    </div>
  );
};

export default SearchBar;
