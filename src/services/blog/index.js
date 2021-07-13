import { Router } from 'express'
import db from '../../utils/db/index.js'

const router = Router()

router.route('/')
    .get( async (req, res, next) => {
        try {
            const query = 'SELECT * FROM blogPosts ORDER BY created_at DESC'
            const data = await db.query(query)

            res.send(data.rows)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .post( async (req, res, next) => {
        try {
            const { category, title, cover, read_time_value, read_time_unit, author_id, content } = req.body
            const query = `INSERT INTO blogPosts (category, title, cover, read_time_value, read_time_unit, author_id, content) VALUES('${category}', '${title}', '${cover}', '${read_time_value}', '${read_time_unit}', '${author_id}', '${content}') RETURNING *`
            const data = await db.query(query)

            res.send(data.rows[0])
        } catch (error) {
            console.log(error)
            next(error)
        }
    })

router.route('/:postId')
    .get( async (req, res, next) => {
        try {
            const query = `SELECT * FROM blogPosts WHERE id=${req.params.postId}`
            const data = await db.query(query)

            res.send(data.rows[0])
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .put( async (req, res, next) => {
        try {
            const { category, title, cover, read_time_value, read_time_unit, author_id, content } = req.body
            const fields = Object.keys(req.body)
                .map(key => `${key}='${req.body[key]}'`)
                .join(",")

            const query = `UPDATE blogPosts SET ${fields} WHERE id=${req.params.postId} RETURNING *`
            const data = await db.query(query)

            res.send(data.rows[0])
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