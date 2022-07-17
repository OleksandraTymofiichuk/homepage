document.addEventListener('DOMContentLoaded', function() {

    // When correct answer about color
    let correct = document.querySelector('.correct');
    correct.addEventListener('click', function() {
        console.log("jnjnjmnnjmn")
        document.querySelector('#feedback1').innerHTML = 'Correct';
    });

    // When any incorrect answer
    let incorrects = document.querySelectorAll('.incorrect');
    for (let i = 0; i < incorrects.length; i++) {
        incorrects[i].addEventListener('click', function() {
            document.querySelector('#feedback1').innerHTML = 'Incorect';
        });
    }

    // Input
    document.querySelector('#submit').addEventListener('click', function () {
        let input = document.querySelector('input');
        document.querySelector('#feedback2').innerHTML = input.value;
    })
})