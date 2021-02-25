 export interface PrimeNumberGenerator{
     generate(startingValue:number, endingValue:number):Array<Number>;
     isPrime(value:number):boolean;
 }