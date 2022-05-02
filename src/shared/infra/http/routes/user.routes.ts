import { Router } from "express";
import { CreateUserController } from "../../../../modules/user/useCases/createUser/CreateUserController";
import { GetCurrentCoinsController } from "../../../../modules/user/useCases/getCurrentCoins/GetCurrentCoinsController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const getCurrentCoins = new GetCurrentCoinsController();

userRoutes.post("/", createUserController.handle);

userRoutes.get("/coins", getCurrentCoins.handle);

export { userRoutes };
