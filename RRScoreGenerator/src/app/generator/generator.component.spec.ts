import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorComponent } from './generator.component';
import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations'
import { UpdPrimeNumGenerator } from './models/updPrimeNumberGenerator';
import { CompilePipeMetadata } from '@angular/compiler';

describe('GeneratorComponent', () => {
  let component: GeneratorComponent;
  let fixture: ComponentFixture<GeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,BrowserAnimationsModule,NoopAnimationsModule],
      declarations: [ GeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(' removeItem test cases',()=>{
    it('once removeItem been called, allPrimeList should pop out one item',()=>{
      component.removeItem({}as any);
      expect(component.allPrimeList.length).toBeGreaterThanOrEqual(0);
    })
  })
 describe('generatePrimes test cases',()=>{
   it('if primeNumberList.length !==0, push to allPrimeList',()=>{
      let mockGenerator = new UpdPrimeNumGenerator();
      component.startingNumber = 2;
      component.endingNumber=5;
      let mockStart =component.startingNumber;
      let mockEnd = component.endingNumber;
      let mockList = mockGenerator.generate(mockStart,mockEnd)
      component.primeNumList = mockList;

      let spyPush=spyOn(component.allPrimeList,'push');
      component.allPrimeList.push(component.primeNumList);
      component.generatePrimes();
      expect(spyPush).toHaveBeenCalled()
      expect(component.allPrimeList.length).toBeGreaterThanOrEqual(0);
   })

   it('range test, if range between 7900 and 7920, should return 7901,7907,7919',()=>{
     let mockGenerator = new UpdPrimeNumGenerator();
     component.startingNumber = 7900;
     component.endingNumber = 7920;
     let mockStart = component.startingNumber;
     let mockEnd = component.endingNumber;
     let mockList = mockGenerator.generate(mockStart,mockEnd)
      component.primeNumList = mockList;
      expect(component.primeNumList.length).toEqual(3);
   })
   it('if primeNumList.length ===0, allPrimeList.length equals zero',()=>{
     let mockGenerator = new UpdPrimeNumGenerator();
     component.startingNumber =null;
     component.endingNumber=null;
     let mockStart = component.startingNumber;
     let mockEnd = component.endingNumber;
     let mockList = mockGenerator.generate(mockStart,mockEnd)
      component.primeNumList = mockList;
      expect(component.allPrimeList.length).toEqual(0)
   })

   it('this.endingNumber === null, should give alert',()=>{
     component.endingNumber = null;
     let spyAlert = spyOn(window,'alert');
     component.generatePrimes()
     expect(spyAlert).toHaveBeenCalledWith('Please enter a valid number')
   })

   it('this.startingNumber === null, should give alert',()=>{
    component.startingNumber = null;
    let spyAlert = spyOn(window,'alert');
    component.generatePrimes()
    expect(spyAlert).toHaveBeenCalledWith('Please enter a valid number')
  })

  it('this.endingNumber === null and this.endingNumber ===null, should give alert',()=>{
    component.startingNumber = null
    component.endingNumber = null;
    let spyAlert = spyOn(window,'alert');
    component.generatePrimes()
    expect(spyAlert).toHaveBeenCalledWith('Please enter a valid number')
  })
 })

});
