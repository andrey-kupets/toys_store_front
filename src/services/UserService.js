export const Userservice = () => {
    const baseUrl = 'http://localhost:5000/users';
    return fetch (baseUrl)
        .then(r => r.json());
};
