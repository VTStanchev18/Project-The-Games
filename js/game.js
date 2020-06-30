document.addEventListener('DOMContentLoaded',()=>{
    const cardArray=[
        {
            name:'',
            img:''
        },
    ]
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    // create your board
        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                var card = document.createElement('img')
                card.setAttribute('src', '')
                card.setAttribute('data-id', i)
                card.addEventListener('click', flipCard)
                grid.appendChild(card)
            }
        }

    // flip a card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length ===2) {
          setTimeout(checkForMatch, 500)
        }
    }
})