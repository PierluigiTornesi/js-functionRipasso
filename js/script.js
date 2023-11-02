//ESECUZIONE 
//array test 
let arrayTest = ["pippo",3,"tutto","magico",23]
//debug arrayTest
console.log(arrayTest,"arrayTest Iniziale");

//1)
//numero degli elementi dell'array 
const numero = parseInt(contaElementi(arrayTest));
//risultato
console.log("1)",numero,"numero degli elementi dell'arrayTest");

//2)
//stringa contenente gli elementi dell'array test
const stringa = stampa(arrayTest);
//risultato stringa
console.log("2)",stringa,"stringa degli elementi dell'arrayTest");

//3)
//array che avrá tutti gli elementi dell'arrayTest tranne l'ultimo
const arrayNew1 = togliDallaCoda(arrayTest);
//risultato arrayNew1
console.log("3)",arrayNew1, "nuovo array senza l'ultimo elemento");


//4)
//elemento da aggiungere in coda
const elemCoda = "coda";
//array che avrá tutti gli elementi dell'arrayTest piú l'elemento alla fine
const arrayNew2 = inserisciInCoda(arrayTest,elemCoda);
//risultato arrayNew2
console.log("4)",arrayNew2, "nuovo array con un nuovo elemento alla fine");


//5)
//array che avrá tutti gli elementi dell'arrayTest ma senza la testa
const arrayNew3 = togliDallaTesta(arrayTest);
//risultato arrayNew3
console.log("5)",arrayNew3, "nuovo array ma senza la testa");

//6)
//elemento da aggiungere in testa
const elemTesta = "testa";
//array che avrá tutti gli elementi dell'arrayTest piú l'elemento in testa
const arrayNew4 = inserisciInTesta(arrayTest,elemTesta);
//risultato arrayNew2
console.log("6)",arrayNew4, "nuovo array con un nuovo elemento in testa");

//7)
//array da aggiungere all'arrayTest
const arrayNew5 = ["sono", "il", 2]
//array che avrá l'unione dell'arrayTest e il nuovo arrayNew5
const arrayUnito = unisci(arrayTest,arrayNew5);
//risultato arrayUnito
console.log("7)", arrayUnito,`arrayTest unito con ${arrayNew5}`);

//8)
//elemento da cercare nell'arrayTest per restituire true
const elemTrue = 3;
//elemento da cercare nell'arrayTest per restituire false
const elemFlase = "no";
//risultato di cerca positivo
const risTrue = cerca(arrayTest,elemTrue);
//debug
console.log("8.1)", risTrue, `ho cercato ${elemTrue} nell'array test e l'ho trovato`);
//risultato di cerca negativo
const risFalse = cerca(arrayTest,elemFlase);
//debug
console.log("8.2)", risFalse, `ho cercato ${elemFlase} nell'array test e non l'ho trovato`);

//9)
//elemento da cercare nell'arrayTest per restituire una posizione valida
const elemPosVal = 3;
//elemento da cercare nell'arrayTest per restituire -1 come valore della posizione, quindi non valida
const elemPosNotVal = "no";
//risultato di cerca positivo
const risPosVal = cercaIndice(arrayTest,elemPosVal);
//debug
console.log("9.1)", risPosVal, `ho cercato ${elemPosVal} nell'array test e l'ho trovato`);
//risultato di cerca negativo
const risPosNotVal = cercaIndice(arrayTest,elemPosNotVal);
//debug
console.log("9.2)", risPosNotVal, `ho cercato ${elemPosNotVal} nell'array test e non l'ho trovato`);

//10)
//array da mettere in ordine crescente
const arrayNumerico = [1,45,673,23,12,56,9,27864,2525,112,223,555,222]
//risultato di ordina 
const arrayCrescente = ordina(arrayNumerico);
//debug
console.log("10)",arrayCrescente,`risultato della funzione ordina su questo array iniziale --->   ${arrayNumerico}`);




/**************/
//FUNZIONI


/**
 * una funzione che, dato un array in input, conti il numero degli elementi presenti e lo restituisca come numero intero
 * @param {array} array di cui conteremo gli elementi all'interno
 * @returns {number} numero degli elementi dell'array
 */
function contaElementi(array) {
    let contaElem = 0;
    for (let i = 0; i < array.length; i++) {
        contaElem++;
    }
    return contaElem;
    //posso anche fare cosi senza scorrere l'array , senza usare il for e senza usare una nuova variabile
    //return array.length;
}


/**
 * una funzione che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola
 * @param {array} array di cui stamperemo il contenuto in una stringa
 * @returns {string} stringa contenente gli elementi dell'array
 */
function stampa(array){
    let stringa = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        stringa += element;
        if(i+1 < array.length){
            stringa += " , ";
        }
    }
    return stringa
}

/**
 * una funzione che, dato un array A in input, restituisca un nuovo array B con tutti gli elementi dell'array A, tranne l'ultimo
 * @param {array} array da cui toglieremo l'ultimo elemento
 * @returns {array} che avrá tutti gli elementi del primo array tranne l'ultimo
 */
function togliDallaCoda(array) {
    let arrayNew = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(i+1 < array.length){
            //posso inserirlo anche cosi senza usare push
            //arrayNew[i] = element;
            arrayNew.push(element);
        }
    }
    return arrayNew
}

/**
 * una funzione che, dato un array A in input e un elemento da inserire E, restituisca un nuovo array B con tutti gli elementi dell'array A e come ultimo elemento E
 * @param {array} array da cui prenderemo tutti gli elementi
 * @param {element} elemento che verrá inserito nell'array finale alla coda del primo array
 * @returns {array} array finale che avrá tutti gli elmenti dell'array iniziale e alla coda l'elemento finale
 */
function inserisciInCoda(array,elemento){
    let arrayNew = [];
    //variabile contatore che servirá per inserire in coda l'elemento senza usare push
    let conta = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        //posso inserirlo anche cosi senza usare push
        arrayNew[i] = element;
        conta = i;
        //arrayNew.push(element)
    }
    //arrayNew.push(elemento);
    //posso inserirlo anche cosi senza usare push
    arrayNew[conta + 1] = elemento;
    return arrayNew;
}


/**
 * una funzione che, dato un array A in input, restituisca un nuovo array B con tutti gli elementi di A scalati di una posizione verso sinistra e senza il primo elemento
 * @param {array} array da cui toglieremo la testa
 * @returns {array} array che avrá tutti gli elementi del primo array senza la testa
 */
function togliDallaTesta(array) {
    let arrayNew = [];
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        //posso inserirlo anche cosi senza usare push
        arrayNew[i - 1] = element;
        //arrayNew.push(element);
    }
    return arrayNew;
}


/**
 * una funzione che, dato un array A in input e un elemento da inserire E, restituisca un nuovo array B con tutti gli elementi di A scalati di una posizione verso destra e l'elemento E come primo elemento
 * @param {array} array da cui prenderemo tutti gli elementi
 * @param {element} elemento da inserire in testa nel nuovo array
 * @returns {array} array che avrá come testa l'elemento nuovo e poi a seguire tutti gli elementi del primo array
 */
function inserisciInTesta(array,elemento) {
    let arrayNew = [];
    //posso inserirlo anche cosi direttamente senza usare il push
    arrayNew[0] = elemento;
    //arrayNew.push(elemento);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        //posso inserirlo anche cosi senza usare push
        arrayNew[i + 1] = element;
        //arrayNew.push(element);
    }
    return arrayNew;
}



/**
 * una funzione che, dati due array A e B in input, restituisca un nuovo array C con tutti gli elementi di A e B
 * @param {array} array test che verrá unito 
 * @param {array} arrayDaUnire che verrá unito all'arrayTest
 * @returns {array} array che sará l'unione dei due array
 */
function unisci(array, arrayDaUnire) {
    let arrayUnito = [];
    //variabile contatore per sapere da dove dovró iniziare a inserire gli elementi del secondo array senza usare push
    let conta = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        //arrayUnito.push(element);
        //posso anche fare cosi senza usare push
        arrayUnito[i] = element;
        //imposto la variabile come i per sapere la lunghezza da cui iniziare a inserire gli elementi
        conta = i;
    }
    for (let i = 0; i < arrayDaUnire.length; i++) {
        const element = arrayDaUnire[i];
        //arrayUnito.push(element);
        //posso fare anche cosi senza push
        arrayUnito[conta + 1] = element;
        conta++;
    }
    return arrayUnito;
}


/**
 * una funzione che, dato un array A in input e un elemento E, restituisca true se l'elemento E è presente nell'array A, false altrimenti
 * @param {array} array da cui verrá cercato l'elemento
 * @param {element} elemento da cercare nell'array
 * @returns {boolean} risultato true se trovato, altrimenti false
 */
function cerca(array,elemento) {
    let flag = false;
    /*if(array.includes(elemento)){
        flag = true;
    }*/
    //senza usare includes
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(elemento === element){
            flag = true;
        }
    }
    return flag;
}


/**
 * una funzione che, dato un array A in input e un elemento E, restituisca l'indice della posizione in cui si trova tale elemento all'interno di A. Se l'elemento E non è presente in A, la funzione deve restituire il valore -1. 
 * Il valore restituito non indica la posizione esatta, se restituisce 1 non vorrá dire che si trova alla prima posizione, ma in questo caso nella seconda, partendo l'indice dell'array da 0, perció per restituire la posizione concettualmente vera basta incrementare di 1 il return
 * @param {array} array da cui cercheremo l'elemento
 * @param {element} elemento da cercare nell'array
 * @returns {number} indice della posizione dell'elemento nell'array se trovato, altrimenti avrá valore -1
 */
function cercaIndice(array,elemento) {
    let position = -1;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(elemento === element){
            position = i;
        }
    }
    return position;
}


/**
 * una funzione che, dato un array A in input, restituisca un nuovo array B con tutti gli elementi di A in ordine crescente
 * @param {array} array che verrá messo in ordine
 * @returns {array} array con tutti i valori in ordine crescente
 */
function ordina(array) {
    //flag che indicherá se siano avvenuti scambi o meno all'interno del ciclo
    let flag;
    //array in ordine crescente
    let arrayNew = [];
    //inserisco i valori nell'array nuovo
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        arrayNew.push(element)
    }
    //ordino in senso crescente 
    for (let i = 0; i < arrayNew.length; i++) {
        //imposto il flag sempre a false quando inizio il ciclo cosi controllo se avvengono scambi
        flag = false;
        for (let j = 1; j < arrayNew.length - i; j++) {
            if (arrayNew[j-1] > arrayNew[j]) {
                //imposto una variabile per scambiare di posizione i due valori e gli assegno il valore nella posizione j-1 per salvarne il valore
                let scambio = arrayNew[j-1]
                //imposto il valore nella posizione j-1 come quello di j
                arrayNew[j-1] = arrayNew[j]
                //imposto il valore nella posizione j come quello nella variabile scambio
                arrayNew[j] = scambio;
                //imposto a true il flag, quindi sono avvenuti scambi
                flag = true
            }
        }
        //se non sono piú avvenuti degli scambi fermo il ciclo che invece andrá avanti anche se é stato effettuato un solo scambio
        if(!flag){
            break
        }
    }
    //restituisco il nuovo array in ordine crescente
    return arrayNew;
}