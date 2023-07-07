import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  // props --> {onSearch: function}
  return (
    <div className={style.container}>
      <Link className={style.link} to="/about">ABOUT</Link>
      <Link className={style.link} to="/create">ADD CHARACTER!</Link>
      <Link className={style.link} to="/home">HOME</Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}



