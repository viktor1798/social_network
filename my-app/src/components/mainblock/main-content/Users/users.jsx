import React from "react";
import user from "./style/users.module.css";
import defaultImg from "../../../../assets/usersdefault.png";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUser([
      {
        id: 1,
        followed: false,
        fullName: "Kostya",
        status: "pogoda top",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        followed: true,
        fullName: "Kirill",
        status: "+1",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 3,
        followed: false,
        fullName: "Alina",
        status: "na samom dele pogoda tak sebe",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 4,
        followed: true,
        fullName: "Vanya",
        status: "vozmoshno",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }
  
  return (
    <div className={user.main_block}>
      {props.users.map( u => <div key={u.id} className={user.content}>
          <div className={user.image_profile}>
            <img src={defaultImg} alt="" />
          </div>
          <div className={user.naming}>
            <div className={user.name_profile}>{u.fullName}</div>
            <div className={user.status_profile}>{u.status}</div>
          </div>
          <div>
            {u.followed
                      ? <button className={user.button_profile} onClick={() => {
                          props.unfollow(u.id)
                      }}>Unfollow</button>
                      : <button className={user.button_profile} onClick={() => {
                          props.follow(u.id)
                      }}>Follow</button>}
          </div>
        </div>
      )}

    </div>
  );
};

export default Users;

