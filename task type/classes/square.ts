import { Rectangle } from "./Rectangle";

export class square extends Rectangle{



    constructor(num:number){
        super(num,num)
    }


    CalcCircumference(): number {
        let cal :number= 4 * this.hight
        return cal
    }

    static WhoAmI() {
        return "im square"
    }
}