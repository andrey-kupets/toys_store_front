export default () => {
    // const baseUrl = 'http://localhost:5000/users';
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';
    return fetch (baseUrl)
        .then(r => r.json())
}
