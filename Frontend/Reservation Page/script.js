// script.js

// Function to handle table reservation
function reserveTable() {
    // Get the selected values
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var seats = document.getElementById('seats').value;

    if (date === "" || time === "" || seats === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    // Create a new row for the reservation table
    var table = document.getElementById('reservationTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Insert cells with reservation information
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = date;
    cell2.innerHTML = time;
    cell3.innerHTML = seats;

    // Add cancel reservation button
    var cancelBtn = document.createElement("button");
    cancelBtn.innerHTML = "Cancel";
    cancelBtn.onclick = function() {
        showCancellationConfirmation(newRow);
    };
    cell4.appendChild(cancelBtn);
}

// Function to show cancellation confirmation popup
function showCancellationConfirmation(row) {
    var confirmation = confirm("Are you sure you want to cancel this reservation?");
    if (confirmation) {
        cancelReservation(row);
    }
}

// Function to handle canceling a reservation
function cancelReservation(row) {
    var table = document.getElementById('reservationTable').getElementsByTagName('tbody')[0];
    table.removeChild(row);
}


