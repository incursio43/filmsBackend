import pool from '../db/mysql'

export const getGenres = async (req, res) => {
  await pool.query('SELECT * FROM GENRE', function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json(results)
  })
}

export const postGenres = async (req, res) => {
  const { Name } = req.body
  if(!Name || Name === ''){
    res.status(421).json({message:'Alguno de datos son nulos o no fueron proporcionados.'})
    return
  }
  await pool.query(`INSERT INTO GENRE (Name) values ('${Name}')`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(201).json({message:'Se ha guardo con exito el genre',results})
  })
}

export const deleteGenres = async (req, res) => {
  const ID = req.params.id
  await pool.query(`DELETE FROM GENRE WHERE ID=${ID}`, function(error, results){
    if(error){
      res.status(400).json({message:'Hubo un error al procesar la peticion', error})
      throw error;
    }
    res.status(210).json({message:'Se ha eliminado el registro exitosamente',results})
  })
}