// Function to calculate the length of a string
function stringLength(string) {
  return string.length;
}

// Test for stringLength function
test('stringLength function should return the correct length of the string', () => {
  expect(stringLength('Hello')).toBe(5);
  expect(stringLength('')).toBe(0);
  expect(stringLength('12345')).toBe(5);
  expect(stringLength('Testing string length function')).toBe(28);
});

function stringLength(string) {
  const length = string.length;

  if (length === 0) {
    throw new Error('String must have at least 1 character.');
  }

  if (length > 10) {
    throw new Error('String must not exceed 10 characters.');
  }

  return length;
}

// Test for expanded stringLength function
test('stringLength function should throw errors for invalid string lengths', () => {
  expect(() => stringLength('')).toThrow(
    'String must have at least 1 character.'
  );
  expect(() => stringLength('This string is too long')).toThrow(
    'String must not exceed 10 characters.'
  );
  expect(() => stringLength('JustRight')).not.toThrow();
});

// task 2

// Function to reverse a string
function reverseString(string) {
  return string.split('').reverse().join('');
}

// Test for reverseString function
test('reverseString function should reverse the input string', () => {
  expect(reverseString('Hello')).toBe('olleH');
  expect(reverseString('')).toBe('');
  expect(reverseString('12345')).toBe('54321');
});

// task 3

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero.');
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should correctly add two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-1, 1)).toBe(0);
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('should correctly subtract two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(1, 1)).toBe(0);
      expect(calculator.subtract(0, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should correctly divide two numbers', () => {
      expect(calculator.divide(6, 3)).toBe(2);
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero.');
    });
  });

  describe('multiply', () => {
    test('should correctly multiply two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-2, 4)).toBe(-8);
      expect(calculator.multiply(0, 10)).toBe(0);
    });
  });
});

// task 4

// Function to capitalize the first character of a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Test for capitalize function
test('capitalize function should capitalize the first character of the string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('testing')).toBe('Testing');
});
