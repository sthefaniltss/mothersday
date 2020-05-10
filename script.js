const cuponsList = [
    { 
        'src': './img/Amor@4x-8.png',
        'alt': 'Ticket com corações'
    },
    { 
        'src': './img/Chocolate@4x-8.png',
        'alt': 'Ticket com chocolate'
    },
    { 
        'src': './img/flor@4x-8.png',
        'alt': 'Ticket com flor'
    },
    { 
        'src': './img/Jantar@4x-8.png',
        'alt': 'Ticket com um jantar'
    },
    { 
        'src': './img/Manicure@4x-8.png',
        'alt': 'Ticket com esmalte'
    },
    { 
        'src': './img/Maquiagem@4x-8.png',
        'alt': 'Ticket com maquiagem'
    },
    { 
        'src': './img/massagem@4x-8.png',
        'alt': 'Ticket com massagem'
    }
    
];

document.querySelector("button").addEventListener('click', ()=>{
    let ticketDiv   = document.querySelector(".ticket");

    ticketDiv.innerHTML = '';

    let ticket       = document.createElement("img");
    let randomTicket = Math.floor(Math.random() * Math.floor(7));
    ticket.src       = cuponsList[randomTicket].src;
    ticket.alt       = cuponsList[randomTicket].alt;
    
    ticketDiv.appendChild(ticket);
})
