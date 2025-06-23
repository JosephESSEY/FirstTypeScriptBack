import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel, { User } from "../models/UserModel";

class AuthService {
  async register(name: string, email: string, password: string) {
    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) throw new Error("Email already in use");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({ name, email, password: hashedPassword });

    return { id: newUser.id, email: newUser.email };
  }

  async login(email: string, password: string) {
    const user = await UserModel.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return { token };
  }
}

export default new AuthService();
