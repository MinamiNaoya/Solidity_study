// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 < 0.9.0;

import "hardhat/console.sol";

contract Greeter{
    string greeting;
    constructor(string memory _greeting){
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }
    function greet() public view returns (string memory){
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
    }
}
