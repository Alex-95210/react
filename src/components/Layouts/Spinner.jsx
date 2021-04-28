import React, { Fragment } from "react";
import spinner from "./snoopLoading.gif";

const Spinner = () => {
  return (
    <Fragment>
      <div>
        <img
          src={spinner}
          alt="Loading"
          style={{ width: "200px", margin: "auto", display: "block" }}
        />
      </div>
    </Fragment>
  );
};
export default Spinner;

