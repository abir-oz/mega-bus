
document.getElementById('firstclass-increase').addEventListener('click', function () {
    handleTicketChange('firstclass', true);
})

document.getElementById('firstclass-decrease').addEventListener('click', function () {
    handleTicketChange('firstclass', false);
})


document.getElementById('economy-increase').addEventListener('click', function () {
    handleTicketChange('economy', true);
})


document.getElementById('economy-decrease').addEventListener('click', function () {
    handleTicketChange('economy', false);
})


document.getElementById('booking-button').addEventListener('click', function () {
    document.getElementById('booking-ticket').style.display = 'none';

    const bookingConfirm = document.getElementById('booking-confirmation');
    bookingConfirm.style.display = 'block';

    const firstClassCount = getInputValue('firstclass');
    const economyCount = getInputValue('economy');

    if (firstClassCount != 0 && economyCount != 0) {

        const messageHeading = document.createElement('h3');
        const messageParagraph = document.createElement('p');
        const totalTicket = firstClassCount + economyCount;
        let ticket = 'Ticket';
        if (totalTicket > 1) {
           ticket = 'Tickets';
        }

        messageHeading.innerHTML = "Congratulations!"
        messageParagraph.innerHTML = "You have Successfully Booked " + totalTicket + " " + ticket;
        bookingConfirm.appendChild(messageHeading);
        bookingConfirm.appendChild(messageParagraph);
    }

})

function handleTicketChange(ticketType, isIncrease) {


    const ticketCount = getInputValue(ticketType);



    let ticketNewCount = ticketCount
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticketType + '-count').value = ticketNewCount;

    let ticketTotal = 0;

    if (ticketType == 'firstclass') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticketType == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }

    calculateTotal();
}

function calculateTotal() {

    const firstClassCount = getInputValue('firstclass');
    const economyCount = getInputValue('economy');

    const totalPrice = firstClassCount * 150 + economyCount * 100;


    document.getElementById('total-price').innerText = totalPrice;


    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;


}


function getInputValue(ticketType) {
    const ticketInput = document.getElementById(ticketType + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}