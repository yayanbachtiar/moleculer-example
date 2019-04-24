"use strict";

const { ServiceBroker } = require("moleculer");
const TestService = require("../../services/math.service");

describe("Test 'greeter' service", () => {
	let broker = new ServiceBroker({ logger: false });
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'greeter.hello' action", () => {

		it("should return with 'Hello Moleculer'", () => {
			expect(broker.call("math.add", { a: 10, b: 2 })).resolves.toBe(12);
		});

	});

	describe("Test 'greeter.welcome' action", () => {

		it("should return with 'Welcome'", () => {
			expect(broker.call("math.mult", { a: 12, b: 2 })).resolves.toBe(24);
		});
	});

});

