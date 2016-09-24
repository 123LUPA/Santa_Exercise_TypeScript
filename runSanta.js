"use strict";
var santa_1 = require("./santa");
var sled_1 = require("./sled");
var bag_1 = require("./bag");
var present_1 = require("./present");
var bagType_1 = require("./bagType");
var presentType_1 = require("./presentType");
/**
 * Created by Palko on 20/09/2016.
 */
var santa1 = new santa_1.Santa("Lucia", 10);
var sled = new sled_1.Sled(santa1);
var bag = new bag_1.Bag(10, bagType_1.BagType.PAPER);
var present1 = new present_1.Present("teddy", 5, presentType_1.PresentType.HARD);
var present2 = new present_1.Present("pillow", 10, presentType_1.PresentType.HARD);
present1.getPresentInfo();
present2.getPresentInfo();
bag.addPresent(present1);
sled.addNewBagIfNeeded(present2);
bag.addPresent(present2);
bag.printAllPresentsInfo();
sled.addBags(bag);
sled.getAllBagsInformation();
sled.printAll(bag);
//# sourceMappingURL=runSanta.js.map