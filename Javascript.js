function addition (){
    var num1 = document.getElementById("num_1").value;
    var num2 = document.getElementById("num_2").value;
    const sum = parseInt(num1)+parseInt(num2);
    document.getElementById("results").innerHTML = "The sum of " +num1+ " and "+num2+ " is "+ sum+".";
}
function subtraction (){
    var num1 = document.getElementById("num_1").value;
    var num2  = document.getElementById("num_2").value;
    var difference= parseInt(num1)-parseInt(num2);
    document.getElementById("results").innerHTML = "The difference of " +num1+ " and "+num2+ " is "+ difference+".";
}
function multiplication (){
    var num1 = document.getElementById("num_1").value;
    var num2  = document.getElementById("num_2").value;
    var product = parseInt(num1)*parseInt(num2);
    document.getElementById("results").innerHTML = "The product of " +num1+ " and "+num2+ " is "+ product+".";
}
function division (){
    var num1 = document.getElementById("num_1").value;
    var num2  = document.getElementById("num_2").value;
    var quotient = parseInt(num1)/parseInt(num2);
    document.getElementById("results").innerHTML = "The quotient of " +num1+ " and "+num2+ " is "+ quotient+".";

}

