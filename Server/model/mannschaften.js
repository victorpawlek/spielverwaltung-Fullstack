const db = require('../db');

async function getMannschaften() {
  const { rows } = await db.query('select * from mannschaften');
  return {
    code: 200,
    data: rows,
  };
}

async function getMannschaft(id) {
  const { rows } = await db.query('select * from mannschaften where id=$1', [id]);
  return {
    code: 200,
    data: rows,
  };
}

async function deleteMannschaft(id) {
  await db.query('DELETE from mannschaften where id= $1', [id]);
  return getMannschaften();
}

async function updateMannschaft(id, data) {
  let keys = [];
  let d = [];
  for (const key in data) {
    keys.push(key)
    d.push(data[key]);
  }
  const { rows } = await db.query('UPDATE mannschaften SET ($1) = $2 where id= $3 returning *', [
    keys.join(', '),
    d.join(','),
    id,
  ]);
  return {
    code: 200,
    data: rows,
  };
}

async function addMannschaft(data) {
  const { rows } = await db.query(
    'INSERT INTO mannschaften (name,liga ) VALUES($1, $2) returning *',
    [data.name,data.liga],
  );
  return {
    code: 200,
    data: rows,
  };
}

module.exports = { getMannschaften, deleteMannschaft, getMannschaft, addMannschaft,updateMannschaft };
