"use strict";
/**
 * Created by Palko on 20/09/2016.
 */
var Santa = (function () {
    function Santa(name, age) {
        this.name = name;
        this.age = age;
    }
    Santa.prototype.getName = function () {
        return this.name;
    };
    Santa.prototype.getAge = function () {
        return this.age;
    };
    Santa.prototype.setName = function (name) {
        this.name = name;
    };
    Santa.prototype.setAge = function (age) {
        this.age = age;
    };
    return Santa;
}());
exports.Santa = Santa;
//# sourceMappingURL=santa.js.map