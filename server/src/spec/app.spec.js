import { app } from "../app";
import * as request from "supertest";

describe("Server behavior", () => {
  describe("get route /", () => {
    it("should be a json response type", async () => {
      const { type } = await request.agent(app).get("/");
      expect(type).toEqual("application/json");
    });

    it("should return status code 200 if ok", async () => {
      const { statusCode } = await request.agent(app).get("/");
      expect(statusCode).toEqual(200);
    });

    it("should get a body response", async () => {
      const { body } = await request.agent(app).get("/");
      expect(body).toEqual({ msg: "Teste ok!" });
    });
  });

  describe("get route /user", () => {
    it.todo("should return a json response type");
  });

  //...
});
