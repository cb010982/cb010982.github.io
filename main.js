let output;
let durationtotal;
let grandtotal;
let total;
let nooftickets;
let finaltotal;
let noOfTickets;
let favcount;


const txtform = document.getElementById("form");
const txtaddfavourites = document.getElementById("addfavourites");
const txtorderfavourites = document.getElementById("orderfavourites");
const txtdate = document.getElementById("dateofarrival");
const txtname = document.getElementById("name");
const txttelephone = document.getElementById("telephone");
const txtemail = document.getElementById("email");
const txtconfirmemail = document.getElementById("confirmemail");
const txtgender = document.getElementById("gender");
const txtsladult = document.getElementById("SLadult");
const txtslchild = document.getElementById("SLchild");
const txtforiegnadult = document.getElementById("Foriegnadult");
const txtforiegnchild = document.getElementById("ForiegnChild");
const txtinfant = document.getElementById("Infant");
const txtduration = document.getElementById("duration");
const txtaddtoorder = document.getElementById("addtoorder");
const txtplaceorder = document.getElementById("placeorder");
const txtcurrentorder = document.getElementById("currentorder");
const txtcostcurrentorder = document.getElementById("costofthecurrentorder");
const txtoverallorder = document.getElementById("overallorder");
const txtoverallcost = document.getElementById("overallcostoftheorder");
const txterrorconfirmemail = document.getElementById("errorconfirmemail");
const txtloyalty = document.getElementById("loyalty");
const errordate = document.getElementById("wrongdate");


let slAdults;
let slChilds;
let foriegnAdults;
let foriegnChilds;
let infantss;

window.addEventListener("load", init);
txtduration.addEventListener("change", currentOrder);
txtsladult.addEventListener("change", currentOrder); 
txtslchild.addEventListener("change", currentOrder);
txtforiegnadult.addEventListener("change", currentOrder);
txtforiegnchild.addEventListener("change", currentOrder);
txtinfant.addEventListener("change", currentOrder);
txtconfirmemail.addEventListener("change", confirmemail);
txtloyalty.addEventListener("click", loyalty);
txtaddfavourites.addEventListener("click", addToFavourites);
txtorderfavourites.addEventListener("click", orderFavourite);
txtdate.addEventListener("change", validatedate);
txtaddtoorder.addEventListener("click", addToOrder);
txtplaceorder.addEventListener("click", placeOrder);

function init() {
    grandtotal = 0;
    durationtotal = 0;
    total = 0;
    nooftickets = 0;
    finaltotal = 0;
    output = 0;
    noOfTickets = 0;
    favcount = 0;
    favouriteorder = {
        slAdultkt: 0,
        slChildtkt: 0,
        foriegnAdulttkt: 0,
        foriegnChildtkt: 0,
        infantstkt: 0,
        tktduration: "",
        currentcost: 0.00
    }
}

function currentOrder(evt) {
    evt.preventDefault(event);
    let slAdult = parseInt(txtsladult.value);
    let slChild = parseInt(txtslchild.value);
    let foriegnAdult = parseInt(txtforiegnadult.value);
    let foriegnChild = parseInt(txtforiegnchild.value);
    let infants = parseInt(txtinfant.value);
    let total = (slAdult * 1200) + (slChild * 700) + (foriegnAdult * 5500) + (foriegnChild * 2700) + (infants * 0);
    console.log(`total`+total);
    grandtotal = 0;
    if (txtduration.value == "3hrs") {
        if ((slAdult > 0) || (slChild > 0 )|| (foriegnAdult > 0) || (foriegnChild > 0) || (infants > 0) ){
            durationtotal = 0;
            grandtotal = grandtotal + durationtotal;

        }

    }
    else if (txtduration.value == "1/2day") {
        if ((slAdult > 0) || (slChild > 0)) {
            durationtotal = ((slAdult + slChild) * 350);
            grandtotal = grandtotal + durationtotal;

        }
       if ((foriegnAdult > 0) || (foriegnChild > 0)) {
            durationtotal = ((foriegnAdult + foriegnChild) * 450);
            grandtotal = grandtotal + durationtotal;
        }
       if (infants > 0) {
             durationtotal = 0.00;
            grandtotal = grandtotal + durationtotal;
        }
    }
    else if (txtduration.value == "fullday") {
        if ((slAdult > 0 )|| (slChild > 0)) {
             durationtotal = ((slAdult + slChild) * 600);
            grandtotal = grandtotal + durationtotal;
        }
        if ((foriegnAdult > 0) || (foriegnChild > 0)) {
             durationtotal = ((foriegnAdult + foriegnChild) * 800);
            grandtotal = grandtotal + durationtotal;
        }
       if ((infants > 0)) {
           durationtotal = (infants * 0);
            grandtotal = grandtotal + durationtotal;
        }
        
    }
    slAdults = slAdult;
    slChilds = slChild;
    foriegnAdults = foriegnAdult;
    foriegnChilds = foriegnChild;
    infantss = infants;
    console.log(`grandtotal` + grandtotal);
    console.log(`finaltotal`+finaltotal);
    nooftickets = slAdult + slChild + foriegnAdult + foriegnChild + infants;
    finaltotal = grandtotal + total;
    favouriteorder.slAdultkt = slAdult;
    favouriteorder.slChildtkt = slChild;
    favouriteorder.foriegnAdulttkt = foriegnAdult;
    favouriteorder.foriegnChildtkt = foriegnChild;
    favouriteorder.infantstkt = infants;
    favouriteorder.currentcost = finaltotal;
    favouriteorder.tktduration = (txtduration.value);

    txtcurrentorder.innerText = `CATEGORIES OF TICKETS \n ===================== \n Number of SL Adult tickets : ${slAdult}\n Number of SL Child tickets : ${slChild} \n Number of FR Adult tickets : ${foriegnAdult}\n Number of FR Child tickets : ${foriegnChild}\n Number of Infant tickets : ${infants} \n Duration: ${txtduration.value} `;
    txtcostcurrentorder.innerText = ` Cost of current order = ${(finaltotal).toFixed(2) } LKR`;
    
}



function placeOrder(evt) {
    if (txtform.checkValidity()) {
        evt.preventDefault(event);   

        if ((output > 0) || (favcount > 0) || (noOfTickets>0)){
                alert("Thank you for the reservation made!");
        }
        else {
            alert(`You have not ordered anything`);
        }
        output = 0;
        noOfTickets = 0;
        favcount = 0;
        nooftickets = 0;
        loyaltycount = 0;
        txtsladult.value = 0;
        txtslchild.value = 0;
        txtforiegnadult.value = 0;
        txtforiegnchild.value = 0;
        txtinfant.value = 0;
        finaltotal = 0;
        txtduration.value = '3hrs';
        txtoverallcost.innerText = `Cost of overall order = 0.00 LKR`;
        txtoverallorder.innerText = `Overall order `;
        txtcostcurrentorder.innerText = ` Cost of current order = 0.00 LKR`;
        txtcurrentorder.innerText = `Current order  `;
        

    }
}


function addToOrder(evt) {
    if (txtform.checkValidity()) {
        evt.preventDefault(event);
        noOfTickets = noOfTickets + nooftickets;
        console.log(nooftickets);
        console.log(`Accumulating add to order ticket count `+ noOfTickets);
        output = output+finaltotal;
        txtoverallcost.innerText = `Cost of overall order = ${output.toFixed(2)} LKR`;
        txtcostcurrentorder.innerText = `Cost of current order = 0.00 LKR`;
        txtcurrentorder.innerText = `Current order`;
        if ((total > 0) || (nooftickets > 0)){
            txtoverallorder.innerText = txtoverallorder.innerText + `\n ------------------------------------------------------------- \n CURRENT ORDER OF TICKETS \n ===================== \n Number of SL Adult tickets : ${slAdults}\n Number of SL Child tickets : ${slChilds} \n Number of FR Adult tickets : ${foriegnAdults}\n Number of FR Child tickets : ${foriegnChilds}\n Number of Infant tickets : ${infantss} \n Duration: ${txtduration.value} \n Current order total number of tickets: ${nooftickets}. \n Cost of the current order = ${(finaltotal).toFixed(2)} LKR. \n  Total cost of all tickets: ${output.toFixed(2)}LKR `;
        }
        else {
            alert(`You have not ordered anything `);
        }
    }
}
function loyalty(evt) {
    if (txtform.checkValidity()) {
        evt.preventDefault(event);
        loyaltycount = noOfTickets + favcount;
        console.log(loyaltycount);
        if (loyaltycount > 3) {
            let loyaltypoints = loyaltycount * 15;
            localStorage.setItem("loyalty points", loyaltypoints);
            loyaltyaward = localStorage.getItem("loyalty points");
            alert(`Congratulations! Loyalty points earned is ${loyaltyaward}`);
        }
        else {
            alert(`Sorry you should order more than 3 tickets to earn loyalty points...`);
        }

    }
}

function confirmemail(evt) {
    evt.preventDefault(event);
    if (txtemail.value != txtconfirmemail.value) {
        txterrorconfirmemail.innerText = `*Email mismatch`;
        txtconfirmemail.value = null;
    }
    else {
        txterrorconfirmemail.innerText = null;

    }
}



   
function addToFavourites(evt) {
    if (txtform.checkValidity()) {
        evt.preventDefault(event);
        console.log(finaltotal);
        if (nooftickets > 0) {
            let jsonfavourites = JSON.stringify(favouriteorder);
            localStorage.setItem("favourite order", jsonfavourites);
            alert(`Order has successfully been added to favourites..`);
        }
         else {
            alert(`You have not ordered anything `);

            }
    }
}
function orderFavourite(evt) {
    if (txtform.checkValidity()) {
        evt.preventDefault(event);
        let storageorder = JSON.parse(localStorage.getItem("favourite order"));
        console.log(storageorder);
        let totalfavourite = (storageorder.currentcost);
        console.log(totalfavourite);
        let totalfavticket = ((storageorder.slAdultkt) + (storageorder.slChildtkt) + (storageorder.foriegnAdulttkt) + (storageorder.foriegnChildtkt) + (storageorder.infantstkt));
        favcount = favcount + totalfavticket;
        console.log(`accumulating favourite ticket count = `+favcount);
        output = output + totalfavourite;
        if (favcount > 0) {
            txtoverallorder.innerText = txtoverallorder.innerText + `\n ------------------------------------------------------------- \n Favourite order total number of tickets : ${totalfavticket} \n Favourites order cost: ${totalfavourite.toFixed(2)}LKR \n Total cost of all tickets: ${(output).toFixed(2)}LKR\n -------------------------------------------------------------`;
            txtoverallcost.innerText = `Cost of overall order is = ${(output).toFixed(2)}LKR`;
        }
        else {
            txtoverallorder.innerText = `Overall order`;
            txtoverallcost.innerText = `Cost of overall order = 0.00 LKR`;
        }
    }
}

function validatedate(evt) {
    let date = new Date;
    evt.preventDefault(event);
    let entereddate = txtdate.value;
    let thisyear = date.getFullYear();
    let thismonth = date.getMonth();
    let thisday = date.getDate();
    console.log(entereddate);
    console.log(thisyear);
    console.log(thismonth);
    console.log(thisday);
    let datearray = entereddate.split("-");
    console.log(entereddate);
    console.log(datearray[0]);
    console.log(datearray[1]);
    console.log(datearray[2]);
    if ((datearray[0] > thisyear)) {
        errordate.innerText = null;
    }
    else if (datearray[0] == thisyear){ 
        if (datearray[1] >= (thismonth + 1)) {
            if (datearray[2] >= thisday) {
                errordate.innerText = null;
            }
            else {
                errordate.innerText = `*Please enter a valid date`;
                txtdate.value = null;
            }
        }
        else if (datearray[1] < (thismonth + 1)){ 
            errordate.innerText = `*Please enter a valid date`;
            txtdate.value = null;
        }
    }
    else if ((datearray[0] < thisyear)) {
        errordate.innerText = `*Please enter a valid date`;
        txtdate.value = null;

    }
}

