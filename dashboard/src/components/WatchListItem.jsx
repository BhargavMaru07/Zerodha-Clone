import React, { useState } from 'react'
import {KeyboardArrowDown,KeyboardArrowUp} from '@mui/icons-material'
import WatchLstActions from './WatchLstActions';

const WatchListItem = ({ stoke }) => {
    const [showWatchListAction,setShowWatchListAction] = useState(false)

    const handleMouseEnter = (e)=>{
        setShowWatchListAction(true)
    }

    const handleMouseExit = (e)=>{
        setShowWatchListAction(false)
    }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stoke.isDown ? "down" : "up"}>{stoke.name}</p>
        <div className="itemInfo">
          <span className="percent">{stoke.percent}</span>
          {stoke.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stoke.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchLstActions uid={stoke.name}/>}
    </li>
  );
};

export default WatchListItem