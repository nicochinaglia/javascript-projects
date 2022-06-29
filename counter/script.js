let data = 0;

function increaseValue() {
    data = data + 1;
    document.getElementById('counterNumber').innerText = data;
}

function decreaseValue() {
    data = data - 1
    if (data < 0) {
        alert("You can't use negative numbers");
        data = 0;
    } else {
        document.getElementById('counterNumber').innerText = data;
    }
}

function resetValue() {
    data = 0;
    document.getElementById('counterNumber').innerText = 0;
}