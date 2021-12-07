import pool from '../db/mysql'

export const getFilms = async (req, res) => {
  await pool.query(`SELECT fi.ID, fi.Name, fi.Director, fi.IdGenre, fi.Description, fi.Type, fi.Year, fi.Review, fi.Score, fa.ID as isFavorite 
  FROM film fi 
  LEFT JOIN favorites fa ON fa.IdFild = fi.ID`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json(results)
  })
}

export const getFilm = async (req, res) => {
  const ID = req.params.id
  await pool.query(`SELECT fi.ID, fi.Name, fi.Director, fi.IdGenre, fi.Description, fi.Type, fi.Year, fi.Review, fi.Score, fa.ID as isFavorite 
  FROM film fi 
  LEFT JOIN favorites fa ON fa.IdFild = fi.ID 
  WHERE fi.ID = ${ID}`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json(results)
  })
}

export const postFilms = async (req, res) => {
  const { Name, Director, IdGenre, Description, Type, Year, Review, Score } = req.body
  if(Name === null || Name === '' || Director === null || Director === '' || IdGenre === null || IdGenre === '' || Type === null || Type === '' || Year === null || Year === ''){
    res.status(421).json({message:'Alguno de datos son nulos o no fueron proporcionados.'})
  }
  await pool.query(`INSERT INTO FILM (Name, Director, IdGenre, Description, Type, Year, Review, Score) 
  values ('${Name}','${Director}','${IdGenre}','${Description}','${Type}','${Year}','${Review}','${Score}')`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json({message:'Se ha guardado exitosamente el film', Name, Director, IdGenre, Type, Year, Description})
  })
}

export const putFilms = async (req, res) => {
  const ID = req.params.id
  const { Description, Type, Year, Review, Score } = req.body
  if(Type === null || Type === '' || Year === null || Year === ''){
    res.status(421).json({message:'Alguno de datos son nulos o no fueron proporcionados.'})
  }
  await pool.query(`UPDATE FILM SET Description='${Description}', Type='${Type}', Year='${Year}', Review='${Review}', Score=${Score} WHERE ID=${ID}`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json({message:'El film ha sido actualizado exitosamente.',results})
  })
}

export const deleteFilms = async (req, res) => {
  const ID = req.params.id
  await pool.query(`DELETE FROM FILM WHERE ID=${ID}`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json({message:'El film ha sido eliminado exitosamente',results})
  })
}