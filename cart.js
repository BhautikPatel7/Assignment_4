// Function to update totals
function updateTotals() {
    var totalItems = 0;
    var subTotal = 0;
    var gst = 0;
    document.querySelectorAll('.row_tb').forEach(function (row) {
        // Check if the checkbox is selected
        var checkbox = row.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            var quantity = parseFloat(row.querySelector('#quentty').value) || 0;
            var rowNumber = row.classList[1].substring(3);
            var priceId = 'p' + rowNumber;
            var price = parseFloat(row.querySelector('#' + priceId).innerText.replace('$', '')) || 0;

            // Update total items and sub-total
            totalItems += quantity;
            subTotal += quantity * price;
            updateItemTotal(row, quantity * price);
        }
    });

    // Calculate GST 
    gst = 0.18 * subTotal;
    // Update the DOM with the calculated values
    document.getElementById('ttl_itm').innerText = totalItems;
    document.getElementById('sub_ttl').innerText = '$' + subTotal.toFixed(2);
    document.getElementById('gst_cnt').innerText = '$' + gst.toFixed(2);

    var totalMoney = subTotal + gst;
    document.getElementById('ttl_money').innerText = '$' + totalMoney.toFixed(2);
}
function updateItemTotal(row, total) {
    row.querySelector('p[id^="itm_total"]').innerText = '$' + total.toFixed(2);
}

// Function for checkbox change
function handleCheckboxChange(checkbox) {
    updateTotals();
}

function handleQuantityChange(input) {
    var row = input.parentNode.parentNode;
    var rowNumber = row.classList[1].substring(3);

    var priceId = 'p' + rowNumber;
    var price = parseFloat(row.querySelector('#' + priceId).innerText.replace('$', '')) || 0;
    var quantity = parseFloat(input.value) || 0;
    
    // Check if the entered quantity exceeds 500
    if (quantity > 500) {
        input.value = 500; // Limit the quantity to 500
        quantity = 500; // Update the quantity variable
    }

    // Update item total with new quantity only if within range
    updateItemTotal(row, quantity * price);
    updateTotals();

    // Update total items
    var totalItems = 0;
    document.querySelectorAll('.row_tb input[type="checkbox"]').forEach(function (checkbox) {
        if (checkbox.checked) {
            var row = checkbox.parentNode.parentNode;
            var quantity = parseFloat(row.querySelector('#quentty').value) || 0;
            totalItems += quantity;
        }
    });

    document.getElementById('ttl_itm').innerText = totalItems;
}




// Function to handle removing an item
function Removetext(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateTotals();
}

// Attach event listeners
document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        handleCheckboxChange(this);
    });
});

document.querySelectorAll('#quentty').forEach(function (input) {
    input.addEventListener('input', function () {
        handleQuantityChange(this);
    });
});

document.querySelectorAll('.remove_btn').forEach(function (button) {
    button.addEventListener('click', function () {
        Removetext(this);
    });
});
updateTotals();


// Function to format date as dd/mm/yyyy
function formatDate1(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

// Function to format date as dd mmm yyyy
function formatDate2(date) {
    var day = date.getDate();
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

// Function for checkout
function handleCheckout() {
    var totalItems = document.getElementById('ttl_itm').innerText;
    var totalAmount = document.getElementById('ttl_money').innerText;
    var currentDate = new Date();
    var formattedCurrentDate = formatDate1(currentDate);
    var deliveryDate = new Date();
    deliveryDate.setDate(currentDate.getDate() + 45);
    var formattedDeliveryDate = formatDate2(deliveryDate);
    if(totalItems == 0){
        alert("Add At least One Iteam")
    }
    else{
    // Display alert with formatted checkout information 
    var confirmationMessage = "Total Items: " + totalItems + "\nTotal Amount: " + totalAmount + "\nBill Date: " + formattedCurrentDate + "\nDelivery Date: " + formattedDeliveryDate;
    var isConfirmed = confirm(confirmationMessage + "\n\nDo you want to confirm your order?");
    }      

    if (isConfirmed) {
        alert("Order confirmed! Redirecting to payment page...");
    } else {
        alert("Order canceled. You can continue shopping.");
    }
}
document.getElementById('chekout_btn').addEventListener('click', handleCheckout);
