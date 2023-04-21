import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Search.scss";
import { motion } from "framer-motion";

const Search = ({ searchBarOpen, setSearchBarOpen }) => {
  const isIconDisplaying = (searchBarOpen) => {
    console.log(searchBarOpen)
    return searchBarOpen ? {'display' : 'none'} : {};

  }
  
  return (
    <div className="Search">
      <motion.div style={{color:'white'}}whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <HiOutlineSearch className="Search__searchIcon" style={isIconDisplaying(searchBarOpen)} onClick={() => setSearchBarOpen(!searchBarOpen)} />
      </motion.div>
      {searchBarOpen && (
        <div className="Search__form form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square btn-primary">
              <HiOutlineSearch />
            </button>
          </div>
          <motion.div style={{color:'white'}} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          <AiOutlineClose className="Search__form__close" onClick={() => setSearchBarOpen(false)}/>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Search;
