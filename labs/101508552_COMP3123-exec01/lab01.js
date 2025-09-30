// Exercise 1
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world")); 


// Exercise 2
function max(a, b, c) {
    return Math.max(a, b, c);
}

console.log(max(1, 0, 5));      


// Exercise 3
function right(str) {
    if (str.length < 3) return str;
    return str.slice(-3) + str.slice(0, -3);
}

console.log(right("Python"));     

// Exercise 4
function angleType(angle) {
    if (angle < 90) return "Acute angle";
    if (angle === 90) return "Right angle";
    if (angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
    return "Invalid angle";
}

console.log(angleType(47));   
console.log(angleType(90));  