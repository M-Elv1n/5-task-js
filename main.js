// 1 Ededden özünün rəqəmləri cəmini çıxmaq tək ədəd alınana kimi


// let a = "123"
// let sum = 0
// for (let i = 0; i < a.length; i++) {
//     sum += +a[i]
// }
// console.log(sum)

// let c = true

// while(c){
//     a -= sum
//     if (+a % 2 !== 0) {
//         c = false
//         console.log(a)
//     }
// }


// ======================================================================

// 2 Input ile daxil olunan ədədin tərsinin bölənlərini göstərin.

// let a = "123"

// let str = ""

// for (let i = 0; i < a.length; i++) {
//     str = a[i] + str
// }

// console.log(str)


// ======================================================================

// 3 Daxil edilen ededlerin ededi ortasini tapin

// let a = +prompt("nece eded olacaq?")
// let count = 0
// for (let i = 0; i < a; i++) {
//    let b = +prompt("ededleri daxil edin")
//    count += b
// }
// console.log(count/a)




// ======================================================================

// 4 Daxil olunan ededden sonraki ilk n sade ededi tapin

// let a = "489572"

// for (let i = 1; i < a.length; i++) {
//     let count = 0
//     let c = +a[i]
//     for (let y = 1; y <= c; y++) {
//         if (c % y === 0) {
//             count += 1
//         }
//     }
    
//     if (count == 2) {
//         console.log(c)
//         break
//     }
// }



// ! Daxil olunan ededden sonraki ilk n sade ededi tapin

// let a = prompt("enter a number");

// let a = "20"
// function nPrimeNum(a) {
//   a++;
//   while (true) {
//     let counter = 0;
//     for (let i = 0; i <= a; i++) {
//       if (a % i == 0) {
//         counter++;
//       }
//     }
//     if (counter == 2) {
//       return console.log(`${a}`);
//     }
//     a++;
//   }
// }
// nPrimeNum(a);






// ======================================================================

// 5 Arraylerin hamisin cut olub olmadigina baxin.

// let array = [2, 4, 8, 10, 1]
// let cut = 0
// let tek = 0

// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0){
//         cut++
//     }else{
//         tek++
//     }
// }
// if (tek ===0) {
//     console.log("hamisi cut ededlerdir")
// }else{
//     console.log("tek edede var")
// }




// ======================================================================

//6  Array icerisindeki tek ededlerin cemini tapin.

// let array = [2, 4, 8, 10, 1, 7]
// let count = 0

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//         count += array[i]
//     }
// }

// console.log(count)








// ======================================================================

// 7 Array icerisinde nece element oldugunu tapin.



// let array = [2, 4, 8, 10, 1, 7]
// let count = 0

// for (let i = 0; i < array.length; i++) {
//     count++
// }

// console.log(count)













// ======================================================================

// 8 Arraydaki ededlerin ededi ortasini tapin.

// let arr = [2, 4, 5, 6, 7]
// let count = 0
// let c = 0

// for (let i = 0; i < arr.length; i++) {
//    count += arr[i]
//    c++
// }

// console.log(count/c)






// ======================================================================


// 9 Array icine soz a herfi ile baslayani tapin. ( home work )

// let array = ["a23", "sad", "adaf"]

// for (let i = 0; i < array.length; i++) {
//     if(array[i][0]=='a'){
//         console.log(array[i]);
//     }
    
// }





// ======================================================================

// 10 Ededi sadə vuruqlara ayırmaq

// let a = 12
// for (let i = 2; i < a; i++) {
//    if (a % i === 0) {
//       for (let y = 2; y < i; y++) {
//          if (i%y===0) {
//             console.log(y)
//          }
         
//       }
//    }
// }