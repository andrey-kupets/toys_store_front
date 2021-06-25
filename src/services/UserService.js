// export const Userservice = () => {
//     const baseUrl = 'http://localhost:5000/users';
//     return fetch (baseUrl)
//         .then(r => r.json());
// };


export const UserService = () => {
    const baseUrl = 'http://localhost:5000/users';
    return fetch (baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
              name: "max3",
              email: "max@gmail.com",
              password: "max111",
              _products: [
                  {
                      _id: "60b231505d469ae5fefc2df0"

                  },
                  {
                      _id: "60b231505d469ae5fefc2df1"
                  },
                  {
                      _id: "60b231505d469ae5fefc2df1"
                  }
              ]
          }
        )
    })
      .then(r => r.json());
};
// (async () => {
//     const rawResponse = await fetch('https://httpbin.org/post', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({a: 1, b: 'Textual content'})
//     });
//     const content = await rawResponse.json();
//
//     console.log(content);
// })();
