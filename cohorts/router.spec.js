const request = require("supertest");
const server = require("../api/server.js");

describe("cohorts router", function() {
    it("should run the tests", function() {
        expect(true).toBe(true);
    });

    describe("GET /", function() {
        it("should return 200 ok", function() {
            request(server).get('/api/cohorts')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        });
        it('should return cohorts as the router value', function() {
            request(server)
                .get('/api/cohorts')
                .then(res => {
                    expect(res.body.router).toBe('cohorts');
                });
        });
    })
});