class queue {
    constructor() {
        this.queuearr = [];
        this.head = 0;
        this.tial = this.queuearr.length - 1;
        this.size = 5;
    }
    push(element) {
        if (this.queuearr.length > 5) {
            console.log("queue is overflow");
        } else {
            this.queuearr[this.queuearr.length] = element;
            console.log(this.queuearr);
            this.tial = this.queuearr.length - 1;
        }
    }
    pop(){
        if (this.head == 0 && this.tial == -1) {
            console.log("the queue is empty");
          } else {
            for (let i = this.head; i < this.queuearr.length-1; i++) {
              this.queuearr[i] = this.queuearr[i + 1];
            }
            this.queuearr.length--;
            // queuearr.shift();
            console.log(this.queuearr);
          }
    }
}

let queuearray = new queue();
queuearray.push(1);
queuearray.push(2);
queuearray.push(3);
queuearray.push(4);
queuearray.push(5);
queuearray.push(6);
queuearray.push(7);
queuearray.pop();