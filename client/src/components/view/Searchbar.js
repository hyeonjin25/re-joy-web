import React, { useState } from "react";
import style from "./Searchbar.module.scss";
import axios from "axios"
import {withRouter} from "react-router-dom"

function Searchbar(props) {
  const [query, setQuery] = useState("");

  //검색 버튼 누를 시(onClick)
  const onSearch_click = async () => {
    //검색어 입력 했을시에만
    if (query !== "") {
      props.history.push({
        pathname: `/Search?q=${query}`
      });
    }
  };

  //검색창에 데이터 입력시(onChange)
  const onSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={style.nav}>
      <legend className='ir_su'>search</legend>
      <form className={style.search_cont}>
        <input
          type='text'
          value={query}
          onChange={onSearch}
          id='input_search'
          placeholder='search'
          maxLength='50'
        />
        <button type='submit' onClick={onSearch_click}>
          <span className={style.search_button}></span>
        </button>
      </form>
    </div>
  );
}

export default withRouter(Searchbar);
