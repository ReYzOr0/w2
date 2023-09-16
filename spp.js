var x = +prompt("Введите первое число")   
var y = +prompt("Введите второе число")
var z = +prompt("Введите третье число")


      
if (x < z && x > y || x > z && x < y   ){
    console.log("Среднее число: " + x);
    alert("Среднее число: " + x)
}
else if (y < z && y > x || y > z && y < x  ){
    console.log("Среднее число" + y);
    alert("Среднее число: " + y)
}
else if (z < y && z > x || z > y && z < x  ){
    console.log("Среднее число" + z);
    alert("Среднее число: " + z)
}else {
     console.log("Вы ввели не число");
     alert("Вы ввели не число")
}
   
