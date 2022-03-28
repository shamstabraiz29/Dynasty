import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navitem = [
  {
    id: 1,
    name: "dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    name: "recruit",
    link: "/recruit",
  },
  {
    id: 3,
    name: "stake",
    link: "/stack",
  },
  {
    id: 4,
    name: "bank",
    link: "/bank",
  },
  {
    id: 5,
    name: "merchant",
    link: "/merchant",
  },
  {
    id: 6,
    name: "marketplace",
    link: "/marketplace",
  },
];

const Navbar = () => {
  return (
    // <nav>
    //   <div
    //     className="logo"
    //     style={{
    //       textShadow: "5px 5px 20px red",
    //       backgroundColor: "transparent",
    //     }}
    //   >
    //     Dynasty
    //   </div>
    //   <input type="checkbox" id="click" />
    //   <label for="click" class="menu-btn">
    //     <i className="fas fa-bars"></i>
    //   </label>
    //   <ul>
    //     {Navitem.map((item) => {
    //       return (
    //         <Link to={item.link}>
    //           <div key={item.id}>
    //             <li>
    //               <a style={{ color: "white", fontSize: "2.2rem" }}>
    //                 {item.name}
    //               </a>
    //             </li>
    //           </div>
    //         </Link>
    //       );
    //     })}
    //   </ul>
    // </nav>

    <div className={"container pt-3"}>
      <div className={"row navbar"}>
        {Navitem.map((item) => {
          return (
            <Link to={item.link} className={"col-2 buttonDiv"}>
              <div key={item.id} className={"buttonNav"}>
                <div className={"linkNav"}>{item.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
