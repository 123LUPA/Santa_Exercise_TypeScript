/**
 * Created by Palko on 20/09/2016.
 */
export class Santa{


    private name : string;
    private age : number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

     public  getName() : string{
        return this.name;
    }

    public getAge() : number{
        return this.age;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setAge(age : number){
        this.age = age;
    }



}