let player = ''
let choices = [
    {
        name: 'Rock',
        beats: ['Scissors', 'Lizard']
    },
    {
        name: 'Paper',
        beats: ['Rock', 'Spock']
    },
    {
        name: 'Scissors',
        beats: ['Paper', 'Lizard']
    },
    {
        name: 'Lizard',
        beats: ['Paper', 'Spock']
    },
    {
        name: 'Spock',
        beats: ['Rock', 'Scissors']
    }
]


function select(selection) {
    player = selection
    document.getElementById('Results').innerText = `You have selected: ${selection.name}`
}

function play(selection) {

    document.getElementById('Results').innerText = 'The Opponent is choosing...'


    let computerSelect = choices[(Math.floor(Math.random() * choices.length - 0.001))]
    let message = `You Picked: ${selection.name}, your opponent picked: ${computerSelect.name}`
    if (selection.beats.find(pick => pick == computerSelect.name)) {
        message += " - You Win!"
    } else if (selection.name == computerSelect.name) {
        message += " - You Tied -.-"
    } else {
        message += " - You Lose :("
    }


    document.getElementById('Results').innerText = message

}

function drawButtons() {
    let template = ''
    for (let i = 0; i < choices.length; i++) {
        const choice = choices[i];
        template += `<button type="button" class="btn btn-primary option m-1" onclick="select(choices[${i}])">${choice.name}</button>\n`
    }
    document.getElementById('selection-menu').innerHTML = template
}

drawButtons()