import pool from '../db/mysql'

export const getFavorites = async (req, res) => {
  await pool.query(`SELECT fa.ID  as idFavorite, fi.Name, fi.Type, fi.IdGenre, fi.Year
  FROM favorites fa
  LEFT JOIN film fi on fi.ID = fa.IdFild`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json(results)
  })
}

export const postFavorites = async (req, res) => {
  const { IdFild } = req.body
  if(!IdFild || IdFild ===''){
    res.status(421).json({message:'Alguno de datos son nulos o no fueron proporcionados.'})
    return
  }
  await pool.query(`INSERT INTO FAVORITES (IdFild) values (${IdFild})`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json({message:'Se ha guardado con exito el film favorito',results})
  })
}

export const deleteFavorites = async (req, res) => {
  const ID = req.params.id
  await pool.query(`DELETE FROM FAVORITES WHERE ID=${ID}`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json({message:'El film favorito ha sido eliminado exitosamente',results})
  })
}