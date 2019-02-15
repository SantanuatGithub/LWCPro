import { LightningElement, track } from 'lwc';
import { calculator } from 'c/calculator';

export default class Calculation extends LightningElement {

  @track result = "";
  @track input1;
  @track input2;
  @track mode;

  modeOptions = [
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "*", value: "*" },
    { label: "/", value: "/" }
  ];

  changeInput1(event) {
    this.input1 = event.target.value;
  }

  changeInput2(event) {
    this.input2 = event.target.value;
  }

  changeMode(event) {
    this.mode = event.target.value;
  }

  doCalculation() {
    /*eslint-disable-next-line*/
    console.log(
      "input1--->" +
        this.input1 +
        "input2---->" +
        this.input2 +
        "mode--->" +
        this.mode
    );
    this.result = calculator(this.input1, this.input2, this.mode);
  }

  doReset(){
    this.input1 = null;
    this.input2 = null;
    this.mode = null;
  }
}