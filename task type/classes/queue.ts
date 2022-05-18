export class Queue{

    private arr :number[];
    private front :number ;
    private back :number;
    private lenght:number;

    constructor(size:number){
       this. arr=new Array(size)
       this.front=-1
       this.back=-1
       this.lenght=size

    }
    private isempty(){

        return this.front==-1
    }
     private IsFull(){
         return this.front==0 && this.back==this.lenght-1
     }
     enqueue(value:number){
         if(this.IsFull()){
             console.log("queue is full")
             return ;
         }
         if(this.front==-1){
             this.front=0;
             this.back++;
            this.arr[this.back]=value
         }
     }

     dequeue(){
         let e:number ;
         if(this.isempty()){
             console.log("queue is empty")
             return ;
         }else{
              e = this. arr[this.front]
             if(this.front>=this.back){
                this.front = -1;
                this.back = -1;
             }else{
                 this.front++
             }
         }
         return e ;
     }

}