
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


const concertType = urlParams.get('concertType');
const price = urlParams.get('price');


if (concertType && price) {
    const message = `You have bought a ticket for ${concertType} at $${price}`;
    document.getElementById('ticketInfo').innerText = message;
} else {
    document.getElementById('ticketInfo').innerText = "Ticket information not found!";
}

function calculatePrice() {
    const ticketType = document.getElementById('ticketType').value;
    const ticketQuantity = parseInt(document.getElementById('ticketQuantity').value);
    let price = 0;

    if (ticketType === 'vip') {
        price = 1000 * ticketQuantity; 
    } else {
       
        const standardPrice = parseInt(urlParams.get('price'));
        price = standardPrice * ticketQuantity;
    }

    const message2 = `You have bought ${ticketQuantity} ${ticketType} ticket(s) for ${concertType} at $${price}`;
    document.getElementById('ticketcalcu').innerText = message2;

    
}
