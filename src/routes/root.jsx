import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{ borderBottom: "1px solid #bf1650" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand">React Hook Form</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to={"/basic"}>
                Basic
              </Link>
              <Link className="nav-link" to={"/validation"}>
                Validation
              </Link>
              <Link className="nav-link" to={"/existing-form"}>
                Integrating an existing form
              </Link>
              <Link className="nav-link" to={"/ui-libraries"}>
                Integrating with UI libraries
              </Link>
              <Link className="nav-link" to={"/controlled-inputs"}>
                Integrating Controlled Inputs
              </Link>
              <Link className="nav-link" to={"/schema-validation"}>
                Schema Validation ( yup )
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
