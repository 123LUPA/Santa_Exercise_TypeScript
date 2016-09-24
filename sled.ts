import {Santa} from "./santa";
import {Bag} from "./bag";
import {Present} from "./present";
import {BagType} from "./bagType";
/**
 * Created by Palko on 20/09/2016.
 */
export class Sled{

    private bag : Bag;

    public getsanta(): Santa {
        return this._santa;
    }



    private _santa : Santa;
    private bags : Array<Bag> = new Array<Bag>();

    constructor(santa:Santa){
        this._santa = santa;
    }

    public addBags(b : Bag): void{
        this.bags.push(b);
    }

    public setSanta(santa : Santa){
        this._santa = santa;
    }

    public getAllBagsInformation() :void {

        console.log("Bags information are:");

            for (let item of this.bags) {

                console.log("This bag has max weight" + " " + item.getMaxWight() + " " + "and is type of" + " " + item.getRepresentationOfBagType());
        }
    }

   public addNewBagIfNeeded(p:Present){
       if(this.bags.length == 0 || this.checkIfBagAreFull(p)){
           this.addBags(new Bag(10,BagType.CANVAS));

        }
    }

    private checkIfBagAreFull(present : Present):boolean{

        for(let item of this.bags){

           if(item.addPresent(present) == false){
               return true;
           }

        }
        return false;
    }

    public printAll(b:Bag):void{
        console.log("Info about bag and presents are: ")
        this.getAllBagsInformation();
        b.printAllPresentsInfo();
}





}