
fetch('https://api.github.com/users/Sara-ashraf1/repos')
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json()
})
.then(data => {
    const repositories = data;
    console.log(repositories);
}
)
.catch(error => console.error(error));