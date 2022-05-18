

export class Rectangle {
    hight: number;
    width: number;

    constructor(hight: number, width: number) {
        this.hight = hight;
        this.width = width;
    }
   


    CalcCircumference(): number {

        let cal: number = (this.hight + this.width) * 2
        return cal


    }


    static WhoAmI(){
        return "im rectangle"
    }

}