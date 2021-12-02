import express from 'express';
import cors from 'cors'
import genresRoutes from '../routes/genresRoutes'
// import filmsRoutes from '..'
// import favoritesRoutes from '..'


const app = express();

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.json('welcome');
});

app.use('/genres', genresRoutes)
// app.use('/favorites', favoritesRoutes)
// app.use('/films', filmsRoutes)

export default app