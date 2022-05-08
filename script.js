function compute()
{
    let now = new Date().getFullYear() + 10;
    let result ="";
    let principal = document.getElementById("principal").value;
    if (principal <= 0){
        alert("please enter a positive number");
        aocument.getElementById("principal").focus();
    }
    result += "If you deposite <return>" + principal + "</return>,<br>";
    let rates = document.getElementById("rate").value;
    result += "at an interest rate of <return>" + rates + "%</return>.<br>";
    let years = document.getElementById("years").value;
    let amount = Math.floor(principal * ( rates / 100) * years );
    result += "You will receive an amount of <return>" + amount +
    "</return>,<br>in the year <return>"+ now + "</return>";
    console.log(result);
    document.getElementById("result").innerHTML = result;
}
        