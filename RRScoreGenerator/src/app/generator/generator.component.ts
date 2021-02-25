import { Component, OnInit } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";
import { PrimeNumberGenerator } from "./models";
import { UpdPrimeNumGenerator } from "./models/updPrimeNumberGenerator";

@Component({
  selector: "app-home",
  templateUrl: "./generator.component.html",
  styleUrls: ["./generator.component.scss"],
  animations: [
    trigger("allPrimeList", [
      transition("*=>*", [
        query(":enter", style({ opacity: 0 }), { optional: true }),
        query(
          ":enter",
          stagger("300ms", [
            animate(
              ".6s ease-in",
              keyframes([
                style({ opacity: 0, transform: "translateY(-75%)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(35px)",
                  offset: 0.3
                }),
                style({ opacity: 1, transform: "translateY(0)", offset: 1 })
              ])
            )
          ]),
          { optional: true }
        ),

        query(
          ":leave",
          stagger("300ms", [
            animate(
              ".6s ease-in",
              keyframes([
                style({ opacity: 1, transform: "translateY(0)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(35px)",
                  offset: 0.3
                }),
                style({ opacity: 0, transform: "translateY(-75%)", offset: 1 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})

/**
 * @export
 * @class GeneratorComponent
 * @implements {OnInit}
 */
export class GeneratorComponent implements OnInit {
  btnText:string ='Get Score!';
  goalText:number;
  allPrimeList:any[]=[];
  startingNumber:number;
  endingNumber:number;
  primeNumList:Number[];
  RRScoreList: Number[];
  customerName :string

  constructor() {}

  /**
   * 
   * @param {any} i 
   * @memberof GeneratorComponent
   * remove item from list
   */
  removeItem(i):void {
    this.allPrimeList.pop()
  }
/**
 * @memberof GeneratorComponent
 * main method to generate prime numbers by user's input
 */
generatePrimes():void {
  let generator:PrimeNumberGenerator = new UpdPrimeNumGenerator();
  //generate primeNumList by given starting and ening number
  this.primeNumList = generator.generate(this.startingNumber,this.endingNumber);
  this.RRScoreList = generator.customerRRScoreGenerator(this.customerName);
  this.customerName = null;
  

  if(this.primeNumList.length !==0){
    this.allPrimeList.push(this.primeNumList);

    //reset values
    this.primeNumList = [];
    this.startingNumber = null;
    this.endingNumber = null; 
  }
  else{
    alert('Please enter a valid number')
  }
  }

  ngOnInit() {
;
  }
}