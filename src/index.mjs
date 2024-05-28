// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  try {

  }
  catch (error) {
    console.log(`${error}`)
  }
  const dbValue = await central(id);
  const dbWeb = dbs[dbValue](id);
  const userData = await vault(id);
  return {dbWeb, userData}


  
  
}

getUserData(4);

//https://www.canva.com/design/DAFyR810Wik/view
//https://ps-react-curriculum.herokuapp.com/308A/3/lesson/