function gradingStudents(grades) {
    // Write your code here
    const arr = [];
    for (let i =0; i < grades.length; i++) {
        const otherNumber = Math.ceil(grades[i] / 5)*5;
        if (otherNumber - grades[i] < 3 && grades[i] > 37){
            arr.push(otherNumber);
        } else {
            arr.push(grades[i]);
        }
    }
console.log(arr);
return arr
}

//this worked