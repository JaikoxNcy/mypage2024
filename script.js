function checkAnswer (answer) {
    const result = document.getElementById('result');
    if (answer='a'){
        result.textContent = "ถูกต้อง Exp. ย่อมาจาก Expense" ;
        result.style.color = "green"

    } else {
        result.textContent = "Incorrect ; Try again." ;
        result.style.color = 'red' ;
    }
}
function checkAnswer (answer) {
    const result = document.getElementById('result');
    if (answer='a'){
        result.textContent = "ถูกต้อง Rev. ย่อมาจาก Revenue" ;
        result.style.color = "green"   
    } else {
        result.textContent = "Incorrect ; Try again." ;
        result.style.color = 'red' ;
    }
}