import { useState } from "react";
import { useGlobalState } from "../../contexts/AppContext";
import toast from "react-hot-toast";
import { RoutePath } from "../../utils/enums";

const Login = () => {
  const INIT_FORM = {
    email: "",
    password: "",
  };
  const { axios, setToken, navigate } = useGlobalState();

  const [loginForm, setLoginForm] = useState(INIT_FORM);
  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin/login", loginForm);
      if (data?.success) {
        setToken(data.token);
        setLoginForm(INIT_FORM);
        toast.success("Login successful");
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        navigate(RoutePath.AdminBase);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Owner</span> Login
            </h1>
            <p className="font-light">
              Enter credentials to access the admin panel
            </p>
          </div>
          <form
            onSubmit={handleLogin}
            className="mt-6 w-full sm:max-w-md text-gray-600"
          >
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={loginForm?.email}
                required
                placeholder="Enter email"
                onChange={handleLoginFormChange}
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                required
                onChange={handleLoginFormChange}
                placeholder="Enter password"
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
