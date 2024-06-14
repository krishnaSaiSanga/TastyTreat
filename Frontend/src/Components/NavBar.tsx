const Navbar = (props: any) => {
  return (
    <div>
      <div id="NavBar">
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              hello
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ms-2">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item ms-2">
                  <a className="nav-link" href="/billing">
                    Billing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <img className="icon" src={props.treat} alt="loading" />
    </div>
  );
};

export default Navbar;
