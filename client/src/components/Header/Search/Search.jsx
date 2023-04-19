import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import './Search.scss';

const Search = () => {
  return (
    <div className="Search">
      <HiOutlineSearch/>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered input-xs input-primary w-full max-w-xs"
      />
    </div>
  );
};

export default Search;
