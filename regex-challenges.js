// Match a Specific Word
// Example: "I love JavaScript" -> true; "I love javascript" -> false
const matchJavaScript = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /JavaScript/;
	const result = regex.test(input);
	return result;
};

// Validate Email Address
// Example: "test@example.com" -> true; "invalid-email" -> false
const validateEmail = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /^[^@\s]+@[^\s@]+\.[^\s@]+$/i;
	const result = regex.test(input);
	return result;
};

// Extract Numbers
// Example: "abc123def456" -> ["123", "456"]; "no numbers" -> []
const extractNumbers = (input) => {
	const regex = /\d+/g
	const result = input.match(regex)
	return result ? result: [];
};

// Replace Whitespace
// Example: "Hello World" -> "Hello_World"; "a b c" -> "a_b_c"
const replaceWhitespace = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /\s+/g;
	const result = input.replace(regex, '_');
	return result;
};

// Validate Phone Number
// Example: "(123) 456-7890" -> true; "123-456-7890" -> false
const validatePhoneNumber = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /^\(\d{3}\)\s\d{3}\-\d{4}$/;
	const result = regex.test(input);
	return result;
};

// Extract Hexadecimal Colors
// Example: "Colors: #FFF, #123ABC" -> ["#FFF", "#123ABC"]; "no colors" -> []
const extractHexColors = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /#?([\da-f]{3})?([\da-f]{3})/ig
	const result = input.match(regex);
	return result ? result : [];
};

// Validate URL
// Example: "https://example.com" -> true; "ftp://example.com" -> false
const validateUrl = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /https\:\/\/\w+(\.com)$/i
	const result = regex.test(input);
	return result;
};

// Validate Dates
// Example: "12/25/2023" -> true; "25/12/2023" -> false
const validateDate = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(1|2)[0-9][0-9][0-9]/
	const result = regex.test(input);
	return result
};

// Count Vowels
// Example: "hello" -> 2; "xyz" -> 0
const countVowels = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /a|e|i|o|u/ig
	const result = input.match(regex);
	return result ? result.length : 0;
};

// Extract Domain Names
// Example: "test@example.com" -> "example.com"; "invalid" -> null
const extractDomain = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /\w+\.com$/i;
	const result = input.match(regex);
	return result ? result[0] : null;
}

// Match HTML Tags
// Example: "<div><p>Hello</p></div>" -> ["<div>", "<p>", "</p>", "</div>"]; "text" -> []
const matchHtmlTags = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /<\w+>|(<\/)\w+>/g;
	const result = input.match(regex);
	return result? result : []
};

// Find Capitalized Words
// Example: "Hello World" -> ["Hello", "World"]; "no caps" -> []
const findCapitalizedWords = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /[A-Z]{1}\w+/g;
	const result = input.match(regex);
	return result ? result : [];
};

// Match Repeated Words
// Example: "This is is a test test" -> ["is is", "test test"]; "no repeats" -> []
const matchRepeatedWords = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /\b(\w+)\b\s\1\b/g;
	const result = input.match(regex);
	return result ? result : [];
};

// Validate Password
// Example: "Password1" -> true; "password" -> false
const validatePassword = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /([A-Z]+[a-z]+)|([a-z]+[A-Z]+)/;
	const result = regex.test(input);
	return result;
};

// Match Unicode Characters
// Example: "😀" -> ["😀"]; "abcABC" -> ["a", "b", "c", "A", "B", "C"]
const matchUnicodeChars = (input) => {
	const regex = /\p{Emoji}|\p{L}|\p{N}/gu;
	const result = input.match(regex);
	return result;
};

// Validate Credit Card Numbers
// Example: "1234-5678-9012-3456" -> true; "1234-5678" -> false
const validateCreditCard = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /\d{4}(-|\s)?\d{4}(-|\s)?\d{4}(-|\s)?\d{4}/;
	const result = regex.test(input);
	return result;
};

// Replace Non-Word Characters
// Example: "hello world!" -> "hello-world-"; "Hello@World" -> "Hello-World"
const replaceNonWordChars = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /[\s?!@#$%^&*]/g;
	const newStr = input.replace(regex, "-");
	return newStr;
};

// Split by Multiple Delimiters
// Example: "a,b|c;d" -> ["a", "b", "c", "d"]; "one|two;three,four" -> ["one", "two", "three", "four"]
const splitByDelimiters = (input) => {
	if (typeof input !== 'string') {
		throw new Error('Input must be a string!');
	}
	const regex = /[,|;.]/g;
	const splitStr = input.split(regex);
	return splitStr;
};

// Check Multiline Start
// Example: "hello\nworld\nhello" -> ["hello", "hello"]; "Hello\nworld" -> []
const checkMultilineStart = () => {};

// Validate U.S. Street Address
// Example: "123 N Olive Lane\nCity, ST 12345" -> true; "123 Olive Lane, City ST 12345" -> false
const validateUSAddress = () => {};

module.exports = {
    matchJavaScript,
    validateEmail,
    extractNumbers,
    replaceWhitespace,
    validatePhoneNumber,
    extractHexColors,
    validateUrl,
    validateDate,
    countVowels,
    extractDomain,
    matchHtmlTags,
    findCapitalizedWords,
    matchRepeatedWords,
    validatePassword,
    matchUnicodeChars,
    validateCreditCard,
    replaceNonWordChars,
    splitByDelimiters,
    // checkMultilineStart,
    // validateUSAddress,
};
