import pool from '../db/mysql'

export const getFilms = async (req, res) => {
  await pool.query('SELECT * FROM FILM', function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}

export const getFilm = async (req, res) => {
  const ID = req.params.id
  await pool.query(`SELECT * FROM FILM WHERE ID = ${ID}`, function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}

export const postFilms = async (req, res) => {
  const { Name, Director, IdGenre, Description, Type, Year, Review, Score } = req.body
  await pool.query(`INSERT INTO FILM (Name, Director, IdGenre, Description, Type, Year, Review, Score) 
  values ('${Name}','${Director}','${IdGenre}','${Description}','${Type}','${Year}','${Review}','${Score}')`, function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}

export const putFilms = async (req, res) => {
  const ID = req.params.id
  const { Description, Type, Year, Review, Score } = req.body
  await pool.query(`UPDATE FILM SET Description='${Description}', Type='${Type}', Year='${Year}', Review='${Review}', Score=${Score} WHERE ID=${ID}`, function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}

export const deleteFilms = async (req, res) => {
  const ID = req.params.id
  await pool.query(`DELETE FROM FILM WHERE ID=${ID}`, function(error, results){
    if(error){
      throw error;
    }
    res.json(results)
  })
}