import React from "react";
import style from "./Footer.module.scss"

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <h2 className='ir_su'>푸터</h2>
        <span>re-joy</span>
        <div>https://github.com/hyeonjin25/re-joy-web</div>
      </div>
    </div>
  );
}

export default Footer;
