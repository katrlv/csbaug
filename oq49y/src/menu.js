import React from "react";

function Menu() {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <a href="#">
              <li>home</li>
            </a>
            <a href="#">
              <li>my work</li>
              <ul>
                <li>ux design</li>
                <li>web design</li>
                <li>graphic design</li>
              </ul>
            </a>
            <a href="#">
              <li>contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
