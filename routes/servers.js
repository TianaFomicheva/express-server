import {Router} from 'express'
import {getAll, create, remove} from '../controllers/servers.js'

const router = Router()

router.get('/api/servers', getAll)
router.post('/api/servers', create)
router.delete('/api/servers/:id', remove)

export default router