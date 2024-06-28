//գրել ֆուկցիա, որը պարզում է
//տրված բնական թվի թվանշանների գումարը զույգ է թե կենտ ։

// function sum(num) {
//   let count = 0;
//   while (num > 0) {
//     let c = num % 10;
//     count = count + c;
//     num = (num - c) / 10;
//   }
//   if (count % 2 === 0) {
//     return "zuyg tiv";
//   } else {
//     return "kent tiv";
//   }
// }
// console.log(sum(123));

//*************************************** */

// Խնդիր 14: Պատահական ուղղություն
// Գեներացնել պատահական ուղղություն (N, NE, E, SE, S, SW, W,)

// function accidentally() {
//   let arr = ["N", "NE", "E", "SE", "S", "SW", "W"];
//   let index = Math.floor(Math.random() * arr.length);
//   return arr[index];
// }
// console.log(accidentally());

//******************************** */

// Խնդիր 13: Պատահական հեռախոսահամար
// Գեներացնել պատահական հեռախոսահամար ձևաչափով XXX-XXX-XXXX:

// function random(a, b) {
//   const diff = b - a + 1;
//   return Math.floor(Math.random() * diff + a);
// }

// function randomPhone() {
//   let arr = ["093", "094", "055", "098", "041"];
//   let arr1 = [];
//   let index = Math.floor(Math.random() * arr.length);
//   arr1.push(arr[index]);
//   for (let i = 0; i < 2; i++) {
//     let number = random(100, 200);
//     arr1.push(number);
//   }

//   return arr1.join("-");
// }
// console.log(randomPhone());

// *********************************

// Խնդիր 16: Պատահական Hexadecimal Գույնի Գեներացիա
// Գեներացնել պատահական հեքսադեցիմալ գույնի արժեք:

// function hexadecimalColor() {
//   return `#${Math.floor(Math.random() * 25645152).toString(16)}`;
// }
// console.log(hexadecimalColor());

//******************************************* */

//// Խնդիր 19: Պատահական ժամանակ գեներացիա (HH:MM)
// Գեներացնել պատահական ժամանակ ձևաչափով HH:MM:

// function randomTime() {
//   let hour = Math.floor(Math.random() * 24);

//   let minute = Math.floor(Math.random() * 60);
//   if (hour < 10) {
//     hour = "0" + hour;
//   }
//   if (minute < 10) {
//     minute = "0" + minute;
//   }
//   return `${hour}:${minute}`;
// }

// console.log(randomTime());
