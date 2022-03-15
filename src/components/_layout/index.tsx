import Routes from "../../routes";
import { Content } from "./content";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export function Layout() {
  return (
    <div className="d-flex flex-row p-0">
      <div>
        <Sidebar />
      </div>
      <div className="p-2 flex-grow-1">
        <Navbar />
        <Content>
          <Routes />
        </Content>
      </div>
    </div>
  );
}
