titanium-formatted-field
=================================================

This module returns extended TextField. It fixes [JIRA TIMOB-7637](https://jira.appcelerator.org/browse/TIMOB-7637) - inability to set field max length on Android. Entry may be restricted on length,
content (numbers/phonenumbers/anychar) and numeric value (no larger than x…).


Basic Usage:
------------

```JavaScript


var FF=require("formattedfield");



var textFieldForNumbersUpTo3CharsValueLessThan888 = FF.createFormattedTextField(
																{top:20,
																 left:20,
																 width:'60%',
																 backgroundColor:'#bbb'},
																 length=3,
																 type=FF.NUMBER_NO_LARGER_THAN,
																 nolargerthan=888);


win.add(textFieldForNumbersUpTo3CharsValueLessThan8);



```

