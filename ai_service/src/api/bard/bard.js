import { Router } from "express";
import { getResponse } from "../../services/bardService/bardService.js";
import { HttpResponse } from "../../models/response.js";

const bardRouter = Router();

bardRouter.post("/chat", async (req, res, next) => {
  const response = await getResponse(req.body.message, req.body.count ?? 1);
  return HttpResponse.ok(res, response);
});

export default bardRouter;
