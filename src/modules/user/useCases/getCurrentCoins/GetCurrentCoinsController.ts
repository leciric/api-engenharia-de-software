import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetCurrentCoinsUseCase } from "./GetCurrentCoinsUseCase";

class GetCurrentCoinsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const getCurrentCoinsUseCase = container.resolve(GetCurrentCoinsUseCase);

    const coins = await getCurrentCoinsUseCase.execute({ email });

    return response.status(200).json(coins);
  }
}

export { GetCurrentCoinsController };
