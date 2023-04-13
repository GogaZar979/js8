let arr = [8, 3, 0.6, null, 2, 0.8, 67,undefined, ];
function compNumbers(){
  let arr1 = 0;
  let arr2 = 0;
  let arr3 = 0;
  let arr4 = 0;
  for (let i = 0; i < arr.length; i++) {
     if (typeof arr[i] === "number" || !isNaN(arr[i])) {
         arr1 += 1;
         if (arr[i] === 0) {
            arr2 += 1;
         } else if (arr[i] % 2 === 0) {
             arr3 += 1;
         } else {
            arr4 += 1;
         }
     }
  }


  
console.log(`В массиве: ${arr1} цифр, ${arr2} нулей, ${arr3} чётных, ${arr4} нечётных!`);
}
compNumbers()