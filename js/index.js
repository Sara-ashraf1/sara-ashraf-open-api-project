
fetch('https://api.artic.edu/api/v1/artworks')
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
.then(data => {
    const artworks = data.data;
    console.log(artworks);

    const artSection = document.getElementById('artwork');
    const artList = artSection.querySelector('ul');

    for (let i = 0; i < artworks.length; i++) {
        const art = document.createElement('li');
        art.innerText = artworks[i].title;
        artList.appendChild(art);
    }
}
)
.catch(error => console.error(error));


fetch('https://api.artic.edu/api/v1/agents?limit=2')
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
.then(data => {
    const agents = data;
    console.log(agents);

    const agentSection = document.getElementById('agents');
    const agentList = agentSection.querySelector('ul');

    for (let i = 0; i < agents.length; i++) {
        const agent = document.createElement('li');
        agent.innerText = agents[i].title;
        agentList.appendChild(agent);
    }
}
)
.catch(error => console.error(error));
