'use strick'
/**
 * @param {number} sonAge
 * @param {number} fatherAge
 * returns {number} year when father was/will be thofold older than sonAge ssonAge
 */
const ageThoFold = (sonAge, fatherAge) =>{
  let result = 0;
  if ((fatherAge * sonAge) < 15 || sonAge <= 0){
    return 'Youenterd wrong information';
  }
  if(fatherAge / sonAge === 2){
    return result;
  }
};
