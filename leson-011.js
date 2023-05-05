'use strict';

 let userNamber = (prompt("Enter the number:"));
 let count = 0;
if(userNamber.isNan(userNamber)){
  console.log('Entered wrong information')
}else {
  for (let i = 1; i <= userNamber; i++) {
    if (i % 5 === 0) {
        count++;
     }
   }
   console.log(`Amount number which 
   devede on 5 is ${count}`);
}
