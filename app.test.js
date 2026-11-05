const request = require("supertest");
const app = require("./app");

describe("Node.js Demo Application", () => {
    test("GET / should return the welcome message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(
            "Hello! My Node.js CI/CD pipeline is working."
        );
    });

    test("GET /health should return status OK", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status: "OK" });
    });
});
