import pool from '../db/mysql'

export const getFavorites = async (req, res) => {
  await pool.query('SELECT * FROM FAVORITES', function(error, results){
    if(error){
      throw error;
      res.json(results)
    }
  })
}

export const postFavorites = async (req, res) => {
  const { Name, Director, IdGenre, Descripcion, Type, Year, Review, Score } = req.body
  await pool.query(`INSERT INTO FAVORITES (Name, Director, IdGenre, Descripcion, Type, Year, Review, Score, Director) 
  values ('${Name}','${Director}','${IdGenre}','${Descripcion}','${Type}','${Year}','${Review}','${Score}')`, function(error, results){
    if(error){
      throw error;
      res.json(results)
    }
  })
}

export const deleteFavorites = async (req, res) => {
  const { ID } = req.body
  await pool.query(`DELETE FROM FAVORITES WHERE =${ID}`, function(error, results){
    if(error){
      throw error;
      res.json(results)
    }
  })
}