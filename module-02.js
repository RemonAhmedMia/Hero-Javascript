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