import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarContet } from "./styles";

export function Sidebar() {
  const [currentRoute, setCurrentRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SidebarContet className="d-flex flex-column flex-shrink-0 p-3 text-white bg-primary m-0">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Logo - Nome</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link text-white ${
                currentRoute === "/" ? "active" : ""
              }`}
              aria-current="page"
            >
              Item 1
            </Link>
          </li>
          <li>
            <Link
              to="/cadastro-produto"
              className={`nav-link text-white ${
                currentRoute === "/cadastro-produto" ? "active" : ""
              }`}
            >
              Item 2
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Item 3
            </a>
          </li>
        </ul>
      </SidebarContet>
    </>
  );
}
