

  const pricePerLiter= 45;
const process=()=>{




    var shedA= Number(document.getElementById("shedA").value);
    var shedB= Number(document.getElementById("shedB").value);
    var shedC= Number(document.getElementById("shedC").value);
    var shedD= Number(document.getElementById("shedD").value);

    // var s= shedA*45;
    // var s= shedA*45;
    // var s= shedA*45;
    // var s= shedA*45;



console.log("value of shed A ",shedA);
console.log("value of shed B ",shedB)
console.log("value of shed C ",shedC)
console.log("value of shed D ",shedD)


//save data in browser using jacvscript?


    var totalA= shedA*pricePerLiter;
    var totalB= shedB*pricePerLiter;
    var totalC= shedC*pricePerLiter;
    var totalD= shedD*pricePerLiter;

    document.getElementById("priceperlitre").innerHTML=pricePerLiter;



    document.getElementById("A").innerHTML= shedA;
    document.getElementById("B").innerHTML=shedB;
    document.getElementById("C").innerHTML=shedC;
    document.getElementById("D").innerHTML=shedD;


 //daily price per shed
    document.getElementById("totalA").innerHTML= totalA;
    document.getElementById("totalB").innerHTML=totalB
    document.getElementById("totalC").innerHTML=totalC;
    document.getElementById("totalD").innerHTML=totalD;






}
process();




// function getProducs(priceperliter){



//     var total= litres*pricePerLiter;

//     document.getElementById("total").innerHTML=total;


// }