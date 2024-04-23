import { NavLink, Outlet } from "react-router-dom";

function Layouts() {
  const navBar = [
    { id: 1, url: "Home", path: "/" },
    { id: 2, url: "About", path: "/about" },
    { id: 3, url: "services", path: "/services" },
    { id: 4, url: "Contact-us", path: "/Contact-us" },
    { id: 4, url: "Register", path: "/register" },
  ];
  return (
    <div>
      <ul>
        {navBar.map((navItems) => {
          return (
            <>
              <NavLink to={navItems.path} key={navItems.id}>
                <li>{navItems.url}</li>
              </NavLink>
            </>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

export default Layouts;
