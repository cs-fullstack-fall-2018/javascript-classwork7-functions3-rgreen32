function main(){
    var num1 = parseInt(prompt("GIMME A NUMBER"));
    var num2 = parseInt(prompt("GIMME ANOTHER"));
    alert(product(num1,num2));
    alert(quotient(num1,num2))
}
function product(first, second){
    return (first * second)
}
function quotient(first, second){
    return (first / second)
}
main();