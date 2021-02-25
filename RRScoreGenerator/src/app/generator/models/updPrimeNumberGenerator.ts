import { PrimeNumberGenerator } from ".";
import { Component } from "@angular/core";
import { mockUpDatas } from "./mockCustomer";
/**
 * @export
 * @class UpdPrimeNumGenerator
 * @implements {PrimeNumberGenerator}
 */
@Component({
    template:''
})
export class UpdPrimeNumGenerator implements PrimeNumberGenerator{
    newReturnList: Array<Number> = [];

    generate(startingNumber:number,endingNumber:number):Array<Number>{

        //E.g. start:1, end:5, start should return 1
        let start = startingNumber<endingNumber?startingNumber:endingNumber;

        //E.g. start:5, end:1, end should return 5
        let end = startingNumber>endingNumber?startingNumber:endingNumber;

        if(start&&end){
            for(let i = start; i<=end;i++){
                // check if the number isPrime, then push to newReturnList
                if(this.isPrime(i)){
                    this.newReturnList.push(i)
                }
            }
        }
        return this.newReturnList;
    }
    
    customerRRScoreGenerator(name:string):Array<Number>{
        const data = mockUpDatas;
        data[0].email = "yilang@test.com"
        console.log(data[0]);
        console.log(name)
        return this.newReturnList;
    }

/**
 * 
 * @param {number} value 
 * @returns {boolean} 
 * @memberof UpdPrimeNumGenerator
 * method to check if number is prime
 */
isPrime(value:number):boolean{
        for(let i=2;i<value;i++){
            if(value %i===0){
                return false
            }
        }
        return value>1;
    }

}