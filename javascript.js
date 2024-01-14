var typed = new Typed('#element', {
    strings: ['<i>Welcome</i> To .', '<b>Currency Convertor<b>'],
    typeSpeed: 50,
});


const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let dis = document.querySelector(".display")


for (let select of dropdowns) {
    for (let code in countryList) {
        let newoption = document.createElement("option")
        newoption.innerHTML = code;
        newoption.value = code;
        if (select.name === "from" && code === "USD") {
            newoption.selected = "selected"
        };
        if (select.name === "to" && code === "INR") {
            newoption.selected = "selected"
        }
        select.append(newoption);
    }
    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    });


}

const updateflag = (element) => {
    let flagcode = element.value;
    // console.log(flagcode);
    let countrycode = countryList[flagcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newsrc;
}

btn.addEventListener("click", async (evnt) => {
    evnt.preventDefault();
    //     let val=document.querySelector(".amount input");
    //     // console.log(val.value);
    //     let inputval=val.value;
    //     // console.log(fromcnt.value,tocnt.value);
    // // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    // // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;




    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    // // console.log(url);
    // let response=await fetch(URL);
    // let data= await response.json();
    // let rate=data[toCurr.value.toLowerCase()];
    // console.log(rate);
    // dis.innerHTML=`${inputval*rate} ${toCurr.value}`;

});


updateExchangeRate = async () => {
    let val = document.querySelector(".amount input");

    let inputval = val.value;





    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    // console.log(url);
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);
    dis.innerHTML = `${inputval * rate} ${toCurr.value}`;
}




btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});











