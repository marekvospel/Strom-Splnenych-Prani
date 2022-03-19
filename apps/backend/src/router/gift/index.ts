import { Router } from 'express'
import { body, param } from 'express-validator'
import { createGift } from '../../controllers/gift/create'
import { getGift } from '../../controllers/gift/get'
import { deleteGift } from '../../controllers/gift/delete'
import { giveGift } from '../../controllers/gift/give'

export const giftRouter = Router()

giftRouter.post('/',
  body('name').isString(),
  createGift)

giftRouter.get('/:id',
  param('id').isUUID(),
  getGift)

giftRouter.delete('/:id',
  param('id').isUUID(),
  deleteGift)

giftRouter.post('/:id/give',
  param('id').isUUID(),
  body('name').isString(),
  body('email').isEmail(),
  body('phone').isMobilePhone('any'),
  body('street').isString(),
  body('city').isString(),
  body('zip').isNumeric(),
  giveGift)