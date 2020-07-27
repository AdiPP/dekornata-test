function solution(str) {
  // Check if str is string
  if (typeof str != 'string') {
    return false;
  } else {
    // Convert string to array by ","
    const arrayString = str.split(",");
    // Declare result variable
    const result= [];
    // Convert every index of arrayString to array
    for (let index = 0; index < arrayString.length; index++) {
      // Push it to result
      result.push(arrayString[index].split(""));
    }
    // Return result
    return result;
  }
}

// Test 1
console.log(solution('qwer,tyui,asdf,ghjk'));

// Test 2
console.log(solution('aqrst,ukaesi,ffooo'));

// Test 3
console.log(solution('12345'));

// Test 4
console.log(solution(12345));