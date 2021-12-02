import { Router } from 'express'
import * as filmsController from '../controllers/filmsController'

const router = Router()

router.get('/', filmsController.getFilms)
router.get('/:id', filmsController.getFilm)
router.post('/', filmsController.postFilms)
router.put('/:id', filmsController.putFilms)
router.delete('/:id', filmsController.deleteFilms)

export default router