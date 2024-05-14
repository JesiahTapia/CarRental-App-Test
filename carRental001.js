cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        rentalRatePerDay: 45, // in dollars
        availability: true
    },
    {
        make: "Ford",
        model: "Fusion",
        year: 2021,
        rentalRatePerDay: 40, // in dollars
        availability: false
    },
    {
        make: "Chevrolet",
        model: "Malibu",
        year: 2022,
        rentalRatePerDay: 50, // in dollars
        availability: true
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2023,
        rentalRatePerDay: 47, // in dollars
        availability: true
    }
]
let localCarsObj = JSON.stringify(cars)
if (localStorage.getItem("localCars")) {
    console.log("local storage exists");
    let localUsersText =  localStorage.getItem("localCars")
    users = JSON.parse(localCarsText)
}


document.getElementById("foundRental").innerHTML = `<p></p>`

carForm = () => {
    event.preventDefault()
    let foundMake = document.getElementById("make").value
    let foundModel = document.getElementById("model").value
    let foundYear = document.getElementById("year").value
    let rentalCars = ""
    
    
    for(let i = 0; i < cars.length; i++) {
        if((foundYear == cars[i].year) ||
        (foundMake == cars[i].make || foundModel == cars[i].model)) {
            document.getElementById("foundRental").innerHTML = `<p style="color: blue"> Matching cars found: ${cars[i].year} ${cars[i].make} ${cars[i].model}, Rate Per Day: ${cars[i].rentalRatePerDay}</p>`
            cars[i].availability = false
            break

        } else {
            document.getElementById("foundRental").innerHTML = `<p style="color: red"> No Cars Available </p>`

        }
    
        // if(foundMake == cars[i].make || foundModel == cars[i].model){
        //     let rentalCar = cars[i]
        //     document.getElementById("foundRental").innerHTML = `<p style="color: blue">Matching cars found: ${cars[i].year} ${cars[i].make} ${cars[i].model}, Rate Per Day: ${cars[i].rentalRatePerDay}</p>`
        //     cars[i].availability = false
        //      break

        // } else {
        //     document.getElementById("foundRental").innerHTML = `<p style="color: red"> No Cars Available </p>`
        // }


        
    }
}

// document.getElementById("rentalSelection").innerHTML = `<p style="color: blue"> Cars available for rent</p>`
rentalsDropDown = () => {
    event.preventDefault()
    let availableCarsDropDown = document.getElementById("availableCars").value
    availableCarsDropdown.innerHTML = "<option value=''>Select Car</option>";
    for(let i = 0; i < cars.length; i++) {
        if(cars[i].availability) {
            availableCarsDropdown.innerHTML += `<option value='${i}'>${cars[i].make} ${cars[i].model}</option>`;
        }

}  
}