// Challenge 202

//Input description
//On console input you will be given a variable numner of 0's and 1's that correspond to letters in the alphabet [a-z] and whitespace ' '.  These will be integers coming in, it's your job to cast them however you need.

//Output description
//The program should output the english translation of the binary phrase

//Samples
//Inout-0100100001100101011011000110110001101111001000000101011101101111011100100110110001100100
//Output-Hello World

//Test Inout 1
//0111000001101100011001010110000101110011011001010010000001110100011000010110110001101011001000000111010001101111001000000110110101100101

//Test Input 2
//011011000110100101100110011001010010000001110010011010010110011101101000011101000010000001101110011011110111011100100000011010010111001100100000011011000110111101101110011001010110110001111001

var conversionKey = {
	0:' ',
	1:'a',
	2:'b',
	3:'c',
	4:'d',
	5:'e',
	6:'f',
	7:'g',
	8:'h',
	9:'i',
	10:'j',
	11:'k',
	12:'l',
	13:'m',
	14:'n',
	15:'o',
	16:'p',
	17:'q',
	18:'r',
	19:'s',
	20:'t',
	21:'u',
	22:'v',
	23:'w',
	24:'x',
	25:'y',
	26:'z'
}

var outputString = new Array ();

var inputString;

var newInputValue;
var currentLetter;

var getInputString = function () {
	// To get value of textarea.
	$('#inputarea_value').click(function() {
	var inputarea_value = $("textarea").val();
	if(inputarea_value=='') {
	alert("Enter Some Text In Textarea");
	}else{
	findNumber(inputarea_value);
	};
	});
	$('#inputarea_reset').click(function() {
	$("#inputarea").val('');
	});
}

var getNextLetter = function () {
	if (newInputValue == "") {
		outputPhrase();
		// console.log('end of string');
	} else{
		findNumber(newInputValue);
	};
}

var findNumber = function (inputValue) {
	var caseNumber;
		//remove first 8 digits
		currentLetter = inputValue.substring(0,8);
		newInputValue = inputValue.substr(8);
		separateDigits(currentLetter);
		caseNumber = convertBinaryToBase10(first3);
		letterNumber = convertBinaryToBase10(last5);
		buildPhrase(caseNumber, letterNumber);
}

var separateDigits = function (binaryEight) {
	// get last 5
	getLetterNumbers(binaryEight);
	// get first 3
	getCaseNumbers(binaryEight);
}

var getLetterNumbers = function (binaryEight) {
	// get numbers for letters
	last5 = binaryEight.substring(3,8);
	return(last5);
}

var checkLetter = function (letterX) {
	//compare against letters array
	returnLetterCheck = '';
	returnLetterCheck = conversionKey[letterX];
	return(returnLetterCheck);
}

var getCaseNumbers = function (binaryEight) {
	//set var = first (left) 3 digits from 8 digits
	first3 = binaryEight.substring(0,3);
	return(first3);
}

var checkCase = function (caseCheck) {
	//check them against case checker
	if (caseCheck == 1) {
		returnCaseCheck = 'punctuation';
	}
	if (caseCheck == 2) {
		returnCaseCheck = 'Upper Case';
	}
	if (caseCheck == 3) {
		returnCaseCheck = 'lower Case';
	}
	return returnCaseCheck;
}

var buildPhrase = function (letterCase,letter) {
	//get case
	checkCase(letterCase);
	//get letter
	checkLetter(letter);
	if (returnCaseCheck == "Upper Case") {
		returnLetterCheck = returnLetterCheck.toUpperCase();
	};
	if (letterCase == 'punctuation' && letter == 0) {
		returnLetterCheck = ' ';
	};
	//add letter to phrase array
	outputString.push(returnLetterCheck);
	//get next letter
	getNextLetter();
}

var outputPhrase = function () {
	var theAnswer = "";
	// output prase array
	for (var i = 0; i < outputString.length; i++) {
		theAnswer = theAnswer + outputString[i];
	};
	$('#output').text(theAnswer);
}

var convertBinaryToBase10 = function (binaryInput) {
	var binary = binaryInput;
	decimalOutput = (parseInt(binary, 2));
	return decimalOutput;
}

	$('#title').text('Binary Translator');
	$('#start').append('<input type="button" id="inputarea_value" value="Get Value"/>');
	$('#start').append('<input type="button" id="inputarea_reset" value=" Reset "/>');

		function main(){
			// when document is clicked, call the startClicked function
			document.getElementById("start").addEventListener('click', getInputString);
		}

		// call main function when document is loaded
		document.addEventListener('DOMContentLoaded', getInputString);
