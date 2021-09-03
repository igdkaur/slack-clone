import React from 'react';
import { Avatar } from '@material-ui/core';
import  SearchIcon  from '@material-ui/icons/Search';
import  AccessTimeIcon  from '@material-ui/icons/AccessTime';
import  HelpOutlineIcon  from '@material-ui/icons/HelpOutline';
import "../Styles/Header.css";


function Header() {
  return (
    <div className="header">
      <div className="header_left">
      
        <Avatar 
          alt="Remy Sharp" 
          src="rei" 
          className="header_avatar"
          />
           <AccessTimeIcon /> 
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="search" />
      </div>
      <div className="header_right">
      
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header
