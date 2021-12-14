const db = require('../db');

async function getSpiele() {
  const { rows } = await db.query('select * from spiele');
  return {
    code: 200,
    data: rows,
  };
}

async function getSpiel(id) {
  const { rows } = await db.query('select * from spiele where id=$1', [id]);
  return {
    code: 200,
    data: rows,
  };
}

async function deleteSpiel(id) {
  await db.query('DELETE from spiele where id= $1', [id]);
  return getSpiele();
}

async function updateSpiel(id, data) {
  // let keys = [];
  // let d = [];
  // for (const key in data) {
  //   keys.push(key)
  //   d.push(data[key]);
  // }
  // const keylist = keys.join(', ');
  // const valuelist = d.join(', ');
  // console.log(keylist, keys, id, valuelist);
  const { rows } = await db.query(
    `UPDATE spiele SET (stadion ,datum ,zeit ,heim ,auswaerts ) =($1, $2, $3, $4,$5) where id= $6 returning *`,
    [data.stadion, data.datum, data.zeit, data.heim, data.auswaerts,id],
  );
  return {
    code: 200,
    data: rows,
  };
}

async function addSpiel(data) {
  const { rows } = await db.query(
    'INSERT INTO Spiele (stadion ,datum ,zeit ,heim ,auswaerts ) VALUES($1, $2, $3, $4,$5) returning *',
    [data.stadion, data.datum, data.zeit, data.heim, data.auswaerts],
  );
  return {
    code: 200,
    data: rows,
  };
}

module.exports = { getSpiele, deleteSpiel, getSpiel, addSpiel,updateSpiel };
