"use strict";
/**
 * Created by Palko on 20/09/2016.
 */
var Present = (function () {
    function Present(name, weight, presentType) {
        this._name = name;
        this._weight = weight;
        this._presentType = presentType;
    }
    Present.prototype.getname = function () {
        return this._name;
    };
    Present.prototype.getweight = function () {
        return this._weight;
    };
    Present.prototype.getpresentType = function () {
        return this._presentType;
    };
    Present.prototype.getPresentInfo = function () {
        console.log(this.getname() + " " + this.getweight() + "" + " " + (this.getRepresentationOfPresentType()));
    };
    Present.prototype.getRepresentationOfPresentType = function () {
        if (this.getpresentType() == 0) {
            return "SOFT";
        }
        else {
            return "HARD";
        }
    };
    return Present;
}());
exports.Present = Present;
//# sourceMappingURL=present.js.map