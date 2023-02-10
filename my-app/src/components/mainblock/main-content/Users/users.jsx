import React from "react";
import user from "./style/users.module.css";
import defaultImg from "../../../../assets/usersdefault.png";
import Axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    Axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {this.props.setUser(response.data.items);});
  }

  render() {
    return (
      <div className={user.main_block}>

        {this.props.users.map((u) => (
          <div key={u.id} className={user.content}>
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
            <div>
              {u.followed ? (
                <button
                  className={user.button_profile}
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={user.button_profile}
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
