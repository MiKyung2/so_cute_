import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import MenuIcon from "./icons/menu";

function SideMenu({ imageList }) {
  const [showMenu, setShowMenu] = useState(false);
  const handleClickMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav>
      <div className="icon-area" onClick={handleClickMenu}>
        {showMenu ? <IoMdClose /> : <MenuIcon />}
      </div>
      <div className={`menu ${showMenu ? "show" : ""}`}>
        <div className="menu-item">저장한 이미지</div>
        <ul>
          {imageList.map(({ image, date }) => (
            <li>
              <img src={image} />
              <span>{date}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SideMenu;
