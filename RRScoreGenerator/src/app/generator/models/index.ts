 export interface PrimeNumberGenerator{
     generate(startingValue:number, endingValue:number):Array<Number>;
     isPrime(value:number):boolean;
     customerRRScoreGenerator(name:string):Array<Number>;
 }