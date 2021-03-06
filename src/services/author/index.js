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
            const { name, surname, avatar } = req.body
            const fields = Object.keys(req.body)
                .map(key => `${key}='${req.body[key]}'`)
                .join(",")

            const query = `UPDATE authors SET ${fields} WHERE id=${req.params.authorId} RETURNING *`
            const data = await db.query(query)

            res.send(data.rows[0])
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .delete( async (req, res, next) => {
        try {
            const query = `DELETE FROM authors WHERE id=${req.params.authorId}`
            const data = await db.query(query)

            if(data.rowCount > 0) {
                res.send(`Author successfully deleted!`)
            } else {
                res.status(404).send('Author Not Found!')
            }
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    
export default router