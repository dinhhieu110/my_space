import jwt from "jsonwebtoken";
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET);
      return res
        .status(200)
        .json({ message: "Login successful", success: true, token });
    } else {
      return res
        .status(401)
        .json({ message: "Invalid credentials", success: false });
    }
  } catch (error) {}
};
