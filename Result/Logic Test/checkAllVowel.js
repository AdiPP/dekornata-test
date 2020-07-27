function solution(str) {
  // Check if str is string
  if (typeof str != 'string') {
    return false;
  } else {
    // Convert str value to lower case
    str = str.toLowerCase();
    // Check every str value
    for (let index = 0; index < str.length; index++) {
      // If vowel, continue to next loop and if not vowel, return false
      if (str[index] == 'a' || str[index] == 'i' || str[index] == 'u' || str[index] == 'e' || str[index] == 'o') {
        continue;
      } else {
        return false;
      }
    }
    // Return true if all value vowel
    return true;
  }
}

// Test 1
console.log(solution('aaaaiiieeeue'));

// Test 2
console.log(solution('aasaoppppclskss'));

// Test 3
console.log(solution('AIUEO'));

// Test 4
console.log(solution('ASGAGSKAGSKGU'));

// Test 5
console.log(solution('12345'));

// Test 6
console.log(solution(12345));

// Test 7
console.log(solution('B'));