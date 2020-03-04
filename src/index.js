
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix)){
    let arr = [];
    matrix.forEach((item, index) =>{
      if (index % 2 != 0){
        item.reverse();
      }
      item.forEach (element =>{
        arr.push(element);
    });
    });
    console.log(arr);
    return arr;
}
return [];
}
