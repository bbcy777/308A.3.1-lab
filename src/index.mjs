// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

// async function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3
//   };
//   try {
//     const dbValue = await central(id);
//     const dbWeb = await dbs[dbValue](id);
//     const userData = await vault(id);
//     return {
//       id: id,
//       name: userData.name,
//       username: dbWeb.username,
//       email: userData.email,
//       address: userData.address,
//       phone: userData.phone,
//       website: dbWeb.website,
//       company: dbWeb.company,
//     }
//   } catch(error) {
//       return Promise.reject(`Error: ${error}`)
//   }  
// }

// function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3
//   };
//   return central(id)
//     .then((dbValue) => {
//       return dbs[dbValue](id);
//     })
//     .then((dbWeb) => {
//       return vault(id)
//         .then((userData) => {
//           return {
//             id: id,
//             name: userData.name,
//             username: dbWeb.username,
//             email: userData.email,
//             address: userData.address,
//             phone: userData.phone,
//             website: dbWeb.website,
//             company: dbWeb.company,
//           }
//         })
//     })
//     .catch(error => {
//       return Promise.reject(`Error: ${error}`);
//     });
// }

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  
  const promises = [
    central(id).then((dbValue) => dbs[dbValue](id)),
    vault(id),
  ];
 
  return Promise.all(promises)
    .then(([dbWeb, userData]) => {
      return {
        id: id,
        name: userData.name,
        username: dbWeb.username,
        email: userData.email,
        address: userData.address,
        phone: userData.phone,
        website: dbWeb.website,
        company: dbWeb.company,
      };
    })
    .catch(error => {
      return Promise.reject(`Error: ${error}`);
    });
}

getUserData(8)
  .then(result => {
    console.log('User Data:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//https://www.canva.com/design/DAFyR810Wik/view
//https://ps-react-curriculum.herokuapp.com/308A/3/lesson/