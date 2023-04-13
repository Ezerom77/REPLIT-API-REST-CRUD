import mongoose from 'mongoose'
import {MONGODB_URI} from '../config.js'

export async function connectToDB() {
  try{
    await mongoose.connect(MONGODB_URI)
console.log('connected to DDBB')
  } catch (error) {
    console.error(error)
  }
}
