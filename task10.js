function isNum(numb) {
    if (!Number.isInteger(numb) || numb < 2 && numb > 1000) return "данные неверны";
    let k = Math.sqrt(numb);
    for (let i = 2; i <= k; i++)
        if (numb % i === 0) return "непростое число";
    return "простое число";
}
console.log(isNum(2)); 