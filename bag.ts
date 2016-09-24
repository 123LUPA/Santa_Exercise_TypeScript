import {Present} from "./present";
import {BagType} from "./bagType";
import {PresentType} from "./presentType";

/**
 * Created by Palko on 20/09/2016.
 */

export class Bag {


    private presents: Array<Present> = new Array<Present>();
    public sumWeight: number;
    private maxWight: number;
    private bagType: BagType;

    constructor(maxWight: number, bagType: BagType) {
        this.maxWight = maxWight;
        this.bagType = bagType;

    }




    public addPresent(p: Present): boolean {

        if(this.checkFit(p))
        {
            if (this.totalWeight() + p.getweight()<=this.getMaxWight()) {
                this.presents.push(p);
                return true;
            }

            else{
                return false;
            }

        }




    }

    private checkFit(p: Present):boolean{
        if(p.getpresentType()== 0 && this.getBagType()== 0){
            return false;

        }
        return true;

    }

    public getBagType(): BagType {
        return this.bagType;
    }



    public printAllPresentsInfo() {
        console.log("Bag has following presents: ")
        for (let item of this.presents) {
          item.getPresentInfo();
        }

        console.log("This bag has max weight" + " " + this.getMaxWight() + " " + "and is type of" + " " + this.getRepresentationOfBagType())
    }

    public getMaxWight(): number {
        return this.maxWight;
    }

    public getRepresentationOfBagType() {
        if (this.getBagType() == 0) {
            return "PAPER"
        }
        else {
            return "CANVAS";
        }
    }

    public totalWeight(): number {
        this.sumWeight = 0;
        for (let item of this.presents) {

            this.sumWeight +=item.getweight();
        }
        return this.sumWeight;







    }







}
