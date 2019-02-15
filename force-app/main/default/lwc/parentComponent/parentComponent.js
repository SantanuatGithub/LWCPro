import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track answer = "Child: ";
    question = "Parent: Have you completed study for today?";
  
    handleAnswer(event) {
      /*eslint-disable-next-line*/
      console.log("res-->" + event.detail);
      const res = event.detail;
      this.answer = this.answer + res;
    }
}