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