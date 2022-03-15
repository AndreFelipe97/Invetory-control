import { Layout } from "./components/_layout";
import GlobalStyle from "./styles/global";
import { HashRouter } from "react-router-dom";
import SignIn from "./pages/SignIn/signIn";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      {/* <Layout /> */}
      <SignIn />
    </HashRouter>
  );
}

export default App;
