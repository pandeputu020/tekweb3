function calculateFibonacci() {
    const n = parseInt(document.getElementById("fib-input").value);
    let a = 0, b = 1, temp;
    let result = [a, b];
    for (let i = 2; i < n; i++) {
        temp = a + b;
        result.push(temp);
        a = b;
        b = temp;
    }
    document.getElementById("fib-result").textContent = result.join(', ');
}

function calculateVolume() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const volume = length * width * height;
    document.getElementById("volume-result").textContent = volume.toFixed(2);
}
