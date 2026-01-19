import React from "react";
import { Logo, LogoutBtn, Container } from "../index.js";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  //home, login ,sign up,all posts , add post
  const navItems = [
    {
      name: "Home",
      url: "/",
      active: true,
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus,
    },
    {
      name: "Sign up",
      url: "/sign-up",
      active: !authStatus,
    },
    {
      name: "All posts",
      url: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add posts",
      url: "/add-posts",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={navigate(item.url)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded null"
                  >
                    item.name
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
