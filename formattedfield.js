// helper function

function isInt(n) {
	return typeof n === 'number' && n % 1 === 0;
}

// formatted text field types: 
// 1 - digits only,
// 2 - phone number allows +() etc...
// 3 - digits no larger than nolargerthen,
// null - no type restriction, just length check
exports.DIGITS = 1;
exports.PHONE_NUMBER = 2;
exports.NUMBER_NO_LARGER_THAN = 3;
exports.ANYCHAR = null;

exports.createFormattedTextField = function (params, length, type, nolargerthan) {
	
	var self = Ti.UI.createTextField(params),
		oldValue;
		
	// just length check
	if (type === null) {
		oldValue = self.value;
		self.addEventListener('change', function (e) {
			if (e.source.value.length > length) {
				e.source.value = oldValue;
				e.source.setSelection(length, length);
			}
			oldValue = self.value;
		});
	}
	
	// digits only
	else if (type === 1) {
		self.keyboardType = Ti.UI.KEYBOARD_NUMBER_PAD;
		oldValue = self.value;
		self.addEventListener('change', function (e) {
			if (e.source.value.length > length) {
				e.source.value = oldValue;
				e.source.setSelection(length, length);
			}
			if (!isInt(+e.source.value) || e.source.value.indexOf(" ") !== -1 || e.source.value.indexOf(".") !== -1 || e.source.value.indexOf("+") !== -1 || e.source.value.indexOf("-") !== -1) {
				e.source.value = oldValue;
				e.source.setSelection(length, length);
			}
			oldValue = self.value;
		});
	}
	
	// phone number
	else if (type === 2) {
		self.keyboardType = Ti.UI.KEYBOARD_NUMBER_PAD;
		oldValue = self.value;
		self.addEventListener('change', function (e) {
			if (e.source.value.length > length) {
				e.source.value = oldValue;
				e.source.setSelection(length, length);
			}
			oldValue = self.value;
		});
	}
	
	// digit no larger than
	else if (type === 3) {
		self.keyboardType = Ti.UI.KEYBOARD_NUMBER_PAD;
		oldValue = self.value;
		self.addEventListener('change', function (e) {
			if (e.source.value.length > length) {
				e.source.value = oldValue;
				e.source.setSelection(length, length);
			}
			if (!isInt(+e.source.value) || e.source.value.indexOf(" ") !== -1 || e.source.value.indexOf(".") !== -1 || e.source.value.indexOf("+") !== -1 || e.source.value.indexOf("-") !== -1) {
				e.source.value = oldValue;
				e.source.setSelection(length, length);
			} else if (parseInt(e.source.value, 10) > nolargerthan) {
				e.source.value = oldValue;
				e.source.setSelection(length, length);
			}
			oldValue = self.value;
		});
	}
	return self;
}