import React, { useState } from "react";
import { Nav, Collapse } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
import { Menu } from "../configs/constants";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleNavigation = (link: string) => {
    if (link == "logout") {
      localStorage.removeItem("sm-magic");
      navigate("/sign-in");
    } else {
      navigate("/dashboard/" + link);
    }
  };

  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <img src={Logo} className="mb-4 w-100" />
        {Menu.map((elmt) => {
          const { Icon } = elmt;
          return elmt.subMenu ? (
            <>
              <Nav.Item
                className={`ps-3 d-flex text-truncate`}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <Icon className="align-self-center" />
                <Nav.Link>{elmt.name}</Nav.Link>
              </Nav.Item>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  {elmt.subMenu?.map((item) => {
                    const {Icon} = item;
                    return (
                      <Nav.Item
                        className={`ps-4 d-flex ${
                          location.pathname.split('/').pop() == item.link ? "active" : ""
                        }`}
                        onClick={() => handleNavigation(item.link)}
                      >
                        <Icon className="align-self-center" />
                        <Nav.Link>{item.name}</Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </div>
              </Collapse>
            </>
          ) : (
            <Nav.Item
              className={`ps-3 d-flex ${
                location.pathname.split('/').pop() == elmt.link ? "active" : ""
              }`}
              onClick={() => handleNavigation(elmt.link)}
            >
              <Icon className="align-self-center" />
              <Nav.Link>{elmt.name}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </>
  );
};
export default Sidebar;
