//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OkamiToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("OkamiToken", "OT") {
        _mint(msg.sender, initialSupply);
    }
}
