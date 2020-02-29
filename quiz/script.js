function question1ResultValue() {
    var form = document.getElementById('form_1');
    console.log(form);
    for (var i=0; i<form.optradio1.length; i++)  {
        if (form.optradio1[i].checked)  {
            var question1Result;
            question1Result = form.optradio1[i].value;
            console.log(question1Result);
            return question1Result;
        }
    }
}


function question2ResultValue() {
    var form = document.getElementById('form_2');
    for (var i=0; i<form.optradio2.length; i++)  {
        if (form.optradio2[i].checked)  {
            var question2Result;
            question2Result = form.optradio2[i].value;
            return question2Result;
        }
    }
}


function question3ResultValue() {
    var form = document.getElementById('form_3');
    for (var i=0; i<form.optradio3.length; i++)  {
        if (form.optradio3[i].checked)  {
            var question3Result;
            question3Result = form.optradio3[i].value;
            return question3Result;
        }
    }
}


function question4ResultValue() {
    var form = document.getElementById('form_4');
    for (var i=0; i<form.optradio4.length; i++)  {
        if (form.optradio4[i].checked)  {
            var question4Result;
            question4Result = form.optradio4[i].value;
            return question4Result;
        }
    }
}


function submit() {

    var question1 = question1ResultValue();
    var question2 = question2ResultValue();
    var question3 = question3ResultValue();
    var question4 = question4ResultValue();
    var finalResult = parseInt(question1) + parseInt(question2) + parseInt(question3) + parseInt(question4);

    if (finalResult === 0) {
        document.getElementById('display').innerHTML = "Healthy as hell";
    }
    else if (finalResult <4) {
        document.getElementById('display').innerHTML = "Could be better";
    }
    else {
        document.getElementById('display').innerHTML = "Take care of your health!";
    }
    }

