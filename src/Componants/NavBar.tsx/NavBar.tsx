import icon from "../../../public/Vector.png";
import bell from "../../../public/bell 1.png";
export const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <img src={icon} alt="" />
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <img className="img-fluid" src={bell} alt="" />
        </form>
      </div>
    </nav>
  );
};
