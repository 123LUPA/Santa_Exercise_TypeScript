"use strict";
/**
 * Created by Palko on 20/09/2016.
 */
var Bag = (function () {
    function Bag(maxWight, bagType) {
        this.presents = new Array();
        this.maxWight = maxWight;
        this.bagType = bagType;
    }
    Bag.prototype.addPresent = function (p) {
        if (this.checkFit(p)) {
            if (this.totalWeight() + p.getweight() <= this.getMaxWight()) {
                this.presents.push(p);
                return true;
            }
            else {
                return false;
            }
        }
    };
    Bag.prototype.checkFit = function (p) {
        if (p.getpresentType() == 0 && this.getBagType() == 0) {
            return false;
        }
        return true;
    };
    Bag.prototype.getBagType = function () {
        return this.bagType;
    };
    Bag.prototype.printAllPresentsInfo = function () {
        console.log("Bag has following presents: ");
        for (var _i = 0, _a = this.presents; _i < _a.length; _i++) {
            var item = _a[_i];
            item.getPresentInfo();
        }
        console.log("This bag has max weight" + " " + this.getMaxWight() + " " + "and is type of" + " " + this.getRepresentationOfBagType());
    };
    Bag.prototype.getMaxWight = function () {
        return this.maxWight;
    };
    Bag.prototype.getRepresentationOfBagType = function () {
        if (this.getBagType() == 0) {
            return "PAPER";
        }
        else {
            return "CANVAS";
        }
    };
    Bag.prototype.totalWeight = function () {
        this.sumWeight = 0;
        for (var _i = 0, _a = this.presents; _i < _a.length; _i++) {
            var item = _a[_i];
            this.sumWeight += item.getweight();
        }
        return this.sumWeight;
    };
    return Bag;
}());
exports.Bag = Bag;
//# sourceMappingURL=bag.js.map