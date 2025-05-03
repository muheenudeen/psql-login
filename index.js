import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { router } from './src/routes/routes.js'
import dotenv from 'dotenv'
const PORT = process.env.PORT || 5000;

dotenv.config()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error', 'warn']
})


app.use(cors())
app.use('/api',router)

app.listen(PORT,()=>console.log(`server listening on ${PORT}`))

export default prisma;


