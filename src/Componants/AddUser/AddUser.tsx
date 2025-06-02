export const AddUser = () => {
  return (
    <>
      <div>
        <h3 className="p-3">Add New User</h3>
        <hr />
        <form className="m-5 shadow-lg p-3">
          <div className="row pt-5 pe-5 ps-5">
            <div className=" col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter first name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Enter age"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="birthdate" className="form-label">
                  Birth Date
                </label>
                <input type="date" className="form-control" id="birthdate" />
              </div>
            </div>
          </div>
          <div className=" p-3 text-center">
            <button type="submit" className="btn btn-login text-white w-75">
              Add User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
