function defineDay (){
	let n = prompt('номер дня недели', 1);
	let result = '';

	if (n == 1) {
		result = 'понедельник';
	} else if (n == 2) {
		result = 'вторник';
	} else if (n == 3) {
		result = 'среда';
	} else if (n == 4) {
		result = 'четверг';
	} else if (n == 5) {
		result = 'пятница';
	} else if (n == 6) {
		result = 'суббота';
	} else if (n == 7){
		result = 'воскресенье';
	} else {
		result = 'error';
	}

	alert('С использованием if else: ' + result);

	switch (n) {
		case '1': result = 'понедельник';
		break;
		case '2': result = 'вторник';
		break;
		case '3': result = 'среда';
		break;
		case '4': result = 'четверг';
		break;
		case '5': result = 'пятница';
		break;
		case '6': result = 'суббота';
		break;
		case '7': result = 'воскресенье';
		break;
		default: result = 'error';
	}

	alert('С использованием switch case: ' + result);
}