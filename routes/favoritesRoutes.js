import { Router } from 'express'
import * as favoritesController from '../controllers/favoritesController'

const router = Router()

router.get('/', favoritesController.getFavorites)
router.post('/', favoritesController.postFavorites)
router.delete('/:id', favoritesController.deleteFavorites)

export default router