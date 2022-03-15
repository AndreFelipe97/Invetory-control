import { FiUser, FiLock } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Img } from "./styles";

export default function SignIn() {
  const history = useHistory();

  function handleSubmit() {
    history.push("/lista-produto");
  }

  return (
    <div className="d-flex flex-row p-0">
      <div className="d-flex flex-column justify-content-center m-5 w-25">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text bg-white">{<FiUser />}</span>
              <input
                type="text"
                className="form-control w-75"
                aria-label="Email"
                placeholder="Seu e-mail"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text bg-white">{<FiLock />}</span>
              <input
                type="text"
                className="form-control w-75"
                aria-label="senha"
                placeholder="Sua senha"
              />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <a href="#">Esqueceu a senha?</a>
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
        </form>
      </div>
      <Img />
    </div>
  );
}
