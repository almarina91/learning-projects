var resultBox;
var sum1 = "0";
var sum2 = "0";
var addClicked = false;
var subtractClicked = false;
var multiplyClicked = false;
var divideClicked = false;

function add(a,b)
{
    if (isNaN(a)) 
    {
        a = 0;
    }

    if (isNaN(b)) 
    {
        b = 0;
    }

    var result = a + b;
    return result;
}

function subtract(a,b)
{
    if (isNaN(a)) 
    {
        a = 0;
    }

    if (isNaN(b)) 
    {
        b = 0;
    }

    var result = a - b;
    return result;
}

function multiply(a,b)
{
    if (isNaN(a)) 
    {
        a = 0;
    }

    if (isNaN(b)) 
    {
        b = 0;
    }

    var result = a * b;
    return result;
}

function divide(a,b)
{
    if (isNaN(a)) 
    {
        a = 0;
    }

    if (isNaN(b)) 
    {
        b = 0;
    }

    if (b === 0)
    {
        return "Not a number";
    }

    var result = a / b;
    return result;
}

function changeSign(a)
{
    var result = a * (-1);
    return result;
}

function clear()
{
    sum1 = "0";
    sum2 = "0";
    resultBox.innerHTML = sum1;

}

function percent (a)
{
    var result = a / 100;
    return result;
}

function onLoadHandler()
{
    resultBox = document.getElementById("result");
}

function onClickHandler(a)
{
    if (addClicked || subtractClicked || divideClicked || multiplyClicked)
    {
        
        sum2 = sum2 + a;
        resultBox.innerHTML = sum2;
    }
    else
    {
        sum1 = sum1 + a;
        resultBox.innerHTML = sum1;
    }
}

function onClickAddHandler()
{
    addClicked = true;
    subtractClicked = false;
    multiplyClicked = false;
    divideClicked = false;
}

function onClickSubtractHandler()
{
    addClicked = false;
    subtractClicked = true;
    multiplyClicked = false;
    divideClicked = false;
}

function onClickMultiplyHandler()
{
    addClicked = false;
    subtractClicked = false;
    multiplyClicked = true;
    divideClicked = false;
}

function onClickDivideHandler()
{
    addClicked = false;
    subtractClicked = false;
    multiplyClicked = false;
    divideClicked = true;
}

function onClickEqualHandler()
{
    if (addClicked)
    {
        sum1 = add(parseFloat(sum1), parseFloat(sum2));
        resultBox.innerHTML = sum1;
    }
    else if (subtractClicked)
    {
        sum1 = subtract(parseFloat(sum1), parseFloat(sum2));
        resultBox.innerHTML = sum1;
    }
    else if (multiplyClicked)
    {
        sum1 = multiply(parseFloat(sum1), parseFloat(sum2));
        resultBox.innerHTML = sum1;
    }
    else if (divideClicked)
    {
        sum1 = divide(parseFloat(sum1), parseFloat(sum2));
        resultBox.innerHTML = sum1;
    }

    addClicked = false;
    subtractClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    sum1 = "0";
    sum2 = "0";
}

function onClickClearHandler()
{
    clear();
}

function onClickChangeSignHandler()
{
    if (addClicked || subtractClicked || divideClicked || multiplyClicked)
    {
        sum2 = changeSign(parseFloat(sum2));
        resultBox.innerHTML = sum2;
    }
    else
    {
        sum1 = changeSign(parseFloat(sum1));
        resultBox.innerHTML = sum1;
    }
}

function onClickPercentHandler()
{
    resultBox.innerHTML= percent(parseFloat(sum1));
}