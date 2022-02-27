let history = []

const calculate = (operator) => {
    // Get values from <form input> fields and assign them to x, y
    let x = Number(document.calculator.firstNumber.value)
    let y = Number(document.calculator.secondNumber.value)
    let result

    // Calculate result and push whole output string to array, based on passed operator
    switch (operator) {
        case "+":
            result = x + y
            break
        case "-":
            result = x - y
            break
        case "*":
            result = x * y
            break
        case "/":
            result = x / y
            break
    }

    history.push(x + " " + operator + " " + y + " = " + result)

    // Write operation + result to result spans (use 2 different spans due to different styling)
    document.getElementById("operation").innerHTML =
        x + " " + operator + " " + y + " = "
    document.getElementById("result").innerHTML = result

    // Add a new <li> element containing the calculation to <ul> with id 'history'
    let list = document.getElementById("history")
    let li = document.createElement("li")
    li.innerText = history[history.length - 1] // = last element in array
    list.appendChild(li)

    /* Make "Clear History" button and last processed calculation visible,
     clear input fields and focus cursor on first input field */
    document.getElementById("clearHistory").style.visibility = "visible"
    document.getElementById("lastCalculation").style.visibility = "visible"
    clearInputFields()
}

const clearHistory = () => {
    // Empty history array and update HTML content
    history = []
    document.getElementById("history").innerHTML = history

    // Hide "Clear History" button and last calculation
    document.getElementById("clearHistory").style.visibility = "hidden"
    document.getElementById("lastCalculation").style.visibility = "hidden"
    clearInputFields()
}

const clearInputFields = () => {
    document.getElementById("firstNumber").value = ""
    document.getElementById("secondNumber").value = ""
    document.getElementById("firstNumber").focus()
    document.getElementById("firstNumber").select()
}
