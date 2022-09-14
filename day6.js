// Day 6: Let's Review

function processData(input) {
    //Enter your code here
    
     input = input.split('\n') //converted to array
     
    for(let i=1 ; i<input.length; i++){
        let splitStr = input[i].split('')
        // console.log(splitStr);
    
    let even = '';
    let odd = '';
    
    for(let x = 0; x< splitStr.length; x++){
        if( x%2 == 0){
            even = even + splitStr[x]
        }
        else {
            odd = odd + splitStr[x]
        }
    }
    console.log(even + ' ' + odd)
    }
} 
