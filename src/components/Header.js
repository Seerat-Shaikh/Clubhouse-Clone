import React from "react";
import style from "../style/header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore">
        <img src="/images/search.png" alt="" />
      </Link>

      <div className={style.nav_items}>
        <Link exact to="/friends_invite">
          <img src="/images/invite.png" alt="" />
        </Link>

        <Link exact to="/upcoming">
          <img src="/images/calendar.png" alt="" />
        </Link>

        <Link exact to="/activity">
          <img src="/images/notification.png" alt="" />
        </Link>

        <Link exact to="/profile">
          <img src="/images/pic.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
