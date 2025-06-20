import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
interface FormData {
  username: string;
  password: string;
}
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data
      );
      toast.success("Login successful!");
      navigate("/dashboard");
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed.");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="bg-login container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-xl-3 col-md-5 bg-white text-center pt-4 pb-5 pe-3 ps-3 rounded-4 shadow">
          <h4 className="text-dark pt-2 pb-5 ">
            {" "}
            <span className="text-warning p-2">
              <b>|</b>
            </span>
            <b>User Management System</b>
          </h4>
          <h5 className="text-dark text-uppercase">Sign In</h5>
          <p className="text-muted">
            Enter your credentials to access your account
          </p>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating mb-3">
              <input
                type="name"
                className="form-control"
                id="floatingInput"
                placeholder="Enter your user name"
                {...register("username", { required: "User name is required" })}
              />
              <label htmlFor="floatingInput">User name</label>
            </div>
            {errors.username && (
              <span className="text-danger text-start">
                {errors.username.message}
              </span>
            )}
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {errors.password && (
              <span className="text-danger text-start">
                {" "}
                {errors.password.message}
              </span>
            )}
            <button className="btn btn-login w-100  mt-3 text-white">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
