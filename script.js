// array of all products (where each product is an obj)

const products = [
    {
        name: "Pepsi Diet",
        energy: "350 cl",
        energyPercent: "8.6%",
        fat: "0g",
        fatPercent: "0%",
        sodium: "30mg",
        sodiumPercent: "1%",
        carbohydrates: "48g",
        carbohydratesPercent: "15.3%",
        protein: "0g",
        proteinPercent: "0%",
        quantity: "250ml",
        blueIcon: "img/1 Pespi blue.png",
        whiteIcon: "img/1 Pespi white.png",
        heroImg: "img/pepsi diet.png"
    },
    {
        name: "Pepsi Classic",
        energy: "150 cl",
        energyPercent: "7.8%",
        fat: "0g",
        fatPercent: "0%",
        sodium: "30mg",
        sodiumPercent: "1%",
        carbohydrates: "41g",
        carbohydratesPercent: "14%",
        protein: "0g",
        proteinPercent: "0%",
        quantity: "330ml",
        blueIcon: "img/2 can blue.png",
        whiteIcon: "img/2 can white.png",
        heroImg: "img/can.png"
    },
    {
        name: "Pepsi 500ml",
        energy: "350 cl",
        energyPercent: "12.9%",
        fat: "0g",
        fatPercent: "0%",
        sodium: "40mg",
        sodiumPercent: "2%",
        carbohydrates: "52g",
        carbohydratesPercent: "21.7%",
        protein: "0g",
        proteinPercent: "0%",
        quantity: "500ml",
        blueIcon: "img/3 Pepsi blue.png",
        whiteIcon: "img/3 Pepsi white.png",
        heroImg: "img/pepsi .5ltr.png"
    },
    {
        name: "Pepsi 1ltr",
        energy: "480 cl",
        energyPercent: "10.1%",
        fat: "0g",
        fatPercent: "0%",
        sodium: "45mg",
        sodiumPercent: "2.5%",
        carbohydrates: "58g",
        carbohydratesPercent: "25.8%",
        protein: "0g",
        proteinPercent: "0%",
        quantity: "1ltr",
        blueIcon: "img/4 Pepsi blue.png",
        whiteIcon: "img/4 Pepsi white.png",
        heroImg: "img/pepsi 1ltr.png"
    },
    {
        name: "Pepsi 1.5ltr",
        energy: "625 cl",
        energyPercent: "19.4%",
        fat: "0g",
        fatPercent: "0%",
        sodium: "50mg",
        sodiumPercent: "3%",
        carbohydrates: "66g",
        carbohydratesPercent: "30.9%",
        protein: "0g",
        proteinPercent: "0%",
        quantity: "1.5ltr",
        blueIcon: "img/5 Pepsi blue.png",
        whiteIcon: "img/5 Pepsi white.png",
        heroImg: "img/pepsi 1.5ltr.png"
    },
    {
        name: "Pepsi 2ltr",
        energy: "729 cl",
        energyPercent: "37.2%",
        fat: "0g",
        fatPercent: "0%",
        sodium: "560mg",
        sodiumPercent: "4%",
        carbohydrates: "69g",
        carbohydratesPercent: "33.2%",
        protein: "0g",
        proteinPercent: "0%",
        quantity: "2ltr",
        blueIcon: "img/6 Pepsi blue.png",
        whiteIcon: "img/6 Pepsi white.png",
        heroImg: "img/pepsi 2ltr.png"
    },
    
]

// select elements whose data would be changed
const productName = document.getElementById("product-name"),
      energy = document.getElementById("energy"),
      energyPercent = document.getElementById("energy-percent"),
      fat = document.getElementById("fat"),
      fatPercent = document.getElementById("fat-percent"),
      sodium = document.getElementById("sodium"),
      sodiumPercent= document.getElementById("sodium-percent"),
      carbs = document.getElementById("carbs"),
      carbsPercent = document.getElementById("carbs-percent"),
      protein = document.getElementById("protein"),
      proteinPercent = document.getElementById("protein-percent"),
      productImg = document.getElementById("product-img"),
      quantity = document.getElementById("product-quantity");

// select all elements that will be used to move or change
const previous = document.querySelector(".prev"),
      next = document.querySelector(".next"),
      listItems = document.querySelectorAll(".list__item"),
      itemIcons = document.querySelectorAll(".item__icon");
 
      
/* ................................................... */


//  change list icon color when mouse is hovered over them

listItems.forEach((item, i) => {
    const img = item.getElementsByTagName("img")[0];

    // change color to white
    item.addEventListener("mouseover", () => {
        img.src = products[i].whiteIcon;
    })

    // change color back to blue when mouse is hovered out
    item.addEventListener("mouseout", () => {
        img.src = products[i].blueIcon;
    })
})

/* ................................................... */

// update all corresponding info for each list item when that item will be clicked

// updateInfo() updates the info for each array item

const updateInfo = (i) => {
    productName.textContent = products[i].name;
    energy.textContent = products[i].energy;
    energyPercent.textContent = products[i].energyPercent;
    fat.textContent = products[i].fat;
    fatPercent.textContent = products[i].fatPercent; 
    sodium.textContent = products[i].sodium;
    sodiumPercent.textContent = products[i].sodiumPercent;
    carbs.textContent = products[i].carbohydrates;
    carbsPercent.textContent = products[i].carbohydratesPercent;
    protein.textContent = products[i].protein;
    proteinPercent.textContent = products[i].proteinPercent;
    quantity.textContent = products[i].quantity;
    productImg.src = products[i].heroImg;
}

listItems.forEach((item, i) => {
    item.addEventListener("click", () => {
        updateInfo(i);
    });
})

/* ................................................... */

// next and previous buttons

let currentIndex = 1;

// for next button

// actionsAfterNextClick() increments the current item of the array by 1 and then updates its corresponding information

const actionAfterNextClick = () => {
    currentIndex++;

    // if it is the last item of the array, come back to zero-th item
    if (currentIndex >= products.length) {
        currentIndex = 0;
    }

    // pass currentIndex as argument to updateInfo()
    updateInfo(currentIndex);
}

next.addEventListener("click", actionAfterNextClick);

// for previous button

// actionsAfterPrevClick() decrements the current item of the array by 1 and then updates its corresponding information

const actionAfterPrevClick = () => {
    currentIndex--;

    // if it is the first item of the array, come back to last item
    if (currentIndex < 0) {
        currentIndex = products.length - 1; // last array item is always one less than array length
    }

    // pass currentIndex as argument to updateInfo()
    updateInfo(currentIndex);
}

previous.addEventListener("click", actionAfterPrevClick);



































