// Créer une variable qui contient un nombre.
// Demander un nombre à l'utilisateur. Afficher à l'utilisateur si c'est plus, c'est moins ou c'est bon
// L'utilisatreur a 3 essais.
//**********  EX1 **********/
// let numero = 5;
// terminado =0
// while (!terminado){

//     numeroPedido = parseInt(prompt ("Ingrese un numero primo entre 1 y 1000"))

//     if (numeroPedido> numero) {
//         console.log("el numero de ingresado es menor que el numero de referencia" )
//     } else if (numeroPedido>numero) {
//         console.log("el numero de ingresado es mayor que el numero de referencia" )
//     }else {
//         console.log("el numero de ingresado es el numero de referencia!!!" )
//         terminado=1
//     }
// }

/* Ajouter 3 modes de difficulté
Facile -> Choix nombre entre 1 et 20. 8 essais
Moyen -> Choix nombre entre 1 et 50. 5 essais
Difficile -> Choix nombre entre 1 et 100. 3 essais

Afficher à la fin du jeu tous les nombres essayés par l'utilisateur */
//**********  EX2 **********/
const secretNumber = Math.floor(Math.random() * 100) + 1;

dificulty= prompt("enter the dificulty mode you wanna play in(easy/medium/hard)").toLowerCase()

if (dificulty !== 'easy' && dificulty !== 'medium' && dificulty !== 'hard') {
    dificulty= prompt("wrong input, please enter a choice between(easy/medium/hard)").toLowerCase()
}
if (dificulty == 'easy') {
    easyMode();
}
if (dificulty == 'medium') {
    mediumMode();
}
if (dificulty == 'hard') {
    hardMode();
}

function easyMode() {
    const secretNumber = Math.floor(Math.random() * 20) + 1;
    nbTry=0;
    while (nbTry < 8) {
        numberTried = parseInt(prompt('enter the secret number'));
        if (numberTried === secretNumber) {
            console.log('Congratulations! you guessed correctly the secret number');
            return;
        } else {
            nbTry++;
            console.log('Incorrect! keep trying, you have '+ (8-nbTry) + ' guesses left');
        }
    }
    console.log('Sorry, you are out of guesses. The secret number was: ' + secretNumber);

}

function mediumMode() {
    const secretNumber = Math.floor(Math.random() * 50) + 1;
    nbTry=0;
    while (nbTry < 5) {
        numberTried = parseInt(prompt('enter the secret number'));
        if (numberTried === secretNumber) {
            console.log('Congratulations! you guessed correctly the secret number');
            return;
        } else {
            nbTry++;
            console.log('Incorrect! keep trying, you have '+ (5-nbTry) + ' guesses left');
        }
    }
    console.log('Sorry, you are out of guesses. The secret number was: ' + secretNumber);

}

function hardMode() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    nbTry=0;
    while (nbTry < 3) {
        numberTried = parseInt(prompt('enter the secret number'));
        if (numberTried === secretNumber) {
            console.log('Congratulations! you guessed correctly the secret number');
            return;
        } else {
            nbTry++;
            console.log('Incorrect! keep trying, you have '+ (3-nbTry) + ' guesses left');
        }
    }
    console.log('Sorry, you are out of guesses. The secret number was: ' + secretNumber);

}


/* Consignes nombre mystère (fin):
Créer un champ de formulaire pour demander le nombre à l'utilisateur.
Afficher dans une balise p le fameux "c'est plus, c'est moins, c'est gagné". Si c'est gagné azjouter une classe à mon p pour rendre le texte bien plus grand et visible.

Afficher aussi au fur et à mesure la liste des essais de mon utilisateur */

/******** EX3 ********/

const secretNumber = Math.floor(Math.random() * 100) + 1;

dificulty= prompt("enter the dificulty mode you wanna play in(easy/medium/hard)").toLowerCase()

if (dificulty !== 'easy' && dificulty !== 'medium' && dificulty !== 'hard') {
    dificulty= prompt("wrong input, please enter a choice between(easy/medium/hard)").toLowerCase()
}
if (dificulty == 'easy') {
    easyMode();
}
if (dificulty == 'medium') {
    mediumMode();
}
if (dificulty == 'hard') {
    hardMode();
}

function easyMode() {
    const secretNumber = Math.floor(Math.random() * 20) + 1;
    nbTry=0;
    while (nbTry < 8) {
        numberTried = parseInt(prompt('enter the secret number'));
        if (numberTried === secretNumber) {
            console.log('Congratulations! you guessed correctly the secret number');
            return;
        } else {
            nbTry++;
            console.log('Incorrect! keep trying, you have '+ (8-nbTry) + ' guesses left');
        }
    }
    console.log('Sorry, you are out of guesses. The secret number was: ' + secretNumber);

}

function mediumMode() {
    const secretNumber = Math.floor(Math.random() * 50) + 1;
    nbTry=0;
    while (nbTry < 5) {
        numberTried = parseInt(prompt('enter the secret number'));
        if (numberTried === secretNumber) {
            console.log('Congratulations! you guessed correctly the secret number');
            return;
        } else {
            nbTry++;
            console.log('Incorrect! keep trying, you have '+ (5-nbTry) + ' guesses left');
        }
    }
    console.log('Sorry, you are out of guesses. The secret number was: ' + secretNumber);

}

function hardMode() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    nbTry=0;
    while (nbTry < 3) {
        numberTried = parseInt(prompt('enter the secret number'));
        if (numberTried === secretNumber) {
            console.log('Congratulations! you guessed correctly the secret number');
            return;
        } else {
            nbTry++;
            console.log('Incorrect! keep trying, you have '+ (3-nbTry) + ' guesses left');
        }
    }
    console.log('Sorry, you are out of guesses. The secret number was: ' + secretNumber);

}