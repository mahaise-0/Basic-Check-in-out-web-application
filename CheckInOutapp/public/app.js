async function checkIn() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value;
    console.log("Checking in");

    if (name) {
        const response = await fetch('http://localhost:3000/checkin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        const data = await response.json();

        if (response.ok) {
            const listItem = document.createElement('li');
            listItem.textContent = `${name} (${data.message})`; 
            listItem.style.color = 'green';
            document.getElementById('attendeesList').appendChild(listItem);
            nameInput.value = '';
        } else {
            alert(data.message || 'Error during check-in'); 
        }
    } else {
        alert('Name is required for check-in');
    }
}

// Function to handle check-out
async function checkOut() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value;
    console.log("Checking out");

    if (name) {
        const response = await fetch('http://localhost:3000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });

        const data = await response.json();

        if (response.ok) {
            const listItem = document.createElement('li');
            listItem.textContent = `${name} (${data.message})`; 
            listItem.style.color = 'red';
            document.getElementById('attendeesList').appendChild(listItem);
            nameInput.value = '';
        } else {
            alert(data.message || 'Error during check-out'); 
        }
    } else {
        alert('Name is required for check-out');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkInButton').addEventListener('click', checkIn);
    document.getElementById('checkOutButton').addEventListener('click', checkOut);
});

