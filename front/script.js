function searchCharacter() {
    const characterName = document.getElementById('characterName').value;
    axios.get(`http://localhost:3000/characters/${characterName}`)
        .then(response => {
            const character = response.data;
            const characterInfo = document.getElementById('characterInfo');
            characterInfo.innerHTML = `
                <h2>${character.name}</h2>
                <p>Estado: ${character.status}</p>
                <p>Especie: ${character.species}</p>
                <p>Género: ${character.gender}</p>
                <p>Origen: ${character.origin.name}</p>
                <img src="${character.image}" alt="${character.name}">
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            const characterInfo = document.getElementById('characterInfo');
            characterInfo.innerHTML = '<p>Personaje no encontrado</p>';
        });
}
