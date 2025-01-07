//ugugdsun toonii niilber

// // let nums = [1, 2, 3, 4];

// // let result = 0;

// // for(let i = 0; i < nums.length; i++){
// //     result += nums[i];
// // }
// // console.log(result);





// maxiig oloh, indexiig oloh

// const numbers = [12, 25, 33, 4, 51, 64];
            // let max = 0;
            // let maxIndex = 0;
            
            // for (let i = 0; i <numbers.length; i++){
            //     if(max < numbers[i]){
            //         max = numbers[i];
            //         maxIndex = i
            //     }
            // }
            // console.log(max);
            // console.log(maxIndex);




///////////////////

// const names = [
//     "baljan",
//     "itgel",
//     "jamiyansuren",
//     "chingun",
//     "telmuun",
//     "chinguun",
//     "nomi",
//     "aygul",
//     "behbat",
//     "narangerel",
//     "oyunbat",
//     "turbat",
//     "baasandash",
//     "jargalsaihan",
//     "tugsbileg",
//     "huwituguldur",
//     "ursaa",
//     "ider",
//     "ariunjargal"
// ];

// const find = "baasandash"

// for (let i = 0; i < names.length; i++) {
    //     if (find == names[i]) {
        //         console.log(i)
        //     }
        // }
        
        // function find(names){
            //     for(i = 0; i < names.length; i++)
            //         if(find == names[i]){
            //             console.log(i);
            
            //         }
            //         find(baljan)
            //     }
            
            

//maxiig oloh
            
            // let a = 14;
            // let b = 19;
            
            // let diff = ((b - a)**2)**(1/2);
            // let max = (a + diff + b) / 2;
            // console.log(max);



//// maxiig oloh

// const numbers = [12, 34, 11];
// let max = 0;

// for(let i = 0; i < numbers.length; i++){
//     if(max < numbers[i]){
//         max = numbers[i];
//     }
// }
// console.log(max);


//// maxiig oloh

// let a = 9;
// let b = 5;
// let c = 4;

// if(a > b && a > c){
//     console.log(a);
// }
// else if(a < b && b > c){
//     console.log(a);
// }
// else{
//     console.log(c);
// }



// 4 toonii iheesee 2dhiig oloh

// let a = 23;
// let b = 87;
// let c = 12;
// let d = 75;

// if(a > b && a > c && a < d){
//     console.log(a);
// }
// else if(a > b && a > d && a < c){
//     console.log(a);
// }
// else if(a > c && a > d && a < b){
//     console.log(a);
// }
// else if(b > a && b > c && b < d){
//     console.log(b);
// }
// else if(b > a && b > d && d < c){
//     console.log(b);
// }
// else if(b > d && b > c && b < a){
//     console.log(b);
// }
// else if(c > a && c > b && c < d){
//     console.log(c);
// }
// else if(c > a && c > d && b < c){
//     console.log(c);
// }
// else if(c > d && c > b && b < a){
//     console.log(c);
// }
// else{
//     console.log(d);
// }





///two sum

// const nums = [2, 7, 11 ,15]
// const target = 9;

// //[0, 1]
// for(i = 0; i < nums.length; i++){
//     for(j = 0; j < nums.length; j++){
//         if(nums[i] + nums[j] == target){
//             console.log(nums[i], nums[j]);
            
//         }
//     }
// }





//1-1000 hurtelh toonii 3t huvaagddag toog oloh

// for(i = 1; i <= 1000; i++){
//     if(i % 3 == 0){
//         console.log(i);
//     }
// }



// for(i = 0; i <= 1000; i+=3){
//         console.log(i);
// }



// let a = 3, b = 999;
// let n = 333;
// let sum = (a + b)*n/2

// console.log(sum);





//bubble sort

// const arr = [2, 32, 5, 56];

// for(var i = 0 ; i < arr.length ; i++){ 
//     for(j = 0; j < arr.length; j++){
//         if(arr[j] > arr[j + 1]){
//             let temp = arr[j + 1];
//             arr[j + 1] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);





//1. Create an object literal representing a person with properties for name, age, and city.

// let person = {
//     name: "baaska",
//     age: "22",
//     city: "Ulaanbaatar"
// };


// //2.  Create an object using the new Object() constructor.

// let person = new Object();

// person.name = "baaska";
// person.age = "22";
// person.city = "ulaanbaatar"


// 3 





//4. Access and display the values of properties using dot notation and bracket notation.

    // let person = {
    //     name: "baaska",
    //     age: "22",
    //     city: "Ulaanbaatar"
    // };
    // console.log(person.name);
    // console.log(person['name']);


//5. Practice accessing nested properties (objects within objects).

    // let person = {
    //     name: "baaska",
    //     age: "22",
    //     city: "Ulaanbaatar",
    //     car :{
    //         color: "white",
    //         price: "20k",
    //         brand: "toyota"
    //     }
    // }
        
//6. Add a new property to an existing object !!





//7. Modify the value of an existing property !!




//8. Delete a property from an object.

// let person = {
//     name: "Urnaa",
//     age: "19",
//     city: "Arhangai",
//     gender: "female"
// };

// delete person.age;
// console.log(person);


//9. Add a method to an object that performs a specific action (e.g., a greet() method for a person object).

// let person = {
//     name: "baaska",
//     age: "22",
//     city: "Ulaanbaatar", 
//     greet: function(){
//         console.log('hello');
//     }
// };

// person.greet()


// 10. Call and execute methods on objects

// let person = {
//     greet: function(n){
//         console.log("hello"+ n);
//     }
// };

// person.greet(
// "fghjk"
// )




//print property keys

// let person = {
//     name: "baaska",
//     age: "22",
//     gender: "male"
//   };

//   console.log(Object.keys(person));

  
//   let person = {
//     name: "baaska",
//     age: "22",
//     gender: "male"
//   };

//   console.log(person.name, person.age, person.gender);




///

// const obj = new Object();
// obj.name = "baljan",
// obj.age = "17"

// if(obj.hasOwnProperty("age")){
//     console.log(obj.name, "n", obj.age, "nastai");
// }
// else{
//     console.log("ta nasaa oruulna uu.");
        
// }




///

// const names = [
//     {
//         name: "itgel",
//         age: "21"
//     },
//     {
//         name: "naraa",
//         age: "22"
//     },
//     {
//         name: "uuganaa",
//         age: "11"
//     }
// ];

// function checkIsAdult() {
//     for (let i = 0; i < names.length; i++) {
//         console.log(names[i].name);
        
        
//     }
// }

// checkIsAdult()





//CHALLENGE

function printProperties(obj) {
    console.log(obj);
}

printProperties(
    {
        name: "naraa",
        age: 22
    }
)
console.table([
    {
        name: "naraa",
        age: 20
    },
    {
        name: "orgil",
        age: 21s
    }
])