import React, { useState, useRef } from 'react';
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import "./Header.css";
import axios from './axios';
import requests, { imageBase, fetchMovie, fetchTV, fetchSearchString, setLoading } from './api';
import NFLogo from './assets/logo.png';
import {auth} from './firebase'

function Header({ setSearchResult, setLoading, popularVisible }) {
  const [input, setInput] = useState('');
  const inputEl = useRef(null);
  const searchEl = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const errorOccurred = (error) => {
	setLoading(false);
	alert('Something went wrong.');
	console.log(error.message);
  }

  const searchQuery = (query) => {
    axios.get(fetchSearchString(query)).then((response) => {
      if (response.data.total_results < 1) {
        alert("No Results Found");
        setLoading(false);
      } else {
        setSearchResult(response.data.results);
      }
    }).catch((err) => errorOccurred(err));
  }

  const handleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    searchQuery(input);
    setSearchOpen(false);
    inputEl.current.blur();
    setLoading(true);
    setTimeout(() => setInput(''), 100);
  }

  const searchClick = () => {
    setSearchOpen(true);
    setTimeout(() => { inputEl.current.focus() }, 300);
  }

  return (
    <div className="app__header">
			<ul className="app__nav">
				{!popularVisible && <li className="app__back mobile" onClick={() => window.location.reload()}><ChevronLeftRoundedIcon style={{ fontSize: 24 }} /></li>}
				<li className={`app__search mobile ${(searchOpen || input) ? "open" : ""}`} onClick={searchClick}>
					<SearchRoundedIcon style={{ fontSize: 20 }} className="app__searchIcon" onClick={searchClick} />
					<form>
						<input ref={inputEl} type="search" value={input} onBlur={() => setSearchOpen(false)} onChange={(e) => setInput(e.target.value)} placeholder="Search..." />
						<button onClick={(e) => handleSearch(e)} type="submit"></button>
					</form>
				</li>
				{/* <li><a href="#">Home</a></li>
				<li><a href="#">Movies</a></li>
				<li><a href="#">Series</a></li>
				<li><a href="#">Featured</a></li> */}
        
			</ul>
			<img className="app__title" src={NFLogo} onClick={() => auth.signOut()}/>
		</div>
  )
}

export default Header;