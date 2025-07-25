let studentData = {
    name: "John",
    country: "india"
};

var dynamicProperty = "age"
studentData[dynamicProperty] = 25
var dynamicProperty = "city"
studentData.dynamicProperty = "Pune"
console.log(studentData.age)
console.log(studentData.city)