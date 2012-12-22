
var FF=require("formattedfield");


var win = Titanium.UI.createWindow({  
    title:'Formatted Field Example',
    backgroundColor:'#333',
    layout:'vertical'
});

var numbersUpTo10Chars = FF.createFormattedTextField({top:20,left:20,width:'60%',backgroundColor:'#ddd'},length=10,type=FF.DIGITS);

var numberLessThan88 = FF.createFormattedTextField({top:20,left:20,width:'60%',backgroundColor:'#bbb'},length=2,type=FF.NUMBER_NO_LARGER_THAN,nolargerthan=88);

var anycharUpTo6Chars = FF.createFormattedTextField({top:20,left:20,width:'60%',backgroundColor:'#aaa'},length=6,type=FF.ANYCHAR);




win.add(numbersUpTo10Chars);
win.add(numberLessThan88);
win.add(anycharUpTo6Chars);

win.open();
