import pool from '../db/mysql'

export const getGenres = async (req, res) => {
  await pool.query('SELECT * FROM GENRE', function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}

export const postGenres = async (req, res) => {
  const { Name } = req.body
  await pool.query(`INSERT INTO GENRE (Name) values ('${Name}')`, function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}

export const deleteGenres = async (req, res) => {
  const ID = req.params.id
  await pool.query(`DELETE FROM GENRE WHERE ID=${ID}`, function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}