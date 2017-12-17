import React from "react";

export default function NavToggle(props) {
  return (
    <span className={props.className} id="nav-toggle" onClick={props.toggleNav}>
      <span />
      <span />
      <span />
    </span>
  );
}
