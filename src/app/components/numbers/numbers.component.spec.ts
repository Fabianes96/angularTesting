import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersComponent } from './numbers.component';
import { RomanNumeralsService } from '../../services/roman-numerals.service';

describe('NumbersComponent', () => {
  let component: NumbersComponent;
  let fixture: ComponentFixture<NumbersComponent>;
  var rms: RomanNumeralsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rms = new RomanNumeralsService();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //
  it('should return a message',()=>{
    expect(rms.aRomano(0)).toEqual("No se puede calcular");
  })
  it('should return I',async()=>{
    expect(rms.aRomano(1)).toEqual('I');
  })
  it('should return II',()=>{
    expect(rms.aRomano(2)).toEqual('II');
  })
  it('should return III',()=>{
    expect(rms.aRomano(3)).toEqual('III');
  })
  it('should return IV',()=>{
    expect(rms.aRomano(4)).toEqual('IV');
  })
  it('should return V',()=>{
    expect(rms.aRomano(5)).toEqual('V');
  })
  it('should return VI',()=>{
    expect(rms.aRomano(6)).toEqual('VI');
  })
  it('should return VII',()=>{
    expect(rms.aRomano(7)).toEqual('VII');
  })
  it('should return VIII',()=>{
    expect(rms.aRomano(8)).toEqual('VIII');
  })
  it('should return IX',()=>{
    expect(rms.aRomano(9)).toEqual('IX');
  })
  it('should return X',()=>{
    expect(rms.aRomano(10)).toEqual('X');
  })
});

