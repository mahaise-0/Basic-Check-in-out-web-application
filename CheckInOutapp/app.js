const attendeesList = document.getElementById("attendeesList"); //contains list of attendees 

function promptName(){
    return prompt('Enter your name:');
}

//Grabs the current time
function getCurrentTime(){
    return new Date().toLocaleTimeString();
}

function checkIn(){
    const name = promptName();

    if(name){
        const enterTime =  getCurrentTime();
        const listItem = document.createElement("li"); //creates a new list element 
        listItem.textContent = `${name} (Check In: ${enterTime})`;//places the name as well as entered time 
        attendeesList.appendChild(listItem); //adds to the list

    }
}

function checkOut(){
    const name = promptName();

    if(name){
        const exitTime = getCurrentTime();
        const listItem = document.createElement("li");
        listItem.textContent = `${name} (Check Out: ${exitTime})`;
        attendeesList.appendChild(listItem);

    }
}

// Function to handle QR code scanning
// function handleQrCode(result) {
//     const qrData = result.codeResult.code;
//     console.log('Scanned QR Code:', qrData);

//     // Example: Handle different QR code data (you can customize this)
//     if (qrData === 'entry') {
//         checkIn();
//     } else if (qrData === 'exit') {
//         checkOut();
//     }
// }

// // Initialize Quagga
// Quagga.init({
//     inputStream: {
//         name: 'Live',
//         type: 'LiveStream',
//         target: document.querySelector('#scanner'),
//     },
//     locator: {
//         patchSize: 'medium',
//         halfSample: true,
//     },
//     numOfWorkers: navigator.hardwareConcurrency || 4,
//     decoder: {
//         readers: ['qrcode_reader'],
//     },
//     locate: true,
// }, function (err) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     Quagga.start();
// });

// // Handle QR code scan
// Quagga.onDetected(handleQrCode);

//listeners
document.getElementById('checkInButton').addEventListener('click', checkIn);
document.getElementById('checkOutButton').addEventListener('click', checkOut);