import icon from "../../../public/Vector.png";
export const NavBar = () => {
  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <img src={icon} alt="" />
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};
