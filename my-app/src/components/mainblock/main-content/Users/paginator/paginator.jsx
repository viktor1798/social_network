import React from "react";
import { createPages } from "../../../../../utils/createPages";
import user from "../style/users.module.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  createPages(pages, pagesCount, props.currentPage);

  return (
    <div className={user.pages}>
      {pages.map((page, index) => (
        <span
          key={index}
          className={props.currentPage === page ? user.current_page : user.page}
          onClick={() => props.onPageChenged(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
