function reverseString(s) {
 
  return  typeof(s) !== 'string'?"s.split is not a function":Number(s.split('').reverse().join(''))
    
  
   
}
console.log(reverseString('1234'));