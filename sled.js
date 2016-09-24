"use strict";
var bag_1 = require("./bag");
var bagType_1 = require("./bagType");
/**
 * Created by Palko on 20/09/2016.
 */
var Sled = (function () {
    function Sled(santa) {
        this.bags = new Array();
        this._santa = santa;
    }
    Sled.prototype.getsanta = function () {
        return this._santa;
    };
    Sled.prototype.addBags = function (b) {
        this.bags.push(b);
    };
    Sled.prototype.setSanta = function (santa) {
        this._santa = santa;
    };
    Sled.prototype.getAllBagsInformation = function () {
        console.log("Bags information are:");
        for (var _i = 0, _a = this.bags; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("This bag has max weight" + " " + item.getMaxWight() + " " + "and is type of" + " " + item.getRepresentationOfBagType());
        }
    };
    Sled.prototype.addNewBagIfNeeded = function (p) {
        if (this.bags.length == 0 || this.checkIfBagAreFull(p)) {
            this.addBags(new bag_1.Bag(10, bagType_1.BagType.CANVAS));
        }
    };
    Sled.prototype.checkIfBagAreFull = function (present) {
        for (var _i = 0, _a = this.bags; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.addPresent(present) == false) {
                return true;
            }
        }
        return false;
    };
    Sled.prototype.printAll = function (b) {
        console.log("Info about bag and presents are: ");
        this.getAllBagsInformation();
        b.printAllPresentsInfo();
    };
    return Sled;
}());
exports.Sled = Sled;
//# sourceMappingURL=sled.js.map