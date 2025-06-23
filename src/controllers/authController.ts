import { Request, Response } from "express";
import AuthService from "../services/AuthService";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await AuthService.register(name, email, password);
    res.status(201).json({ message: "User created", user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await AuthService.login(email, password);
    res.status(200).json({ message: "Login successful", ...data });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
