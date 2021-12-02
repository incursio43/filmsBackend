import pool from '../db/mysql'

export const getFilms = async (req, res) => {
  await pool.query('SELECT * FROM FILMS', function(error, results){
    if(error){
      throw error;
      res.json(results)
    }
  })
}

export const postFilms = async (req, res) => {
  const { Name, Director, IdGenre, Descripcion, Type, Year, Review, Score } = req.body
  await pool.query(`INSERT INTO FILMS (Name, Director, IdGenre, Descripcion, Type, Year, Review, Score, Director) 
  values ('${Name}','${Director}','${IdGenre}','${Descripcion}','${Type}','${Year}','${Review}','${Score}')`, function(error, results){
    if(error){
      throw error;
      res.json(results)
    }
  })
}

export const putFilms = async (req, res) => {
  const { ID, Descripcion, Type, Year, Review, Score } = req.body
  await pool.query(`UPDATE FILMS SET  WHERE =${ID} SET Descripcion='${Descripcion}', Type='${Type}', Year='${Year}', Review='${Review}', Score=${Score} WHERE ID=${ID}`, function(error, results){
    if(error){
      throw error;
      res.json(results)
    }
  })
}

export const deleteFilms = async (req, res) => {
  const { ID } = req.body
  await pool.query(`DELETE FROM FILMS WHERE =${ID}`, function(error, results){
    if(error){
      throw error;
      res.json(results)
    }
  })
}