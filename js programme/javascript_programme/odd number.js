function isOdd(number)

  {
    return number % 2 !== 0;
  }
  
  const numberToCheck = 10;
  if (isOdd(numberToCheck)) 

  {
    console.log(numberToCheck + " is an odd number.");
  } 
  else 
  {
    console.log(numberToCheck + " is an even number.");
  }