import { Router } from "express";
import { UserController } from "@/controllers/userController";
import { authMiddleware } from "@/middleware/authMiddleware";

export const getUserRoutes = () => {
  const userController = new UserController();
  const router: Router = Router();
  
  // 登录或注册 - 不需要认证
  router.post("/login", (req, res) => userController.loginOrRegister(req, res));
  
  // 获取用户信息 - 需要认证
  router.get("/profile", authMiddleware, (req, res) => userController.getCurrentUser(req, res));
  
  return router;
};
