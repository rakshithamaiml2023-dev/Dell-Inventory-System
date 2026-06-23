alert("JAVASCRIPT LOADED");

var products = [
    "Dell Inspiron",
    "Dell XPS",
    "Dell Latitude",
    "Dell Alienware"
];

window.onload = function () {
    displayInventory();
};

function displayInventory() {
    var list = document.getElementById("inventoryList");
    list.innerHTML = "";

    for (var i = 0; i < products.length; i++) {
        var li = document.createElement("li");
        li.textContent = products[i];
        list.appendChild(li);
    }
}

function addProduct() {
    var product = document.getElementById("productInput").value;

    if (product !== "") {
        products.push(product);
        displayInventory();
        document.getElementById("productInput").value = "";
    }
}

function checkProduct() {
    var product = document.getElementById("productInput").value;

    if (products.includes(product)) {
        document.getElementById("result").innerText =
            product + " is In Stock";
    } else {
        document.getElementById("result").innerText =
            product + " is Out of Stock";
    }
}