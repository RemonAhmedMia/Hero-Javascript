 let boyos = 18;
 if (boyos < 18) {
    console.log("You Area In");
 } else{
    console.log("Get Lost");
 }

// =============== And (&&) If/Else

// ekhane && diye korle 2 ta condition er jekono ekta jodi mittha hoi tahole eta properly sottho na orthat eta mitthe hobe er jonno 2 ta condition e sottho hoite hobe

let salery = 25000;
let height = 61;

if (salery > 20000 && height > 67) {
    console.log("You Are Eligable");
} else {
    console.log ("onno Patro Dhekte Hobe");
}


//========== Otoba( || )Condition :

// ekhane || diye korle 2 ta condition er jekono ekta jodi fullfil korlei hoi tahole eta properly sottho  hobe

let saleryOne = 30001;
let heightOne = 61;

if (saleryOne > 30000 || heightOne > 67) {
    console.log("You Are Eligable");
} else {
    console.log ("onno Patro Dhekte Hobe");
}


// =========== Complex Condition

let beton = 26000;
let hasCar = true;
let weight = 60;

if ((beton > 22000 && hasCar == true) || weight < 70) {
    console.log("Tumr 15 gusti Raji");
} else {
    console.log("Ami Barishal biye Korbo");
    
}


// ++++++====================

const buy = 4000;
// 10% discount
if (buy >= 5000) {
    const discount = buy *10 / 100;
    // console.log(discount);
    const payAmount = buy - discount;
    console.log(payAmount);
    //Output : 4500
    //5000 takar 10% mane 5000*10/100
} else if (buy > 2500) {
    // 5% discoun
    const discount = buy *5 / 100;
    const payAmount = buy - discount;
    console.log(payAmount);
}
else {
    console.log(buy);
    //5000 takar beshi na kinle discount nai full payment koro
}



// ================ Ternary Operation

//Ternary (টারনারি) হচ্ছে একটি সংক্ষিপ্ত if-else শর্তের রূপ,
//condition ? expressionIfTrue : expressionIfFalse;

// condition — শর্ত (যদি সত্য হয় বা মিথ্যা হয়)

// ? — যদি শর্ত সত্য হয়

// : — যদি শর্ত মিথ্যা হয়

let myAge = 20;

let result = myAge >= 18 ? "Adult" : "Minor";

console.log(result); // "Adult"


// Logical Not (!) : negative jinish k check kore

const isPassed = false

// if(isPassed=== true) eita jei kootha if (!isPassed) ekoi kotha
if (!isPassed) {
    console.log("Tore Biye diye dibo");
}else{
    console.log("tumi amr noyon er moni");
    
}

// ======================== Jodi flase hobar poreo true er ghore dhukaite chai tahole samne ekta logical not diye dibo (!)
let isLogged = false;
if (!isLogged) {
    console.log("user is not loggedin");
}


// Logical NOT (!) হচ্ছে জাভাস্ক্রিপ্ট বা অন্য প্রোগ্রামিং ভাষার একটি লজিক্যাল অপারেটর, যা একটি Boolean মানকে উল্টে দেয়। 
// !true → false
// !false → true

let isRaining = false;

if (!isRaining) {
  console.log("You can go outside.");
}
// ঠিক তেমনি !isRaining → মানে হচ্ছে "বৃষ্টি হচ্ছে না"