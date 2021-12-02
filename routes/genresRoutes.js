import { Router } from 'express'
import * as genresController from '../controllers/genresController'

const router = Router()

router.get('/', genresController.getGenres)
router.post('/', genresController.postGenres)
router.delete('/:id', genresController.deleteGenres)

export default router