function reserveTable() {
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var seats = document.getElementById('seats').value;

    if (date === "" || time === "" || seats === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    var table = document.getElementById('reservationTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = date;
    cell2.innerHTML = time;
    cell3.innerHTML = seats;

    var cancelBtn = document.createElement("button");
    cancelBtn.innerHTML = "Cancel";
    cancelBtn.onclick = function() {
        showCancellationConfirmation(newRow);
    };
    cell4.appendChild(cancelBtn);
}
function showCancellationConfirmation(row) {
    var confirmation = confirm("Are you sure you want to cancel this reservation?");
    if (confirmation) {
        cancelReservation(row);
    }
}
function cancelReservation(row) {
    var table = document.getElementById('reservationTable').getElementsByTagName('tbody')[0];
    table.removeChild(row);
}


