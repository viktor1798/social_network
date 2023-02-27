import React from "react";
import user from "./style/users.module.css";
import defaultImg from "../../../../assets/usersdefault.png";
import { NavLink } from "react-router-dom";
import Paginator from "./paginator/paginator";

const Users = (props) => {
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
                disabled={props.followProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollowThunk(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={user.button_profile}
                disabled={props.followProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.followThunk(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}

      <Paginator
        currentPage={props.currentPage}
        onPageChenged={props.onPageChenged}
        totalUserCount={props.totalUserCount}
        pageSize={props.pageSize}
      />
    </div>
  );
};

export default Users;
