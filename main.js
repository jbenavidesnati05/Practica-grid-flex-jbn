function converFC(){
    let tempF = document.getElementById("tempF").value;
    if(tempF === ""){
        alert("ingrese valores")
        // document.getElementById("tempC").value = `Ingrese valores`;
    }else{
        let tempC =((tempF-32)*(5/9));
        document.getElementById("tempC").value = `${tempC.toFixed(1)} °C`;
    }
}

function converCK(){
    let tempCe = parseInt(document.getElementById("tempCe").value);
    console.log(tempCe);
    let tempK = (tempCe + 273);

    document.getElementById("tempK").value =tempK;
}