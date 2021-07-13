import { Router } from 'express'
import db from '../../utils/db/index.js'

const router = Router()

router.route('/')
    .get( async (req, res, next) => {
        try {
            const query = 'SELECT * FROM authors ORDER BY created_at DESC'
            const data = await db.query(query)

            res.send(data.rows)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .post( async (req, res, next) => {
        try {
            const { name, surname, avatar } = req.body
            const query = `INSERT INTO authors ( name, surname, avatar ) VALUES ( '${name}', '${surname}', '${avatar}' ) RETURNING *`
            const data = await db.query(query)

            res.send(data.rows[0])
        } catch (error) {
            console.log(error)
            next(error)
        }
    })

router.route('/:authorId')
    .get( async (req, res, next) => {
        try {
            const query = `SELECT * FROM authors WHERE id=${req.params.authorId}`
            const data = await db.query(query)

            res.send(data.rows[0])
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .put( async (req, res, next) => {
        try {
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .delete( async (req, res, next) => {
        try {
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    
export default router