// Day 9: Recursion 3

function factorial(n){
    if(n<=1){
      return 1;
    }else{
      return n*factorial(n-1);
    }
  }