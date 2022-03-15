export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border border-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div>
          <a href="#">Sair</a>
        </div>
      </div>
    </nav>
  );
}
