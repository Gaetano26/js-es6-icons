/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
*/

//creo array di oggetti con tutte le icone
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];
function creaCards (arrayFiltrato) {
    //creiamo una costante per prendere la row
    const row = document.querySelector('.row');
    row.innerHTML ='';
    let cards = '';
    //ciclo per creare delle card per ogni oggetto nell'array e i loro rispettivi valori
    for (let i = 0; i < arrayFiltrato.length; i++) {
        const icona = arrayFiltrato[i];
        //constante card con il contenuto da creare e inserire 
        const card = `
        <div class="col">
            <div class="card">
                <div class="card-body d-flex flex-column justify-content-center align-items-center fs-3 py-3" style="color:${icona.color}">
                    <i class="${icona.prefix}${icona.family} ${icona.prefix}${icona.name}"></i>
                    <span class="text-black">${icona.name}</span>
                </div>
            </div>
        </div>
        `
        //do il valore di card alla variabile cards
        cards += card;
    }
    //inserisco tutte le card nella row
    row.innerHTML += cards;
};

//verificare se il valore della select è uguale al valore dell'array
function disegnaIcone(selezionaValore) {
   const arrayFiltrato = icons.filter((value) =>{
    if (value.type === selezionaValore || selezionaValore === 'all'){
        return true;
    } else {
        return false;
    }
   })
    // se l'elemento ha superato il test creo le card
    arrayFiltrato.forEach((value) => {
        creaCards(arrayFiltrato)
    
    })
    
};



//funzione dell'evento della select che disegna i quadratini a seconda della scelta selezionata
function selezionaLivello () {
     disegnaIcone(this.value)
}

const select = document.getElementById('select')
select.addEventListener('change', selezionaLivello)
disegnaIcone(select.value)
