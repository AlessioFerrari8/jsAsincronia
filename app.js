function fetchUser() {
    fetch('user.json') // recuperiamo il file user.json --> come url usa il percorso relativo che include il nome del file
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => {
            console.error("Error fetching user:", error);
        });
}

fetchUser();

