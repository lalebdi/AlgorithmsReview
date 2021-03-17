// How to use JavaScript sort method:

function numberCompare(num1, num2){
    return num1 - num2
}

[6, 4, 15, 10].sort(numberCompare) // [4,6,10,15]

function compareByLen(str1, str2){
    return str1.length - str2.length;
}

["Obama", "Jeb", "Data Structures", "Algorithms"].sort(compareByLen)



// end of code