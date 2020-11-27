const FORM = document.querySelector(".quiz");
const RESPONSES = ["d", "d"];
const TITLERESULT = document.querySelector(".resultats h2");
const HELPRESULT = document.querySelector(".comment");
const NOTERESULT = document.querySelector(".note");
const ALLQUESTION = document.querySelectorAll(".question");
let userResponses = [];
let checkArray = [];
FORM.addEventListener("submit", (event) =>{
    event.preventDefault();

    for(let i = 1; i <= RESPONSES.length; i++){
        userResponses.push(
            document.querySelector(`input[name="q${i}"]:checked`).value
        );
    }
    checkIsTrue(userResponses);
    //console.log(userResponses)
    userResponses = [];
});

function checkIsTrue(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] === RESPONSES[i]){
            checkArray.push(true);
        } else {
            checkArray.push(false);
        }
    }
    console.log(checkArray);
    displayResult(checkArray);
    
    colorErrors(checkArray);
    checkArray = [];

}

//console.log(checkArray)


function displayResult(array){
    const nbFalse = array.filter((element) => element === false).length;
//console.log(nbFalse);
    switch (nbFalse){
        
        case 0:
            TITLERESULT.innerText = "Bravo t'as un cerveau";
            HELPRESULT.innerText = "maintenant retournes bosser";
            NOTERESULT.innerText = "2/2";
            break;
        case 1:
            TITLERESULT.innerText = "Tu y es presque!";
            HELPRESULT.innerText = "Réessaies";
            NOTERESULT.innerText = "1/2";
            break;
        case 2:
            TITLERESULT.innerText = "T'es nul";
            HELPRESULT.innerText = "concentre-toi";
            NOTERESULT.innerText = "0/2";
            break;

        default:
            "oups cas inattendu";
        }
        //console.log(nbFalse)

}

function colorErrors(arrayBool){
    for (let i = 0; i < arrayBool.length; i++){
        if (arrayBool[i] === true){
            ALLQUESTION[i].style.background = "lightgreen";
        }
        else{
            ALLQUESTION[i].style.background = "red";
            ALLQUESTION[i].classList.add("echec");

            setTimeout (() => {
                ALLQUESTION[i].classList.remove("echec");
            }, 500);
        }
    }
}
ALLQUESTION.forEach((question) => {
    question.addEventListener("click",() => {
        question.style.background = "white";
    });
});
