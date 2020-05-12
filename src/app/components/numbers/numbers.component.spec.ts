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
  //Pruebas de los primeros 100 números
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
  //Pruebas a partir de 100
  ///101 a 103
  it('should return CI, CII, CIII',()=>{
    let exp = [];
    exp.push(rms.aRomano(101))
    exp.push(rms.aRomano(102))
    exp.push(rms.aRomano(103))
    expect(exp).toEqual(['CI','CII','CIII'])
  })
  it('should return CIV',()=>{
    expect(rms.aRomano(104)).toEqual('CIV');
  })
  it('should return CV',()=>{
    expect(rms.aRomano(105)).toEqual('CV');
  })
  //106 a 108
  it('should return CVI, CVII, CVIII',()=>{
    let exp = [];
    exp.push(rms.aRomano(106))
    exp.push(rms.aRomano(107))
    exp.push(rms.aRomano(108))
    expect(exp).toEqual(['CVI','CVII','CVIII'])
  })
  it('should return CIX',()=>{
    expect(rms.aRomano(109)).toEqual('CIX');
  })  
  it('should return CX',()=>{
    expect(rms.aRomano(110)).toEqual('CX');
  })
  //111 a 119
  it('should return CXI, CXII, CXIII, CXIV, CXV, CXVI, CXVII, CXVIII, CXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(111))
    exp.push(rms.aRomano(112))
    exp.push(rms.aRomano(113))
    exp.push(rms.aRomano(114))
    exp.push(rms.aRomano(115))
    exp.push(rms.aRomano(116))
    exp.push(rms.aRomano(117))
    exp.push(rms.aRomano(118))
    exp.push(rms.aRomano(119))    
    expect(exp).toEqual(['CXI','CXII','CXIII','CXIV','CXV','CXVI','CXVII','CXVIII','CXIX'])
  })
  it('should return CXX',()=>{
    expect(rms.aRomano(120)).toEqual('CXX');
  })
  //121 - 129
  it('should return CXXI, CXXII, CXXIII, CXXIV, CXXV, CXXVI, CXXVII, CXXVIII, CXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(121))
    exp.push(rms.aRomano(122))
    exp.push(rms.aRomano(123))
    exp.push(rms.aRomano(124))
    exp.push(rms.aRomano(125))
    exp.push(rms.aRomano(126))
    exp.push(rms.aRomano(127))
    exp.push(rms.aRomano(128))
    exp.push(rms.aRomano(129))    
    expect(exp).toEqual(['CXXI','CXXII','CXXIII','CXXIV','CXXV','CXXVI','CXXVII','CXXVIII','CXXIX'])
  })
  it('should return CXXX',()=>{
    expect(rms.aRomano(130)).toEqual('CXXX');
  })
  //131 - 139
  it('should return CXXXI, CXXXII, CXXXIII, CXXXIV, CXXXV, CXXXVI, CXXXVII, CXXXVIII, CXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(131))
    exp.push(rms.aRomano(132))
    exp.push(rms.aRomano(133))
    exp.push(rms.aRomano(134))
    exp.push(rms.aRomano(135))
    exp.push(rms.aRomano(136))
    exp.push(rms.aRomano(137))
    exp.push(rms.aRomano(138))
    exp.push(rms.aRomano(139))    
    expect(exp).toEqual(['CXXXI','CXXXII','CXXXIII','CXXXIV','CXXXV','CXXXVI','CXXXVII','CXXXVIII','CXXXIX'])
  })
  it('should return CXL',()=>{
    expect(rms.aRomano(140)).toEqual('CXL');
  })
  //141 - 149
  it('should return CXLI, CXLII, CXLIII, CXLIV, CXLV, CXLVI, CXLVII, CXLVIII, CXLIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(141))
    exp.push(rms.aRomano(142))
    exp.push(rms.aRomano(143))
    exp.push(rms.aRomano(144))
    exp.push(rms.aRomano(145))
    exp.push(rms.aRomano(146))
    exp.push(rms.aRomano(147))
    exp.push(rms.aRomano(148))
    exp.push(rms.aRomano(149))    
    expect(exp).toEqual(['CXLI','CXLII','CXLIII','CXLIV','CXLV','CXLVI','CXLVII','CXLVIII','CXLIX'])
  })
  it('should return CXL',()=>{
    expect(rms.aRomano(150)).toEqual('CL');
  })
  //151 - 159
  it('should return CLI, CLII, CLIII, CLIV, CLV, CLVI, CLVII, CLVIII, CLIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(151))
    exp.push(rms.aRomano(152))
    exp.push(rms.aRomano(153))
    exp.push(rms.aRomano(154))
    exp.push(rms.aRomano(155))
    exp.push(rms.aRomano(156))
    exp.push(rms.aRomano(157))
    exp.push(rms.aRomano(158))
    exp.push(rms.aRomano(159))    
    expect(exp).toEqual(['CLI','CLII','CLIII','CLIV','CLV','CLVI','CLVII','CLVIII','CLIX'])
  })
  it('should return CLX',()=>{
    expect(rms.aRomano(160)).toEqual('CLX');
  })
  //161 - 169
  it('should return CLXI, CLXII, CLXIII, CLXIV, CLXV, CLXVI, CLXVII, CLXVIII, CLXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(161))
    exp.push(rms.aRomano(162))
    exp.push(rms.aRomano(163))
    exp.push(rms.aRomano(164))
    exp.push(rms.aRomano(165))
    exp.push(rms.aRomano(166))
    exp.push(rms.aRomano(167))
    exp.push(rms.aRomano(168))
    exp.push(rms.aRomano(169))    
    expect(exp).toEqual(['CLXI','CLXII','CLXIII','CLXIV','CLXV','CLXVI','CLXVII','CLXVIII','CLXIX'])
  })
  it('should return CLXX',()=>{
    expect(rms.aRomano(170)).toEqual('CLXX');
  })
  //171 - 179
  it('should return CLXXI, CLXXII, CLXXIII, CLXXIV, CLXXV, CLXXVI, CLXXVII, CLXXVIII, CLXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(171))
    exp.push(rms.aRomano(172))
    exp.push(rms.aRomano(173))
    exp.push(rms.aRomano(174))
    exp.push(rms.aRomano(175))
    exp.push(rms.aRomano(176))
    exp.push(rms.aRomano(177))
    exp.push(rms.aRomano(178))
    exp.push(rms.aRomano(179))    
    expect(exp).toEqual(['CLXXI','CLXXII','CLXXIII','CLXXIV','CLXXV','CLXXVI','CLXXVII','CLXXVIII','CLXXIX'])
  })
  it('should return CLXXX',()=>{
    expect(rms.aRomano(180)).toEqual('CLXXX');
  })
  //181 - 189
  it('should return CLXXXI, CLXXXII, CLXXXIII, CLXXXIV, CLXXXV, CLXXXVI, CLXXXVII, CLXXXVIII, CLXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(181))
    exp.push(rms.aRomano(182))
    exp.push(rms.aRomano(183))
    exp.push(rms.aRomano(184))
    exp.push(rms.aRomano(185))
    exp.push(rms.aRomano(186))
    exp.push(rms.aRomano(187))
    exp.push(rms.aRomano(188))
    exp.push(rms.aRomano(189))    
    expect(exp).toEqual(['CLXXXI','CLXXXII','CLXXXIII','CLXXXIV','CLXXXV','CLXXXVI','CLXXXVII','CLXXXVIII','CLXXXIX'])
  })  
  it('should return CXC',()=>{
    expect(rms.aRomano(190)).toEqual('CXC');
  })
  //191 - 199
  it('should return CXC, CXCII, CXCIII, CXCIV, CXCV, CXCVI, CXCVII, CXCVIII, CXCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(191))
    exp.push(rms.aRomano(192))
    exp.push(rms.aRomano(193))
    exp.push(rms.aRomano(194))
    exp.push(rms.aRomano(195))
    exp.push(rms.aRomano(196))
    exp.push(rms.aRomano(197))
    exp.push(rms.aRomano(198))
    exp.push(rms.aRomano(199))    
    expect(exp).toEqual(['CXCI','CXCII','CXCIII','CXCIV','CXCV','CXCVI','CXCVII','CXCVIII','CXCIX'])
  })
  //200
  it('should return CC',()=>{
    expect(rms.aRomano(200)).toEqual('CC');
  })
  // 201 - 209
  it('should return CCI, CCII, CCIII, CCIV, CCV, CCVI, CCVII, CCVIII, CCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(201))
    exp.push(rms.aRomano(202))
    exp.push(rms.aRomano(203))
    exp.push(rms.aRomano(204))
    exp.push(rms.aRomano(205))
    exp.push(rms.aRomano(206))
    exp.push(rms.aRomano(207))
    exp.push(rms.aRomano(208))
    exp.push(rms.aRomano(209))    
    expect(exp).toEqual(['CCI','CCII','CCIII','CCIV','CCV','CCVI','CCVII','CCVIII','CCIX'])
  })
  it('should return CCX',()=>{
    expect(rms.aRomano(210)).toEqual('CCX');
  })
  // 211 - 239
  it('should return CCXI, CCXII, CCXIII, CCXIV, CCXV, CCXVI, CCXVII, CCXVIII, CCXIX, CCXX, CCXXI, CCXXIII, CCXXIV, CCXXV, CCXXVI, CCXXVII, CCXXVIII, CCXXIX, CCXXX, CCXXXI, CCXXXII, CCXXXIII, CCXXXIV, CCXXXV, CCXXXVI, CCXXXVII, CCXXXVIII, CCXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(211))
    exp.push(rms.aRomano(212))
    exp.push(rms.aRomano(213))
    exp.push(rms.aRomano(214))
    exp.push(rms.aRomano(215))
    exp.push(rms.aRomano(216))
    exp.push(rms.aRomano(217))
    exp.push(rms.aRomano(218))
    exp.push(rms.aRomano(219))    
    exp.push(rms.aRomano(220))
    exp.push(rms.aRomano(221))
    exp.push(rms.aRomano(222))
    exp.push(rms.aRomano(223))
    exp.push(rms.aRomano(224))
    exp.push(rms.aRomano(225))
    exp.push(rms.aRomano(226))
    exp.push(rms.aRomano(227))
    exp.push(rms.aRomano(228))
    exp.push(rms.aRomano(229))
    exp.push(rms.aRomano(230))
    exp.push(rms.aRomano(231))
    exp.push(rms.aRomano(232))
    exp.push(rms.aRomano(233))
    exp.push(rms.aRomano(234))
    exp.push(rms.aRomano(235))
    exp.push(rms.aRomano(236))
    exp.push(rms.aRomano(237))
    exp.push(rms.aRomano(238))
    exp.push(rms.aRomano(239))    
    expect(exp).toEqual(['CCXI', 'CCXII', 'CCXIII', 'CCXIV', 'CCXV', 'CCXVI', 'CCXVII', 'CCXVIII', 'CCXIX', 'CCXX', 'CCXXI', 'CCXXII', 'CCXXIII', 'CCXXIV', 'CCXXV', 'CCXXVI', 'CCXXVII', 'CCXXVIII', 'CCXXIX', 'CCXXX', 'CCXXXI', 'CCXXXII', 'CCXXXIII', 'CCXXXIV', 'CCXXXV', 'CCXXXVI', 'CCXXXVII', 'CCXXXVIII','CCXXXIX'])
  })
  it('should return CCXL',()=>{
    expect(rms.aRomano(240)).toEqual('CCXL');
  })
  // 241 - 249
  it('should return CCXLI, CCXLII, CCXLIII, CCXLIV, CCXLV, CCXLVI, CCXLVII, CCXLVIII, CCXLIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(241))
    exp.push(rms.aRomano(242))
    exp.push(rms.aRomano(243))
    exp.push(rms.aRomano(244))
    exp.push(rms.aRomano(245))
    exp.push(rms.aRomano(246))
    exp.push(rms.aRomano(247))
    exp.push(rms.aRomano(248))
    exp.push(rms.aRomano(249))    
    expect(exp).toEqual(['CCXLI','CCXLII','CCXLIII','CCXLIV','CCXLV','CCXLVI','CCXLVII','CCXLVIII','CCXLIX'])
  })
  it('should return CCL',()=>{
    expect(rms.aRomano(250)).toEqual('CCL');
  })
  // 251 - 289
  it('should return CCLI, CCLII, CCLIII, CCLIV, CCLV, CCLVI, CCLVII, CCLVIII, CCLIX, CCLX, CCLXI, CCLXII, CCLXIII, CCLXIV, CCLXV, CCLXVI, CCLXVII, CCLXVIII, CCLXIX, CCLXX, CCLXXI, CCLXXII, CCLXXIII, CCLXXIV, CCLXXV, CCLXXVI, CCLXXVII, CCLXXVIII, CCLXXIX, CCLXXX, CCLXXXI, CCLXXXII, CCLXXXIII, CCLXXXIV, CCLXXXV, CCLXXXVI, CCLXXXVII, CCLXXXVIII, CCLXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(251))
    exp.push(rms.aRomano(252))
    exp.push(rms.aRomano(253))
    exp.push(rms.aRomano(254))
    exp.push(rms.aRomano(255))
    exp.push(rms.aRomano(256))
    exp.push(rms.aRomano(257))
    exp.push(rms.aRomano(258))
    exp.push(rms.aRomano(259))    
    exp.push(rms.aRomano(260))
    exp.push(rms.aRomano(261))
    exp.push(rms.aRomano(262))
    exp.push(rms.aRomano(263))
    exp.push(rms.aRomano(264))
    exp.push(rms.aRomano(265))
    exp.push(rms.aRomano(266))
    exp.push(rms.aRomano(267))
    exp.push(rms.aRomano(268))
    exp.push(rms.aRomano(269))
    exp.push(rms.aRomano(270))
    exp.push(rms.aRomano(271))
    exp.push(rms.aRomano(272))
    exp.push(rms.aRomano(273))
    exp.push(rms.aRomano(274))
    exp.push(rms.aRomano(275))
    exp.push(rms.aRomano(276))
    exp.push(rms.aRomano(277))
    exp.push(rms.aRomano(278))
    exp.push(rms.aRomano(279))    
    exp.push(rms.aRomano(280))
    exp.push(rms.aRomano(281))
    exp.push(rms.aRomano(282))
    exp.push(rms.aRomano(283))
    exp.push(rms.aRomano(284))
    exp.push(rms.aRomano(285))
    exp.push(rms.aRomano(286))
    exp.push(rms.aRomano(287))
    exp.push(rms.aRomano(288))
    exp.push(rms.aRomano(289))    
    expect(exp).toEqual(['CCLI', 'CCLII', 'CCLIII', 'CCLIV', 'CCLV', 'CCLVI', 'CCLVII', 'CCLVIII', 'CCLIX', 'CCLX', 'CCLXI', 'CCLXII', 'CCLXIII', 'CCLXIV', 'CCLXV', 'CCLXVI', 'CCLXVII', 'CCLXVIII', 'CCLXIX', 'CCLXX', 'CCLXXI', 'CCLXXII', 'CCLXXIII', 'CCLXXIV', 'CCLXXV', 'CCLXXVI', 'CCLXXVII', 'CCLXXVIII','CCLXXIX','CCLXXX','CCLXXXI','CCLXXXII','CCLXXXIII','CCLXXXIV','CCLXXXV','CCLXXXVI','CCLXXXVII','CCLXXXVIII','CCLXXXIX'])
  })
  it('should return CCXC',()=>{
    expect(rms.aRomano(290)).toEqual('CCXC');
  })
  // 291 - 299
  it('should return CCXC, CCXCII, CCXCIII, CCXCIV, CCXCV, CCXCVI, CCXCVII, CCXCVIII, CCXCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(291))
    exp.push(rms.aRomano(292))
    exp.push(rms.aRomano(293))
    exp.push(rms.aRomano(294))
    exp.push(rms.aRomano(295))
    exp.push(rms.aRomano(296))
    exp.push(rms.aRomano(297))
    exp.push(rms.aRomano(298))
    exp.push(rms.aRomano(299))    
    expect(exp).toEqual(['CCXCI','CCXCII','CCXCIII','CCXCIV','CCXCV','CCXCVI','CCXCVII','CCXCVIII','CCXCIX'])
  })
  //Desde 300
  it('should return CCC',()=>{
    expect(rms.aRomano(300)).toEqual('CCC');
  })

  it('should return CCCI, CCCII, CCCIII, CCCIV, CCCV, CCCVI,CCCVII, CCCVIII, CCCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(301))
    exp.push(rms.aRomano(302))
    exp.push(rms.aRomano(303))
    exp.push(rms.aRomano(304))
    exp.push(rms.aRomano(305))
    exp.push(rms.aRomano(306))
    exp.push(rms.aRomano(307))
    exp.push(rms.aRomano(308))
    exp.push(rms.aRomano(309))    
    expect(exp).toEqual(['CCCI','CCCII','CCCIII','CCCIV','CCCV','CCCVI','CCCVII','CCCVIII','CCCIX'])
  })
  it('should return CCCX',()=>{
    expect(rms.aRomano(310)).toEqual('CCCX');
  })
  it('should return CCCXI, CCCXII, CCCXIII, CCCXIV, CCCXV, CCCXVI, CCCXVII, CCCXVIII, CCCXIX, CCCXX, CCCXXI, CCCXXIII, CCCXXIV, CCCXXV, CCCXXVI, CCCXXVII, CCCXXVIII, CCCXXIX, CCCXXX, CCCXXXI, CCCXXXII, CCCXXXIII, CCCXXXIV, CCCXXXV, CCCXXXVI, CCCXXXVII, CCCXXXVIII, CCCXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(311))
    exp.push(rms.aRomano(312))
    exp.push(rms.aRomano(313))
    exp.push(rms.aRomano(314))
    exp.push(rms.aRomano(315))
    exp.push(rms.aRomano(316))
    exp.push(rms.aRomano(317))
    exp.push(rms.aRomano(318))
    exp.push(rms.aRomano(319))    
    exp.push(rms.aRomano(320))
    exp.push(rms.aRomano(321))
    exp.push(rms.aRomano(322))
    exp.push(rms.aRomano(323))
    exp.push(rms.aRomano(324))
    exp.push(rms.aRomano(325))
    exp.push(rms.aRomano(326))
    exp.push(rms.aRomano(327))
    exp.push(rms.aRomano(328))
    exp.push(rms.aRomano(329))
    exp.push(rms.aRomano(330))
    exp.push(rms.aRomano(331))
    exp.push(rms.aRomano(332))
    exp.push(rms.aRomano(333))
    exp.push(rms.aRomano(334))
    exp.push(rms.aRomano(335))
    exp.push(rms.aRomano(336))
    exp.push(rms.aRomano(337))
    exp.push(rms.aRomano(338))
    exp.push(rms.aRomano(339))    
    expect(exp).toEqual(['CCCXI', 'CCCXII', 'CCCXIII', 'CCCXIV', 'CCCXV', 'CCCXVI', 'CCCXVII', 'CCCXVIII', 'CCCXIX', 'CCCXX', 'CCCXXI', 'CCCXXII', 'CCCXXIII', 'CCCXXIV', 'CCCXXV', 'CCCXXVI', 'CCCXXVII', 'CCCXXVIII', 'CCCXXIX', 'CCCXXX', 'CCCXXXI', 'CCCXXXII', 'CCCXXXIII', 'CCCXXXIV', 'CCCXXXV', 'CCCXXXVI', 'CCCXXXVII', 'CCCXXXVIII','CCCXXXIX'])
  })
  it('should return CCCXL',()=>{
    expect(rms.aRomano(340)).toEqual('CCCXL');
  })
  it('should return CCCXLI, CCCXLII, CCCXLIII, CCCXLIV, CCCXLV, CCCXLVI, CCCXLVII, CCCXLVIII, CCCXLIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(341))
    exp.push(rms.aRomano(342))
    exp.push(rms.aRomano(343))
    exp.push(rms.aRomano(344))
    exp.push(rms.aRomano(345))
    exp.push(rms.aRomano(346))
    exp.push(rms.aRomano(347))
    exp.push(rms.aRomano(348))
    exp.push(rms.aRomano(349))    
    expect(exp).toEqual(['CCCXLI','CCCXLII','CCCXLIII','CCCXLIV','CCCXLV','CCCXLVI','CCCXLVII','CCCXLVIII','CCCXLIX'])
  })
  it('should return CCCL',()=>{
    expect(rms.aRomano(350)).toEqual('CCCL');
  })
  it('should return CCCLI, CCCLII, CCCLIII, CCCLIV, CCCLV, CCCLVI, CCCLVII, CCCLVIII, CCCLIX, CCCLX, CCCLXI, CCCLXII, CCCLXIII, CCCLXIV, CCCLXV, CCCLXVI, CCCLXVII, CCCLXVIII, CCCLXIX, CCCLXX, CCCLXXI, CCCLXXII, CCCLXXIII, CCCLXXIV, CCCLXXV, CCCLXXVI, CCCLXXVII, CCCLXXVIII, CCCLXXIX, CCCLXXX, CCCLXXXI, CCCLXXXII, CCCLXXXIII, CCCLXXXIV, CCCLXXXV, CCCLXXXVI, CCCLXXXVII, CCCLXXXVIII, CCCLXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(351))
    exp.push(rms.aRomano(352))
    exp.push(rms.aRomano(353))
    exp.push(rms.aRomano(354))
    exp.push(rms.aRomano(355))
    exp.push(rms.aRomano(356))
    exp.push(rms.aRomano(357))
    exp.push(rms.aRomano(358))
    exp.push(rms.aRomano(359))    
    exp.push(rms.aRomano(360))
    exp.push(rms.aRomano(361))
    exp.push(rms.aRomano(362))
    exp.push(rms.aRomano(363))
    exp.push(rms.aRomano(364))
    exp.push(rms.aRomano(365))
    exp.push(rms.aRomano(366))
    exp.push(rms.aRomano(367))
    exp.push(rms.aRomano(368))
    exp.push(rms.aRomano(369))
    exp.push(rms.aRomano(370))
    exp.push(rms.aRomano(371))
    exp.push(rms.aRomano(372))
    exp.push(rms.aRomano(373))
    exp.push(rms.aRomano(374))
    exp.push(rms.aRomano(375))
    exp.push(rms.aRomano(376))
    exp.push(rms.aRomano(377))
    exp.push(rms.aRomano(378))
    exp.push(rms.aRomano(379))    
    exp.push(rms.aRomano(380))
    exp.push(rms.aRomano(381))
    exp.push(rms.aRomano(382))
    exp.push(rms.aRomano(383))
    exp.push(rms.aRomano(384))
    exp.push(rms.aRomano(385))
    exp.push(rms.aRomano(386))
    exp.push(rms.aRomano(387))
    exp.push(rms.aRomano(388))
    exp.push(rms.aRomano(389))    
    expect(exp).toEqual(['CCCLI', 'CCCLII', 'CCCLIII', 'CCCLIV', 'CCCLV', 'CCCLVI', 'CCCLVII', 'CCCLVIII', 'CCCLIX', 'CCCLX', 'CCCLXI', 'CCCLXII', 'CCCLXIII', 'CCCLXIV', 'CCCLXV', 'CCCLXVI', 'CCCLXVII', 'CCCLXVIII', 'CCCLXIX', 'CCCLXX', 'CCCLXXI', 'CCCLXXII', 'CCCLXXIII', 'CCCLXXIV', 'CCCLXXV', 'CCCLXXVI', 'CCCLXXVII', 'CCCLXXVIII','CCCLXXIX','CCCLXXX','CCCLXXXI','CCCLXXXII','CCCLXXXIII','CCCLXXXIV','CCCLXXXV','CCCLXXXVI','CCCLXXXVII','CCCLXXXVIII','CCCLXXXIX'])
  })
  it('should return CCCXC',()=>{
    expect(rms.aRomano(390)).toEqual("CCCXC");
  })
  it('should return CCCXC, CCCXCII, CCCXCIII, CCCXCIV, CCCXCV, CCCXCVI, CCCXCVII, CCCXCVIII, CCCXCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(391))
    exp.push(rms.aRomano(392))
    exp.push(rms.aRomano(393))
    exp.push(rms.aRomano(394))
    exp.push(rms.aRomano(395))
    exp.push(rms.aRomano(396))
    exp.push(rms.aRomano(397))
    exp.push(rms.aRomano(398))
    exp.push(rms.aRomano(399))    
    expect(exp).toEqual(['CCCXCI','CCCXCII','CCCXCIII','CCCXCIV','CCCXCV','CCCXCVI','CCCXCVII','CCCXCVIII','CCCXCIX'])
  })
  //Desde 400
  it('should return CD',()=>{
    expect(rms.aRomano(400)).toEqual("CD");
  })
  it('should return CDI, CDII, CDIII, CDIV, CDV, CDVI,CDVII, CDVIII, CDIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(401))
    exp.push(rms.aRomano(402))
    exp.push(rms.aRomano(403))
    exp.push(rms.aRomano(404))
    exp.push(rms.aRomano(405))
    exp.push(rms.aRomano(406))
    exp.push(rms.aRomano(407))
    exp.push(rms.aRomano(408))
    exp.push(rms.aRomano(409))    
    expect(exp).toEqual(['CDI','CDII','CDIII','CDIV','CDV','CDVI','CDVII','CDVIII','CDIX'])
  })
  it('should return CDX',()=>{
    expect(rms.aRomano(410)).toEqual('CDX');
  })
  it('should return CDXI, CDXII, CDXIII, CDXIV, CDXV, CDXVI, CDXVII, CDXVIII, CDXIX, CDXX, CDXXI, CDXXIII, CDXXIV, CDXXV, CDXXVI, CDXXVII, CDXXVIII, CDXXIX, CDXXX, CDXXXI, CDXXXII, CDXXXIII, CDXXXIV, CDXXXV, CDXXXVI, CDXXXVII, CDXXXVIII, CDXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(411))
    exp.push(rms.aRomano(412))
    exp.push(rms.aRomano(413))
    exp.push(rms.aRomano(414))
    exp.push(rms.aRomano(415))
    exp.push(rms.aRomano(416))
    exp.push(rms.aRomano(417))
    exp.push(rms.aRomano(418))
    exp.push(rms.aRomano(419))    
    exp.push(rms.aRomano(420))
    exp.push(rms.aRomano(421))
    exp.push(rms.aRomano(422))
    exp.push(rms.aRomano(423))
    exp.push(rms.aRomano(424))
    exp.push(rms.aRomano(425))
    exp.push(rms.aRomano(426))
    exp.push(rms.aRomano(427))
    exp.push(rms.aRomano(428))
    exp.push(rms.aRomano(429))
    exp.push(rms.aRomano(430))
    exp.push(rms.aRomano(431))
    exp.push(rms.aRomano(432))
    exp.push(rms.aRomano(433))
    exp.push(rms.aRomano(434))
    exp.push(rms.aRomano(435))
    exp.push(rms.aRomano(436))
    exp.push(rms.aRomano(437))
    exp.push(rms.aRomano(438))
    exp.push(rms.aRomano(439))    
    expect(exp).toEqual(['CDXI', 'CDXII', 'CDXIII', 'CDXIV', 'CDXV', 'CDXVI', 'CDXVII', 'CDXVIII', 'CDXIX', 'CDXX', 'CDXXI', 'CDXXII', 'CDXXIII', 'CDXXIV', 'CDXXV', 'CDXXVI', 'CDXXVII', 'CDXXVIII', 'CDXXIX', 'CDXXX', 'CDXXXI', 'CDXXXII', 'CDXXXIII', 'CDXXXIV', 'CDXXXV', 'CDXXXVI', 'CDXXXVII', 'CDXXXVIII','CDXXXIX'])
  })
  it('should return CDXL',()=>{
    expect(rms.aRomano(440)).toEqual('CDXL');
  })
  it('should return CDXLI, CDXLII, CDXLIII, CDXLIV, CDXLV, CDXLVI, CDXLVII, CDXLVIII, CDXLIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(441))
    exp.push(rms.aRomano(442))
    exp.push(rms.aRomano(443))
    exp.push(rms.aRomano(444))
    exp.push(rms.aRomano(445))
    exp.push(rms.aRomano(446))
    exp.push(rms.aRomano(447))
    exp.push(rms.aRomano(448))
    exp.push(rms.aRomano(449))    
    expect(exp).toEqual(['CDXLI','CDXLII','CDXLIII','CDXLIV','CDXLV','CDXLVI','CDXLVII','CDXLVIII','CDXLIX'])
  })
  it('should return CDL',()=>{
    expect(rms.aRomano(450)).toEqual('CDL');
  })
  it('should return CDLI, CDLII, CDLIII, CDLIV, CDLV, CDLVI, CDLVII, CDLVIII, CDLIX, CDLX, CDLXI, CDLXII, CDLXIII, CDLXIV, CDLXV, CDLXVI, CDLXVII, CDLXVIII, CDLXIX, CDLXX, CDLXXI, CDLXXII, CDLXXIII, CDLXXIV, CDLXXV, CDLXXVI, CDLXXVII, CDLXXVIII, CDLXXIX, CDLXXX, CDLXXXI, CDLXXXII, CDLXXXIII, CDLXXXIV, CDLXXXV, CDLXXXVI, CDLXXXVII, CDLXXXVIII, CDLXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(451))
    exp.push(rms.aRomano(452))
    exp.push(rms.aRomano(453))
    exp.push(rms.aRomano(454))
    exp.push(rms.aRomano(455))
    exp.push(rms.aRomano(456))
    exp.push(rms.aRomano(457))
    exp.push(rms.aRomano(458))
    exp.push(rms.aRomano(459))    
    exp.push(rms.aRomano(460))
    exp.push(rms.aRomano(461))
    exp.push(rms.aRomano(462))
    exp.push(rms.aRomano(463))
    exp.push(rms.aRomano(464))
    exp.push(rms.aRomano(465))
    exp.push(rms.aRomano(466))
    exp.push(rms.aRomano(467))
    exp.push(rms.aRomano(468))
    exp.push(rms.aRomano(469))
    exp.push(rms.aRomano(470))
    exp.push(rms.aRomano(471))
    exp.push(rms.aRomano(472))
    exp.push(rms.aRomano(473))
    exp.push(rms.aRomano(474))
    exp.push(rms.aRomano(475))
    exp.push(rms.aRomano(476))
    exp.push(rms.aRomano(477))
    exp.push(rms.aRomano(478))
    exp.push(rms.aRomano(479))    
    exp.push(rms.aRomano(480))
    exp.push(rms.aRomano(481))
    exp.push(rms.aRomano(482))
    exp.push(rms.aRomano(483))
    exp.push(rms.aRomano(484))
    exp.push(rms.aRomano(485))
    exp.push(rms.aRomano(486))
    exp.push(rms.aRomano(487))
    exp.push(rms.aRomano(488))
    exp.push(rms.aRomano(489))    
    expect(exp).toEqual(['CDLI', 'CDLII', 'CDLIII', 'CDLIV', 'CDLV', 'CDLVI', 'CDLVII', 'CDLVIII', 'CDLIX', 'CDLX', 'CDLXI', 'CDLXII', 'CDLXIII', 'CDLXIV', 'CDLXV', 'CDLXVI', 'CDLXVII', 'CDLXVIII', 'CDLXIX', 'CDLXX', 'CDLXXI', 'CDLXXII', 'CDLXXIII', 'CDLXXIV', 'CDLXXV', 'CDLXXVI', 'CDLXXVII', 'CDLXXVIII','CDLXXIX','CDLXXX','CDLXXXI','CDLXXXII','CDLXXXIII','CDLXXXIV','CDLXXXV','CDLXXXVI','CDLXXXVII','CDLXXXVIII','CDLXXXIX'])
  })
  it('should return CDXC',()=>{
    expect(rms.aRomano(490)).toEqual("CDXC");
  })
  it('should return CDXC, CDXCII, CDXCIII, CDXCIV, CDXCV, CDXCVI, CDXCVII, CDXCVIII, CDXCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(491))
    exp.push(rms.aRomano(492))
    exp.push(rms.aRomano(493))
    exp.push(rms.aRomano(494))
    exp.push(rms.aRomano(495))
    exp.push(rms.aRomano(496))
    exp.push(rms.aRomano(497))
    exp.push(rms.aRomano(498))
    exp.push(rms.aRomano(499))    
    expect(exp).toEqual(['CDXCI','CDXCII','CDXCIII','CDXCIV','CDXCV','CDXCVI','CDXCVII','CDXCVIII','CDXCIX'])
  })
  //Desde 500
  it('should return D',()=>{
    expect(rms.aRomano(500)).toEqual("D")
  })
  
  it('should return DI, DII, DIII, DIV, DV, DVI,DVII, DVIII,DIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(501))
    exp.push(rms.aRomano(502))
    exp.push(rms.aRomano(503))
    exp.push(rms.aRomano(504))
    exp.push(rms.aRomano(505))
    exp.push(rms.aRomano(506))
    exp.push(rms.aRomano(507))
    exp.push(rms.aRomano(508))
    exp.push(rms.aRomano(509))    
    expect(exp).toEqual(['DI','DII','DIII','DIV','DV','DVI','DVII','DVIII','DIX'])
  })
  it('should return DX',()=>{
    expect(rms.aRomano(510)).toEqual('DX');
  })
  it('should return DXI, DXII, DXIII, DXIV, DXV, DXVI, DXVII, DXVIII, DXIX, DXX, DXXI, DXXIII, DXXIV, DXXV, DXXVI, DXXVII, DXXVIII, DXXIX, DXXX, DXXXI, DXXXII, DXXXIII, DXXXIV, DXXXV, DXXXVI, DXXXVII, DXXXVIII, DXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(511))
    exp.push(rms.aRomano(512))
    exp.push(rms.aRomano(513))
    exp.push(rms.aRomano(514))
    exp.push(rms.aRomano(515))
    exp.push(rms.aRomano(516))
    exp.push(rms.aRomano(517))
    exp.push(rms.aRomano(518))
    exp.push(rms.aRomano(519))    
    exp.push(rms.aRomano(520))
    exp.push(rms.aRomano(521))
    exp.push(rms.aRomano(522))
    exp.push(rms.aRomano(523))
    exp.push(rms.aRomano(524))
    exp.push(rms.aRomano(525))
    exp.push(rms.aRomano(526))
    exp.push(rms.aRomano(527))
    exp.push(rms.aRomano(528))
    exp.push(rms.aRomano(529))
    exp.push(rms.aRomano(530))
    exp.push(rms.aRomano(531))
    exp.push(rms.aRomano(532))
    exp.push(rms.aRomano(533))
    exp.push(rms.aRomano(534))
    exp.push(rms.aRomano(535))
    exp.push(rms.aRomano(536))
    exp.push(rms.aRomano(537))
    exp.push(rms.aRomano(538))
    exp.push(rms.aRomano(539))    
    expect(exp).toEqual(['DXI', 'DXII', 'DXIII', 'DXIV', 'DXV', 'DXVI', 'DXVII', 'DXVIII', 'DXIX', 'DXX', 'DXXI', 'DXXII', 'DXXIII', 'DXXIV', 'DXXV', 'DXXVI', 'DXXVII', 'DXXVIII', 'DXXIX', 'DXXX', 'DXXXI', 'DXXXII', 'DXXXIII', 'DXXXIV', 'DXXXV', 'DXXXVI', 'DXXXVII', 'DXXXVIII','DXXXIX'])
  })
  it('should return DXL',()=>{
    expect(rms.aRomano(540)).toEqual('DXL');
  })
  it('should return DXLI, DXLII, DXLIII, DXLIV, DXLV, DXLVI, DXLVII, DXLVIII, DXLIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(541))
    exp.push(rms.aRomano(542))
    exp.push(rms.aRomano(543))
    exp.push(rms.aRomano(544))
    exp.push(rms.aRomano(545))
    exp.push(rms.aRomano(546))
    exp.push(rms.aRomano(547))
    exp.push(rms.aRomano(548))
    exp.push(rms.aRomano(549))    
    expect(exp).toEqual(['DXLI','DXLII','DXLIII','DXLIV','DXLV','DXLVI','DXLVII','DXLVIII','DXLIX'])
  })
  it('should return DL',()=>{
    expect(rms.aRomano(550)).toEqual('DL');
  })
  it('should return DLI, DLII, DLIII, DLIV, DLV, DLVI, DLVII, DLVIII, DLIX, DLX, DLXI, DLXII, DLXIII, DLXIV, DLXV, DLXVI, DLXVII, DLXVIII, DLXIX, DLXX, DLXXI, DLXXII, DLXXIII, DLXXIV, DLXXV, DLXXVI, DLXXVII, DLXXVIII, DLXXIX, DLXXX, DLXXXI, DLXXXII, DLXXXIII, DLXXXIV, DLXXXV, DLXXXVI, DLXXXVII, DLXXXVIII, DLXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(551))
    exp.push(rms.aRomano(552))
    exp.push(rms.aRomano(553))
    exp.push(rms.aRomano(554))
    exp.push(rms.aRomano(555))
    exp.push(rms.aRomano(556))
    exp.push(rms.aRomano(557))
    exp.push(rms.aRomano(558))
    exp.push(rms.aRomano(559))    
    exp.push(rms.aRomano(560))
    exp.push(rms.aRomano(561))
    exp.push(rms.aRomano(562))
    exp.push(rms.aRomano(563))
    exp.push(rms.aRomano(564))
    exp.push(rms.aRomano(565))
    exp.push(rms.aRomano(566))
    exp.push(rms.aRomano(567))
    exp.push(rms.aRomano(568))
    exp.push(rms.aRomano(569))
    exp.push(rms.aRomano(570))
    exp.push(rms.aRomano(571))
    exp.push(rms.aRomano(572))
    exp.push(rms.aRomano(573))
    exp.push(rms.aRomano(574))
    exp.push(rms.aRomano(575))
    exp.push(rms.aRomano(576))
    exp.push(rms.aRomano(577))
    exp.push(rms.aRomano(578))
    exp.push(rms.aRomano(579))    
    exp.push(rms.aRomano(580))
    exp.push(rms.aRomano(581))
    exp.push(rms.aRomano(582))
    exp.push(rms.aRomano(583))
    exp.push(rms.aRomano(584))
    exp.push(rms.aRomano(585))
    exp.push(rms.aRomano(586))
    exp.push(rms.aRomano(587))
    exp.push(rms.aRomano(588))
    exp.push(rms.aRomano(589))    
    expect(exp).toEqual(['DLI', 'DLII', 'DLIII', 'DLIV', 'DLV', 'DLVI', 'DLVII', 'DLVIII', 'DLIX', 'DLX', 'DLXI', 'DLXII', 'DLXIII', 'DLXIV', 'DLXV', 'DLXVI', 'DLXVII', 'DLXVIII', 'DLXIX', 'DLXX', 'DLXXI', 'DLXXII', 'DLXXIII', 'DLXXIV', 'DLXXV', 'DLXXVI', 'DLXXVII', 'DLXXVIII','DLXXIX','DLXXX','DLXXXI','DLXXXII','DLXXXIII','DLXXXIV','DLXXXV','DLXXXVI','DLXXXVII','DLXXXVIII','DLXXXIX'])
  })
  it('should return DXC',()=>{
    expect(rms.aRomano(590)).toEqual("DXC");
  })
  it('should return DXC, DXCII, DXCIII, DXCIV, DXCV, DXCVI, DXCVII, DXCVIII, DXCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(591))
    exp.push(rms.aRomano(592))
    exp.push(rms.aRomano(593))
    exp.push(rms.aRomano(594))
    exp.push(rms.aRomano(595))
    exp.push(rms.aRomano(596))
    exp.push(rms.aRomano(597))
    exp.push(rms.aRomano(598))
    exp.push(rms.aRomano(599))    
    expect(exp).toEqual(['DXCI','DXCII','DXCIII','DXCIV','DXCV','DXCVI','DXCVII','DXCVIII','DXCIX'])
  })  
  //Desde 600
  it('should return DC',()=>{
    expect(rms.aRomano(600)).toEqual('DC')
  })

  it('should return DCI, DCII, DCIII, DCIV, DCV, DCVI,DCVII, DCVIII,DCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(601))
    exp.push(rms.aRomano(602))
    exp.push(rms.aRomano(603))
    exp.push(rms.aRomano(604))
    exp.push(rms.aRomano(605))
    exp.push(rms.aRomano(606))
    exp.push(rms.aRomano(607))
    exp.push(rms.aRomano(608))
    exp.push(rms.aRomano(609))    
    expect(exp).toEqual(['DCI','DCII','DCIII','DCIV','DCV','DCVI','DCVII','DCVIII','DCIX'])
  })
  it('should return DCX',()=>{
    expect(rms.aRomano(610)).toEqual('DCX');
  })
  it('should return DCXI, DCXII, DCXIII, DCXIV, DCXV, DCXVI, DCXVII, DCXVIII, DCXIX, DCXX, DCXXI, DCXXIII, DCXXIV, DCXXV, DCXXVI, DCXXVII, DCXXVIII, DCXXIX, DCXXX, DCXXXI, DCXXXII, DCXXXIII, DCXXXIV, DCXXXV, DCXXXVI, DCXXXVII, DCXXXVIII, DCXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(611))
    exp.push(rms.aRomano(612))
    exp.push(rms.aRomano(613))
    exp.push(rms.aRomano(614))
    exp.push(rms.aRomano(615))
    exp.push(rms.aRomano(616))
    exp.push(rms.aRomano(617))
    exp.push(rms.aRomano(618))
    exp.push(rms.aRomano(619))    
    exp.push(rms.aRomano(620))
    exp.push(rms.aRomano(621))
    exp.push(rms.aRomano(622))
    exp.push(rms.aRomano(623))
    exp.push(rms.aRomano(624))
    exp.push(rms.aRomano(625))
    exp.push(rms.aRomano(626))
    exp.push(rms.aRomano(627))
    exp.push(rms.aRomano(628))
    exp.push(rms.aRomano(629))
    exp.push(rms.aRomano(630))
    exp.push(rms.aRomano(631))
    exp.push(rms.aRomano(632))
    exp.push(rms.aRomano(633))
    exp.push(rms.aRomano(634))
    exp.push(rms.aRomano(635))
    exp.push(rms.aRomano(636))
    exp.push(rms.aRomano(637))
    exp.push(rms.aRomano(638))
    exp.push(rms.aRomano(639))    
    expect(exp).toEqual(['DCXI', 'DCXII', 'DCXIII', 'DCXIV', 'DCXV', 'DCXVI', 'DCXVII', 'DCXVIII', 'DCXIX', 'DCXX', 'DCXXI', 'DCXXII', 'DCXXIII', 'DCXXIV', 'DCXXV', 'DCXXVI', 'DCXXVII', 'DCXXVIII', 'DCXXIX', 'DCXXX', 'DCXXXI', 'DCXXXII', 'DCXXXIII', 'DCXXXIV', 'DCXXXV', 'DCXXXVI', 'DCXXXVII', 'DCXXXVIII','DCXXXIX'])
  })
  it('should return DCXL',()=>{
    expect(rms.aRomano(640)).toEqual('DCXL');
  })
  it('should return DCXLI, DCXLII, DCXLIII, DCXLIV, DCXLV, DCXLVI, DCXLVII, DCXLVIII, DCXLIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(641))
    exp.push(rms.aRomano(642))
    exp.push(rms.aRomano(643))
    exp.push(rms.aRomano(644))
    exp.push(rms.aRomano(645))
    exp.push(rms.aRomano(646))
    exp.push(rms.aRomano(647))
    exp.push(rms.aRomano(648))
    exp.push(rms.aRomano(649))    
    expect(exp).toEqual(['DCXLI','DCXLII','DCXLIII','DCXLIV','DCXLV','DCXLVI','DCXLVII','DCXLVIII','DCXLIX'])
  })
  it('should return DCL',()=>{
    expect(rms.aRomano(650)).toEqual('DCL');
  })
  it('should return DCLI, DCLII, DCLIII, DCLIV, DCLV, DCLVI, DCLVII, DCLVIII, DCLIX, DCLX, DCLXI, DCLXII, DCLXIII, DCLXIV, DCLXV, DCLXVI, DCLXVII, DCLXVIII, DCLXIX, DCLXX, DCLXXI, DCLXXII, DCLXXIII, DCLXXIV, DCLXXV, DCLXXVI, DCLXXVII, DCLXXVIII, DCLXXIX, DCLXXX, DCLXXXI, DCLXXXII, DCLXXXIII, DCLXXXIV, DCLXXXV, DCLXXXVI, DCLXXXVII, DCLXXXVIII, DCLXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(651))
    exp.push(rms.aRomano(652))
    exp.push(rms.aRomano(653))
    exp.push(rms.aRomano(654))
    exp.push(rms.aRomano(655))
    exp.push(rms.aRomano(656))
    exp.push(rms.aRomano(657))
    exp.push(rms.aRomano(658))
    exp.push(rms.aRomano(659))    
    exp.push(rms.aRomano(660))
    exp.push(rms.aRomano(661))
    exp.push(rms.aRomano(662))
    exp.push(rms.aRomano(663))
    exp.push(rms.aRomano(664))
    exp.push(rms.aRomano(665))
    exp.push(rms.aRomano(666))
    exp.push(rms.aRomano(667))
    exp.push(rms.aRomano(668))
    exp.push(rms.aRomano(669))
    exp.push(rms.aRomano(670))
    exp.push(rms.aRomano(671))
    exp.push(rms.aRomano(672))
    exp.push(rms.aRomano(673))
    exp.push(rms.aRomano(674))
    exp.push(rms.aRomano(675))
    exp.push(rms.aRomano(676))
    exp.push(rms.aRomano(677))
    exp.push(rms.aRomano(678))
    exp.push(rms.aRomano(679))    
    exp.push(rms.aRomano(680))
    exp.push(rms.aRomano(681))
    exp.push(rms.aRomano(682))
    exp.push(rms.aRomano(683))
    exp.push(rms.aRomano(684))
    exp.push(rms.aRomano(685))
    exp.push(rms.aRomano(686))
    exp.push(rms.aRomano(687))
    exp.push(rms.aRomano(688))
    exp.push(rms.aRomano(689))    
    expect(exp).toEqual(['DCLI', 'DCLII', 'DCLIII', 'DCLIV', 'DCLV', 'DCLVI', 'DCLVII', 'DCLVIII', 'DCLIX', 'DCLX', 'DCLXI', 'DCLXII', 'DCLXIII', 'DCLXIV', 'DCLXV', 'DCLXVI', 'DCLXVII', 'DCLXVIII', 'DCLXIX', 'DCLXX', 'DCLXXI', 'DCLXXII', 'DCLXXIII', 'DCLXXIV', 'DCLXXV', 'DCLXXVI', 'DCLXXVII', 'DCLXXVIII','DCLXXIX','DCLXXX','DCLXXXI','DCLXXXII','DCLXXXIII','DCLXXXIV','DCLXXXV','DCLXXXVI','DCLXXXVII','DCLXXXVIII','DCLXXXIX'])
  })
  it('should return DCXC',()=>{
    expect(rms.aRomano(690)).toEqual("DCXC");
  })
  it('should return DCXC, DCXCII, DCXCIII, DCXCIV, DCXCV, DCXCVI, DCXCVII, DCXCVIII, DCXCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(691))
    exp.push(rms.aRomano(692))
    exp.push(rms.aRomano(693))
    exp.push(rms.aRomano(694))
    exp.push(rms.aRomano(695))
    exp.push(rms.aRomano(696))
    exp.push(rms.aRomano(697))
    exp.push(rms.aRomano(698))
    exp.push(rms.aRomano(699))    
    expect(exp).toEqual(['DCXCI','DCXCII','DCXCIII','DCXCIV','DCXCV','DCXCVI','DCXCVII','DCXCVIII','DCXCIX'])
  })
  //Desde 700
  it('should return DCC',()=>{
    expect(rms.aRomano(700)).toEqual('DCC')
  })

  it('should return DCCI, DCCII, DCCIII, DCCIV, DCCV, DCCVI,DCCVII, DCCVIII,DCCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(701))
    exp.push(rms.aRomano(702))
    exp.push(rms.aRomano(703))
    exp.push(rms.aRomano(704))
    exp.push(rms.aRomano(705))
    exp.push(rms.aRomano(706))
    exp.push(rms.aRomano(707))
    exp.push(rms.aRomano(708))
    exp.push(rms.aRomano(709))    
    expect(exp).toEqual(['DCCI','DCCII','DCCIII','DCCIV','DCCV','DCCVI','DCCVII','DCCVIII','DCCIX'])
  })
  it('should return DCCX',()=>{
    expect(rms.aRomano(710)).toEqual('DCCX');
  })
  it('should return DCCXI, DCCXII, DCCXIII, DCCXIV, DCCXV, DCCXVI, DCCXVII, DCCXVIII, DCCXIX, DCCXX, DCCXXI, DCCXXIII, DCCXXIV, DCCXXV, DCCXXVI, DCCXXVII, DCCXXVIII, DCCXXIX, DCCXXX, DCCXXXI, DCCXXXII, DCCXXXIII, DCCXXXIV, DCCXXXV, DCCXXXVI, DCCXXXVII, DCCXXXVIII, DCCXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(711))
    exp.push(rms.aRomano(712))
    exp.push(rms.aRomano(713))
    exp.push(rms.aRomano(714))
    exp.push(rms.aRomano(715))
    exp.push(rms.aRomano(716))
    exp.push(rms.aRomano(717))
    exp.push(rms.aRomano(718))
    exp.push(rms.aRomano(719))    
    exp.push(rms.aRomano(720))
    exp.push(rms.aRomano(721))
    exp.push(rms.aRomano(722))
    exp.push(rms.aRomano(723))
    exp.push(rms.aRomano(724))
    exp.push(rms.aRomano(725))
    exp.push(rms.aRomano(726))
    exp.push(rms.aRomano(727))
    exp.push(rms.aRomano(728))
    exp.push(rms.aRomano(729))
    exp.push(rms.aRomano(730))
    exp.push(rms.aRomano(731))
    exp.push(rms.aRomano(732))
    exp.push(rms.aRomano(733))
    exp.push(rms.aRomano(734))
    exp.push(rms.aRomano(735))
    exp.push(rms.aRomano(736))
    exp.push(rms.aRomano(737))
    exp.push(rms.aRomano(738))
    exp.push(rms.aRomano(739))    
    expect(exp).toEqual(['DCCXI', 'DCCXII', 'DCCXIII', 'DCCXIV', 'DCCXV', 'DCCXVI', 'DCCXVII', 'DCCXVIII', 'DCCXIX', 'DCCXX', 'DCCXXI', 'DCCXXII', 'DCCXXIII', 'DCCXXIV', 'DCCXXV', 'DCCXXVI', 'DCCXXVII', 'DCCXXVIII', 'DCCXXIX', 'DCCXXX', 'DCCXXXI', 'DCCXXXII', 'DCCXXXIII', 'DCCXXXIV', 'DCCXXXV', 'DCCXXXVI', 'DCCXXXVII', 'DCCXXXVIII','DCCXXXIX'])
  })
  it('should return DCCXL',()=>{
    expect(rms.aRomano(740)).toEqual('DCCXL');
  })
  it('should return DCCXLI, DCCXLII, DCCXLIII, DCCXLIV, DCCXLV, DCCXLVI, DCCXLVII, DCCXLVIII, DCCXLIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(741))
    exp.push(rms.aRomano(742))
    exp.push(rms.aRomano(743))
    exp.push(rms.aRomano(744))
    exp.push(rms.aRomano(745))
    exp.push(rms.aRomano(746))
    exp.push(rms.aRomano(747))
    exp.push(rms.aRomano(748))
    exp.push(rms.aRomano(749))    
    expect(exp).toEqual(['DCCXLI','DCCXLII','DCCXLIII','DCCXLIV','DCCXLV','DCCXLVI','DCCXLVII','DCCXLVIII','DCCXLIX'])
  })
  it('should return DCCL',()=>{
    expect(rms.aRomano(750)).toEqual('DCCL');
  })
  it('should return DCCLI, DCCLII, DCCLIII, DCCLIV, DCCLV, DCCLVI, DCCLVII, DCCLVIII, DCCLIX, DCCLX, DCCLXI, DCCLXII, DCCLXIII, DCCLXIV, DCCLXV, DCCLXVI, DCCLXVII, DCCLXVIII, DCCLXIX, DCCLXX, DCCLXXI, DCCLXXII, DCCLXXIII, DCCLXXIV, DCCLXXV, DCCLXXVI, DCCLXXVII, DCCLXXVIII, DCCLXXIX, DCCLXXX, DCCLXXXI, DCCLXXXII, DCCLXXXIII, DCCLXXXIV, DCCLXXXV, DCCLXXXVI, DCCLXXXVII, DCCLXXXVIII, DCCLXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(751))
    exp.push(rms.aRomano(752))
    exp.push(rms.aRomano(753))
    exp.push(rms.aRomano(754))
    exp.push(rms.aRomano(755))
    exp.push(rms.aRomano(756))
    exp.push(rms.aRomano(757))
    exp.push(rms.aRomano(758))
    exp.push(rms.aRomano(759))    
    exp.push(rms.aRomano(760))
    exp.push(rms.aRomano(761))
    exp.push(rms.aRomano(762))
    exp.push(rms.aRomano(763))
    exp.push(rms.aRomano(764))
    exp.push(rms.aRomano(765))
    exp.push(rms.aRomano(766))
    exp.push(rms.aRomano(767))
    exp.push(rms.aRomano(768))
    exp.push(rms.aRomano(769))
    exp.push(rms.aRomano(770))
    exp.push(rms.aRomano(771))
    exp.push(rms.aRomano(772))
    exp.push(rms.aRomano(773))
    exp.push(rms.aRomano(774))
    exp.push(rms.aRomano(775))
    exp.push(rms.aRomano(776))
    exp.push(rms.aRomano(777))
    exp.push(rms.aRomano(778))
    exp.push(rms.aRomano(779))    
    exp.push(rms.aRomano(780))
    exp.push(rms.aRomano(781))
    exp.push(rms.aRomano(782))
    exp.push(rms.aRomano(783))
    exp.push(rms.aRomano(784))
    exp.push(rms.aRomano(785))
    exp.push(rms.aRomano(786))
    exp.push(rms.aRomano(787))
    exp.push(rms.aRomano(788))
    exp.push(rms.aRomano(789))    
    expect(exp).toEqual(['DCCLI', 'DCCLII', 'DCCLIII', 'DCCLIV', 'DCCLV', 'DCCLVI', 'DCCLVII', 'DCCLVIII', 'DCCLIX', 'DCCLX', 'DCCLXI', 'DCCLXII', 'DCCLXIII', 'DCCLXIV', 'DCCLXV', 'DCCLXVI', 'DCCLXVII', 'DCCLXVIII', 'DCCLXIX', 'DCCLXX', 'DCCLXXI', 'DCCLXXII', 'DCCLXXIII', 'DCCLXXIV', 'DCCLXXV', 'DCCLXXVI', 'DCCLXXVII', 'DCCLXXVIII','DCCLXXIX','DCCLXXX','DCCLXXXI','DCCLXXXII','DCCLXXXIII','DCCLXXXIV','DCCLXXXV','DCCLXXXVI','DCCLXXXVII','DCCLXXXVIII','DCCLXXXIX'])
  })
  it('should return DCCXC',()=>{
    expect(rms.aRomano(790)).toEqual("DCCXC");
  })
  it('should return DCCXC, DCCXCII, DCCXCIII, DCCXCIV, DCCXCV, DCCXCVI, DCCXCVII, DCCXCVIII, DCCXCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(791))
    exp.push(rms.aRomano(792))
    exp.push(rms.aRomano(793))
    exp.push(rms.aRomano(794))
    exp.push(rms.aRomano(795))
    exp.push(rms.aRomano(796))
    exp.push(rms.aRomano(797))
    exp.push(rms.aRomano(798))
    exp.push(rms.aRomano(799))    
    expect(exp).toEqual(['DCCXCI','DCCXCII','DCCXCIII','DCCXCIV','DCCXCV','DCCXCVI','DCCXCVII','DCCXCVIII','DCCXCIX'])
  })
  //Desde 800
  it('should return DCCC',()=>{
    expect(rms.aRomano(800)).toEqual('DCCC')
  })

  it('should return DCCCI, DCCCII, DCCCIII, DCCCIV, DCCCV, DCCCVI,DCCCVII, DCCCVIII,DCCCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(801))
    exp.push(rms.aRomano(802))
    exp.push(rms.aRomano(803))
    exp.push(rms.aRomano(804))
    exp.push(rms.aRomano(805))
    exp.push(rms.aRomano(806))
    exp.push(rms.aRomano(807))
    exp.push(rms.aRomano(808))
    exp.push(rms.aRomano(809))    
    expect(exp).toEqual(['DCCCI','DCCCII','DCCCIII','DCCCIV','DCCCV','DCCCVI','DCCCVII','DCCCVIII','DCCCIX'])
  })
  it('should return DCCCX',()=>{
    expect(rms.aRomano(810)).toEqual('DCCCX');
  })
  it('should return DCCCXI, DCCCXII, DCCCXIII, DCCCXIV, DCCCXV, DCCCXVI, DCCCXVII, DCCCXVIII, DCCCXIX, DCCCXX, DCCCXXI, DCCCXXIII, DCCCXXIV, DCCCXXV, DCCCXXVI, DCCCXXVII, DCCCXXVIII, DCCCXXIX, DCCCXXX, DCCCXXXI, DCCCXXXII, DCCCXXXIII, DCCCXXXIV, DCCCXXXV, DCCCXXXVI, DCCCXXXVII, DCCCXXXVIII, DCCCXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(811))
    exp.push(rms.aRomano(812))
    exp.push(rms.aRomano(813))
    exp.push(rms.aRomano(814))
    exp.push(rms.aRomano(815))
    exp.push(rms.aRomano(816))
    exp.push(rms.aRomano(817))
    exp.push(rms.aRomano(818))
    exp.push(rms.aRomano(819))    
    exp.push(rms.aRomano(820))
    exp.push(rms.aRomano(821))
    exp.push(rms.aRomano(822))
    exp.push(rms.aRomano(823))
    exp.push(rms.aRomano(824))
    exp.push(rms.aRomano(825))
    exp.push(rms.aRomano(826))
    exp.push(rms.aRomano(827))
    exp.push(rms.aRomano(828))
    exp.push(rms.aRomano(829))
    exp.push(rms.aRomano(830))
    exp.push(rms.aRomano(831))
    exp.push(rms.aRomano(832))
    exp.push(rms.aRomano(833))
    exp.push(rms.aRomano(834))
    exp.push(rms.aRomano(835))
    exp.push(rms.aRomano(836))
    exp.push(rms.aRomano(837))
    exp.push(rms.aRomano(838))
    exp.push(rms.aRomano(839))    
    expect(exp).toEqual(['DCCCXI', 'DCCCXII', 'DCCCXIII', 'DCCCXIV', 'DCCCXV', 'DCCCXVI', 'DCCCXVII', 'DCCCXVIII', 'DCCCXIX', 'DCCCXX', 'DCCCXXI', 'DCCCXXII', 'DCCCXXIII', 'DCCCXXIV', 'DCCCXXV', 'DCCCXXVI', 'DCCCXXVII', 'DCCCXXVIII', 'DCCCXXIX', 'DCCCXXX', 'DCCCXXXI', 'DCCCXXXII', 'DCCCXXXIII', 'DCCCXXXIV', 'DCCCXXXV', 'DCCCXXXVI', 'DCCCXXXVII', 'DCCCXXXVIII','DCCCXXXIX'])
  })
  it('should return DCCCXL',()=>{
    expect(rms.aRomano(840)).toEqual('DCCCXL');
  })
  it('should return DCCCXLI, DCCCXLII, DCCCXLIII, DCCCXLIV, DCCCXLV, DCCCXLVI, DCCCXLVII, DCCCXLVIII, DCCCXLIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(841))
    exp.push(rms.aRomano(842))
    exp.push(rms.aRomano(843))
    exp.push(rms.aRomano(844))
    exp.push(rms.aRomano(845))
    exp.push(rms.aRomano(846))
    exp.push(rms.aRomano(847))
    exp.push(rms.aRomano(848))
    exp.push(rms.aRomano(849))    
    expect(exp).toEqual(['DCCCXLI','DCCCXLII','DCCCXLIII','DCCCXLIV','DCCCXLV','DCCCXLVI','DCCCXLVII','DCCCXLVIII','DCCCXLIX'])
  })
  it('should return DCCCL',()=>{
    expect(rms.aRomano(850)).toEqual('DCCCL');
  })
  it('should return DCCCLI, DCCCLII, DCCCLIII, DCCCLIV, DCCCLV, DCCCLVI, DCCCLVII, DCCCLVIII, DCCCLIX, DCCCLX, DCCCLXI, DCCCLXII, DCCCLXIII, DCCCLXIV, DCCCLXV, DCCCLXVI, DCCCLXVII, DCCCLXVIII, DCCCLXIX, DCCCLXX, DCCCLXXI, DCCCLXXII, DCCCLXXIII, DCCCLXXIV, DCCCLXXV, DCCCLXXVI, DCCCLXXVII, DCCCLXXVIII, DCCCLXXIX, DCCCLXXX, DCCCLXXXI, DCCCLXXXII, DCCCLXXXIII, DCCCLXXXIV, DCCCLXXXV, DCCCLXXXVI, DCCCLXXXVII, DCCCLXXXVIII, DCCCLXXXIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(851))
    exp.push(rms.aRomano(852))
    exp.push(rms.aRomano(853))
    exp.push(rms.aRomano(854))
    exp.push(rms.aRomano(855))
    exp.push(rms.aRomano(856))
    exp.push(rms.aRomano(857))
    exp.push(rms.aRomano(858))
    exp.push(rms.aRomano(859))    
    exp.push(rms.aRomano(860))
    exp.push(rms.aRomano(861))
    exp.push(rms.aRomano(862))
    exp.push(rms.aRomano(863))
    exp.push(rms.aRomano(864))
    exp.push(rms.aRomano(865))
    exp.push(rms.aRomano(866))
    exp.push(rms.aRomano(867))
    exp.push(rms.aRomano(868))
    exp.push(rms.aRomano(869))
    exp.push(rms.aRomano(870))
    exp.push(rms.aRomano(871))
    exp.push(rms.aRomano(872))
    exp.push(rms.aRomano(873))
    exp.push(rms.aRomano(874))
    exp.push(rms.aRomano(875))
    exp.push(rms.aRomano(876))
    exp.push(rms.aRomano(877))
    exp.push(rms.aRomano(878))
    exp.push(rms.aRomano(879))    
    exp.push(rms.aRomano(880))
    exp.push(rms.aRomano(881))
    exp.push(rms.aRomano(882))
    exp.push(rms.aRomano(883))
    exp.push(rms.aRomano(884))
    exp.push(rms.aRomano(885))
    exp.push(rms.aRomano(886))
    exp.push(rms.aRomano(887))
    exp.push(rms.aRomano(888))
    exp.push(rms.aRomano(889))    
    expect(exp).toEqual(['DCCCLI', 'DCCCLII', 'DCCCLIII', 'DCCCLIV', 'DCCCLV', 'DCCCLVI', 'DCCCLVII', 'DCCCLVIII', 'DCCCLIX', 'DCCCLX', 'DCCCLXI', 'DCCCLXII', 'DCCCLXIII', 'DCCCLXIV', 'DCCCLXV', 'DCCCLXVI', 'DCCCLXVII', 'DCCCLXVIII', 'DCCCLXIX', 'DCCCLXX', 'DCCCLXXI', 'DCCCLXXII', 'DCCCLXXIII', 'DCCCLXXIV', 'DCCCLXXV', 'DCCCLXXVI', 'DCCCLXXVII', 'DCCCLXXVIII','DCCCLXXIX','DCCCLXXX','DCCCLXXXI','DCCCLXXXII','DCCCLXXXIII','DCCCLXXXIV','DCCCLXXXV','DCCCLXXXVI','DCCCLXXXVII','DCCCLXXXVIII','DCCCLXXXIX'])
  })
  it('should return DCCCXC',()=>{
    expect(rms.aRomano(890)).toEqual("DCCCXC");
  })
  it('should return DCCCXC, DCCCXCII, DCCCXCIII, DCCCXCIV, DCCCXCV, DCCCXCVI, DCCCXCVII, DCCCXCVIII, DCCCXCIX',()=>{
    let exp = [];
    exp.push(rms.aRomano(891))
    exp.push(rms.aRomano(892))
    exp.push(rms.aRomano(893))
    exp.push(rms.aRomano(894))
    exp.push(rms.aRomano(895))
    exp.push(rms.aRomano(896))
    exp.push(rms.aRomano(897))
    exp.push(rms.aRomano(898))
    exp.push(rms.aRomano(899))    
    expect(exp).toEqual(['DCCCXCI','DCCCXCII','DCCCXCIII','DCCCXCIV','DCCCXCV','DCCCXCVI','DCCCXCVII','DCCCXCVIII','DCCCXCIX'])
  })
});

