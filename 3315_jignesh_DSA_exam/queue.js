class queue {
    constructor() {
        this.queuearr = [];
        this.head = 0;
        this.tial = this.queuearr.length - 1;
        this.size = 5;
    }
    add(element) {
        if (this.queuearr.length > 5) {
            console.log("queue is overflow");
        } else {
            this.queuearr[this.queuearr.length] = element;
            console.log(this.queuearr);
            this.tial = this.queuearr.length - 1;
        }
    }
    remove(){
        if (this.queuearr.length == 0) {
            console.log("the queue is underflow");
          } else {
            for (let i = this.head; i < this.queuearr.length-1; i++) {
              this.queuearr[i] = this.queuearr[i + 1];
            }
            this.queuearr.length--;
            console.log(this.queuearr);
          }
    }
}
let result = new queue();
result.add(1);
result.add(2);
result.add(3);
result.add(4);
result.add(5);
result.add(6);
result.add(7);
result.remove();
result.remove();
result.remove();
result.remove();
