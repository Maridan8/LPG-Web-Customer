import React from "react";
import style from "./style.module.css";
import Image from "next/image";
function Navbar() {
  return (
    <>
      <div className={style.container}>
        <Image
          src={
            "https://raw.githubusercontent.com/mrHeinrichh/J.E-Moral-cdn/main/assets/png/logo-main.png"
          }
          width={100}
          height={100}
          alt={
            "https://raw.githubusercontent.com/mrHeinrichh/J.E-Moral-cdn/main/assets/png/logo-main.png"
          }
        ></Image>

        <div className=""></div>
        <div className=""></div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}

export default Navbar;
