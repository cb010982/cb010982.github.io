const donateoutput = document.getElementById("outputdonate");
const outputbox = document.getElementById("output");
const txtcardtype = document.getElementsByName("cardType");
const txtname = document.getElementById("name");
const txtcardnum = document.getElementById("cardno");
const txtcvc = document.getElementById("securitycode");
const donatebtn = document.getElementById("donate");
const txtaddress = document.getElementById("address");
const donatechoices = document.getElementsByName("amount");
const txtform = document.getElementById("form");
const expirydate = document.getElementById("expiryDate");
const errormsg = document.getElementById("error");

donatebtn.addEventListener("click", donatebutton);
donatechoices.forEach(item => item.addEventListener("change", donate));
expirydate.addEventListener("change", expirecard);


function donate(evt) {
    evt.preventDefault(event);
    switch (this.value) {
        case "100LKR":
            outputbox.innerText = `Your choice of donation is 100 LKR.`;
            break;
        case "500LKR":
            outputbox.innerText = `Your choice of donation is 500 LKR.`;
            break;
        case "1000LKR":
            outputbox.innerText = `Your choice of donation is 1000 LKR.`;
            break;
        case "2000LKR":
            outputbox.innerText = `Your choice of donation is 2000 LKR.`;
            break;
        case "5000LKR":
            outputbox.innerText = `Your choice of donation is 5000 LKR.`;
            break;
        case "10000LKR":
            outputbox.innerText = `Your choice of donation is 10000 LKR.`;
            break;

    }
}
function donatebutton(evt) {
    if (txtform.checkValidity()) {
        evt.preventDefault(event);
        donateoutput.innerText = `Your donation was made successfully! Thank you for donating!`;
    }
}

function expirecard(evt) {
    let date = new Date;
    evt.preventDefault(event);
    expiryvalue = expirydate.value;
    console.log("expiryvalue");
    let thisyear = date.getFullYear();
    let thismonth = date.getMonth();
    console.log(expiryvalue);
    console.log(thisyear);
    console.log(thismonth);
    let expiryarray = expiryvalue.split("-");
    console.log(expiryarray);
    console.log(expiryarray[0]);
    console.log(expiryarray[1]);
    if (expiryarray[0] > thisyear) {
        errormsg.innerText = null;
    }
    else if (expiryarray[0] == thisyear) {
        if (expiryarray[1] >= (thismonth + 1)) {
            errormsg.innerText = null;
        }
        else {
            errormsg.innerText = `*This card is expired`;
            expirydate.value = null;
        }

    }
    else if (expiryarray[0] < thisyear) {
        errormsg.innerText = `*This card is expired`;
        expiryvalue.value = null;
    }
}



