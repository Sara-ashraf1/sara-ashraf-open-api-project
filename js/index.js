
document.getElementById('loadPlaces').addEventListener('click', () => {
fetch('https://api.artic.edu/api/v1/places')
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
.then(data => {
    const places = data.data;
    console.log(places);

    const placeSection = document.getElementById('places');
    const placeList = placeSection.querySelector('ul');

    for (let i = 0; i < places.length; i++) {
        const place = document.createElement('li');
        place.innerText = places[i].title;
        placeList.appendChild(place);
    }
})
.catch(error => console.error(error));
})


document.getElementById('loadAgents').addEventListener('click', () => {
fetch('https://api.artic.edu/api/v1/agents')
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
.then(data => {
    const agents = data.data;
    console.log(agents);

    const agentSection = document.getElementById('agents');
    const agentList = agentSection.querySelector('ul');

    for (let i = 0; i < agents.length; i++) {
        const agent = document.createElement('li');
        agent.innerText = agents[i].title;
        agentList.appendChild(agent);
    }
})
.catch(error => console.error(error));
})
