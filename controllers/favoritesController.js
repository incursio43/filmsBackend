import pool from '../db/mysql'

export const getFavorites = async (req, res) => {
  await pool.query('SELECT * FROM FAVORITES', function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}

export const postFavorites = async (req, res) => {
  console.log(req.body)
  const { IdFild } = req.body
  await pool.query(`INSERT INTO FAVORITES (IdFild) values (${IdFild})`, function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}

export const deleteFavorites = async (req, res) => {
  const ID = req.params.id
  await pool.query(`DELETE FROM FAVORITES WHERE ID=${ID}`, function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}