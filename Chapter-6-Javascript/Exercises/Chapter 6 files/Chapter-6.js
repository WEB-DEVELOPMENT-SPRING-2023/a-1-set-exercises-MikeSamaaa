function Calculator(){
    var litre = document.PetrolCalculator.petrolperlitre.value

    if (litre == 1.72) {
        num = 1.72;
        b = Number(document.PetrolCalculator.litre.value);
        res = num * b;
        document.getElementById("total").innerHTML = res.toFixed(2);
    
    } else if (litre > 1.72) {
        a = Number(document.PetrolCalculator.petrolperlitre.value);
        b = Number(document.PetrolCalculator.litre.value);
        res = a * b;
        document.getElementById("total").innerHTML = res.toFixed(2);
    } else if (litre < 1.72) {
        document.getElementById("total").innerHTML = "Not valid, it should be 1.72 or higher.";
    }
}