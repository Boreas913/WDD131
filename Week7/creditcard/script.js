const checkoutForm = document.querySelector('#checkoutForm');

//Error message
const errorDisplay = document.createElement('div');
errorDisplay.className = 'errors';
errorDisplay.style.color = 'red';
checkoutForm.prepend(errorDisplay); 

function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function submitHandler(event) {
    event.preventDefault();

    let errorMsg = '';
    errorDisplay.textContent = ''; 


    const cardNumber = document.querySelector('#creditCardNumber').value.trim();
    const expMonth = Number(document.querySelector('#month').value);
    const expYear = Number(document.querySelector('#year').value);
    const currentDate = new Date();

    // Validate

    if (!/^\d{16}$/.test(cardNumber)) {
        errorMsg += 'Card number must be 16 digits.\n';
    } 
    else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Invalid card number.\n';
    }

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
        errorDisplay.innerText = errorMsg;
        return;
    }

    document.body.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h2>Thank you for your purchase!</h2>
            <p>Your order is being processed.</p>
        </div>
    `;
}

checkoutForm.addEventListener('submit', submitHandler);