// Add your code here

function submitData(name, email) {
    const formData = { name: name, email: email };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        updateDOM(data.id);
    })
    .catch(error => {
        updateDOMError(error.message);
    });
}

function updateDOM(id) {
    document.body.innerHTML = id;
}

function updateDOMError(errorMessage) {
    document.body.innerHTML = errorMessage;
}