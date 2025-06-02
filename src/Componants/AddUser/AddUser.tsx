import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface userFormData {
  name: string;
  lastName: string;
  age: number;
  phone: string;
  email: string;
  birthdate: string;
}

export const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userFormData>();
  const onSubmit = async (data: userFormData) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        data
      );
      console.log(response);
      toast.success("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user.");
    }
  };
  return (
    <>
      <div>
        <h3 className="p-3">Add New User</h3>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="m-5 shadow-lg p-3">
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
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
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
                  {...register("age", {
                    required: true,
                    min: {
                      value: 16,
                      message: "You must be at least 16 years old",
                    },
                    max: { value: 50, message: "Age must be less than 50" },
                  })}
                />
                {errors.age && (
                  <span className="text-danger">{errors.age.message}</span>
                )}
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
                  {...register("phone", {
                    required: true,
                  })}
                />
                {errors.phone && (
                  <span className="text-danger">
                    Please enter a valid phone number
                  </span>
                )}
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
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className="text-danger">This field is required</span>
                )}
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
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="birthdate" className="form-label">
                  Birth Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthdate"
                  placeholder="Enter birthdate"
                  {...register("birthdate", { required: true })}
                />
                {errors.birthdate && (
                  <span className="text-danger">This field is required</span>
                )}
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
