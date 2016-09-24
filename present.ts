import {PresentType} from "./presentType";
/**
 * Created by Palko on 20/09/2016.
 */
export class Present {

    private _name: string;
    private _weight: number;
    private _presentType: PresentType;


    public getname(): string {
        return this._name;
    }

    public getweight(): number {
        return this._weight;
    }

    public getpresentType(): PresentType {
        return this._presentType;
    }


    constructor(name: string, weight: number, presentType: PresentType) {
        this._name = name;
        this._weight = weight;
        this._presentType = presentType;


    }

    public getPresentInfo(): void {

        console.log(this.getname() + " " + this.getweight() + "" + " " + (this.getRepresentationOfPresentType()));


    }
    public getRepresentationOfPresentType(){
        if(this.getpresentType() ==0){
            return "SOFT"
        }
        else{
            return "HARD"
        }
    }

}