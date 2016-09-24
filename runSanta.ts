import {Santa} from "./santa";
import {Sled} from "./sled";
import {Bag} from "./bag";
import {Present} from "./present";
import {BagType} from "./bagType";
import {PresentType} from "./presentType";

/**
 * Created by Palko on 20/09/2016.
 */


     let santa1 = new Santa("Lucia",10);
     let sled = new Sled(santa1);

     let bag = new Bag(10,BagType.PAPER);

     let present1 = new Present("teddy",5,PresentType.HARD);
     let present2 = new Present("pillow",10,PresentType.HARD);


    present1.getPresentInfo();
    present2.getPresentInfo();
    bag.addPresent(present1);
    sled.addNewBagIfNeeded(present2);
    bag.addPresent(present2);
    bag.printAllPresentsInfo();
    sled.addBags(bag);
    sled.getAllBagsInformation();
    sled.printAll(bag);
