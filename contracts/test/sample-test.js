const { expect } = require("chai");

describe("Greeter", function() {
    it("Should return the new greeting onece it's changed", async function(){
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello, world!");
        await greeter.deployed();

        expect(await greeter.greet()).to.equaal("Hello, world!");

        const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

        await setGreetingTx.wait();

        expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
});