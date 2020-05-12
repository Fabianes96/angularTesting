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
  //1
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
  //4
  it('should return IV',()=>{
    expect(rms.aRomano(4)).toEqual('IV');
  })
  //5
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
  //9
  it('should return IX',()=>{
    expect(rms.aRomano(9)).toEqual('IX');
  })
  //10
  it('should return X',()=>{
    expect(rms.aRomano(10)).toEqual('X');
  })
  it('should return XI',()=>{
    expect(rms.aRomano(11)).toEqual('XI');
  })
  it('should return XII',()=>{
    expect(rms.aRomano(12)).toEqual('XII');
  })
  it('should return XIII',()=>{
    expect(rms.aRomano(13)).toEqual('XIII');
  })
  it('should return XIV',()=>{
    expect(rms.aRomano(14)).toEqual('XIV');
  })
  it('should return XV',()=>{
    expect(rms.aRomano(15)).toEqual('XV');
  })
  it('should return XVI',()=>{
    expect(rms.aRomano(16)).toEqual('XVI');
  })
  it('should return XVII',()=>{
    expect(rms.aRomano(17)).toEqual('XVII');
  })
  it('should return XVIII',()=>{
    expect(rms.aRomano(18)).toEqual('XVIII');
  })
  it('should return XIX',()=>{
    expect(rms.aRomano(19)).toEqual('XIX');
  })
  it('should return XX',()=>{
    expect(rms.aRomano(20)).toEqual('XX');
  })
  it('should return XXI',()=>{
    expect(rms.aRomano(21)).toEqual('XXI');
  })
  it('should return XXII',()=>{
    expect(rms.aRomano(22)).toEqual('XXII');
  })
  it('should return XXIII',()=>{
    expect(rms.aRomano(23)).toEqual('XXIII');
  })
  it('should return XXIV',()=>{
    expect(rms.aRomano(24)).toEqual('XXIV');
  })
  it('should return XXV',()=>{
    expect(rms.aRomano(25)).toEqual('XXV');
  })
  it('should return XXVI',()=>{
    expect(rms.aRomano(26)).toEqual('XXVI');
  })
  it('should return XXVII',()=>{
    expect(rms.aRomano(27)).toEqual('XXVII');
  })
  it('should return XXVIII',()=>{
    expect(rms.aRomano(28)).toEqual('XXVIII');
  })
  it('should return XXIX',()=>{
    expect(rms.aRomano(29)).toEqual('XXIX');
  })
  it('should return XXX',()=>{
    expect(rms.aRomano(30)).toEqual('XXX');
  })
  it('should return XXXI',()=>{
    expect(rms.aRomano(31)).toEqual('XXXI');
  })
  it('should return XXXII',()=>{
    expect(rms.aRomano(32)).toEqual('XXXII');
  })
  it('should return XXXIII',()=>{
    expect(rms.aRomano(33)).toEqual('XXXIII');
  })
  it('should return XXXIV',()=>{
    expect(rms.aRomano(34)).toEqual('XXXIV');
  })
  it('should return XXXV',()=>{
    expect(rms.aRomano(35)).toEqual('XXXV');
  })
  it('should return XXXVI',()=>{
    expect(rms.aRomano(36)).toEqual('XXXVI');
  })
  it('should return XXXVII',()=>{
    expect(rms.aRomano(37)).toEqual('XXXVII');
  })
  it('should return XXXVIII',()=>{
    expect(rms.aRomano(38)).toEqual('XXXVIII');
  })
  it('should return XXXIX',()=>{
    expect(rms.aRomano(39)).toEqual('XXXIX');
  })
  //40
  it('should return XL',()=>{
    expect(rms.aRomano(40)).toEqual('XL');
  })
  it('should return XLI',()=>{
    expect(rms.aRomano(41)).toEqual('XLI');
  })
  it('should return XLII',()=>{
    expect(rms.aRomano(42)).toEqual('XLII');
  })
  it('should return XLIII',()=>{
    expect(rms.aRomano(43)).toEqual('XLIII');
  })
  it('should return XLIV',()=>{
    expect(rms.aRomano(44)).toEqual('XLIV');
  })
  it('should return XLV',()=>{
    expect(rms.aRomano(45)).toEqual('XLV');
  })
  it('should return XLVI',()=>{
    expect(rms.aRomano(46)).toEqual('XLVI');
  })
  it('should return XLVII',()=>{
    expect(rms.aRomano(47)).toEqual('XLVII');
  })
  it('should return XLVIII',()=>{
    expect(rms.aRomano(48)).toEqual('XLVIII');
  })
  it('should return XLIX',()=>{
    expect(rms.aRomano(49)).toEqual('XLIX');
  })
  //50
  it('should return L',()=>{
    expect(rms.aRomano(50)).toEqual('L');
  })
  it('should return LI',()=>{
    expect(rms.aRomano(51)).toEqual('LI');
  })
  it('should return LII',()=>{
    expect(rms.aRomano(52)).toEqual('LII');
  })
  it('should return LIII',()=>{
    expect(rms.aRomano(53)).toEqual('LIII');
  })
  it('should return LIV',()=>{
    expect(rms.aRomano(54)).toEqual('LIV');
  })
  it('should return LV',()=>{
    expect(rms.aRomano(55)).toEqual('LV');
  })
  it('should return LVI',()=>{
    expect(rms.aRomano(56)).toEqual('LVI');
  })
  it('should return LVII',()=>{
    expect(rms.aRomano(57)).toEqual('LVII');
  })
  it('should return LVIII',()=>{
    expect(rms.aRomano(58)).toEqual('LVIII');
  })
  it('should return LIX',()=>{
    expect(rms.aRomano(59)).toEqual('LIX');
  })
  it('should return LX',()=>{
    expect(rms.aRomano(60)).toEqual('LX');
  })
  it('should return LXI',()=>{
    expect(rms.aRomano(61)).toEqual('LXI');
  })
  it('should return LXII',()=>{
    expect(rms.aRomano(62)).toEqual('LXII');
  })
  it('should return LXIII',()=>{
    expect(rms.aRomano(63)).toEqual('LXIII');
  })
  it('should return LXIV',()=>{
    expect(rms.aRomano(64)).toEqual('LXIV');
  })
  it('should return LXV',()=>{
    expect(rms.aRomano(65)).toEqual('LXV');
  })
  it('should return LXVI',()=>{
    expect(rms.aRomano(66)).toEqual('LXVI');
  })
  it('should return LXVII',()=>{
    expect(rms.aRomano(67)).toEqual('LXVII');
  })
  it('should return LXVIII',()=>{
    expect(rms.aRomano(68)).toEqual('LXVIII');
  })
  it('should return LXIX',()=>{
    expect(rms.aRomano(69)).toEqual('LXIX');
  })
  it('should return LXX',()=>{
    expect(rms.aRomano(70)).toEqual('LXX');
  })
  it('should return LXXI',()=>{
    expect(rms.aRomano(71)).toEqual('LXXI');
  })
  it('should return LXXII',()=>{
    expect(rms.aRomano(72)).toEqual('LXXII');
  })
  it('should return LXXIII',()=>{
    expect(rms.aRomano(73)).toEqual('LXXIII');
  })
  it('should return LXXIV',()=>{
    expect(rms.aRomano(74)).toEqual('LXXIV');
  })
  it('should return LXXV',()=>{
    expect(rms.aRomano(75)).toEqual('LXXV');
  })
  it('should return LXXVI',()=>{
    expect(rms.aRomano(76)).toEqual('LXXVI');
  })
  it('should return LXXVII',()=>{
    expect(rms.aRomano(77)).toEqual('LXXVII');
  })
  it('should return LXXVIII',()=>{
    expect(rms.aRomano(78)).toEqual('LXXVIII');
  })
  it('should return LXXIX',()=>{
    expect(rms.aRomano(79)).toEqual('LXXIX');
  })
  it('should return LXXX',()=>{
    expect(rms.aRomano(80)).toEqual('LXXX');
  })
  it('should return LXXXI',()=>{
    expect(rms.aRomano(81)).toEqual('LXXXI');
  })
  it('should return LXXXII',()=>{
    expect(rms.aRomano(82)).toEqual('LXXXII');
  })
  it('should return LXXXIII',()=>{
    expect(rms.aRomano(83)).toEqual('LXXXIII');
  })
  it('should return LXXXIV',()=>{
    expect(rms.aRomano(84)).toEqual('LXXXIV');
  })
  it('should return LXXXV',()=>{
    expect(rms.aRomano(85)).toEqual('LXXXV');
  })
  it('should return LXXXVI',()=>{
    expect(rms.aRomano(86)).toEqual('LXXXVI');
  })
  it('should return LXXXVII',()=>{
    expect(rms.aRomano(87)).toEqual('LXXXVII');
  })
  it('should return LXXXVIII',()=>{
    expect(rms.aRomano(88)).toEqual('LXXXVIII');
  })
  it('should return LXXXIX',()=>{
    expect(rms.aRomano(89)).toEqual('LXXXIX');
  })
  //90
  it('should return XC',()=>{
    expect(rms.aRomano(90)).toEqual('XC');
  })
  it('should return XCI',()=>{
    expect(rms.aRomano(91)).toEqual('XCI');
  })
  it('should return XCII',()=>{
    expect(rms.aRomano(92)).toEqual('XCII');
  })
  it('should return XCIII',()=>{
    expect(rms.aRomano(93)).toEqual('XCIII');
  })
  it('should return XCIV',()=>{
    expect(rms.aRomano(94)).toEqual('XCIV');
  })
  it('should return XCV',()=>{
    expect(rms.aRomano(95)).toEqual('XCV');
  })
  it('should return XCVI',()=>{
    expect(rms.aRomano(96)).toEqual('XCVI');
  })
  it('should return XCVII',()=>{
    expect(rms.aRomano(97)).toEqual('XCVII');
  })
  it('should return XCVIII',()=>{
    expect(rms.aRomano(98)).toEqual('XCVIII');
  })
  it('should return XCIX',()=>{
    expect(rms.aRomano(99)).toEqual('XCIX');
  })
  //100
  it('should return C',()=>{
    expect(rms.aRomano(100)).toEqual('C');
  })
});

