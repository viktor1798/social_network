import React from "react";
import user from "./style/users.module.css";
import defaultImg from "../../../../assets/usersdefault.png";
import { createPages } from "../../../../utils/createPages";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  createPages(pages, pagesCount, props.currentPage);

  return (
    <div className={user.main_block}>
      {props.users.map((u) => (
        <div key={u.id} className={user.content}>
          <NavLink className={user.link} to={"/profile/" + u.id}>
            <div className={user.image_profile}>
              <img
                src={u.photos.small != null ? u.photos.small : defaultImg}
                alt=""
              />
            </div>
            <div className={user.naming}>
              <div className={user.name_profile}>{u.name}</div>
              <div className={user.status_profile}>{u.status}</div>
            </div>
          </NavLink>
          <div>
            {u.followed ? (
              <button
                className={user.button_profile}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={user.button_profile}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}

      <div className={user.pages}>
        {pages.map((page, index) => (
          <span
            key={index}
            className={
              props.currentPage === page ? user.current_page : user.page
            }
            onClick={() => props.onPageChenged(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;
