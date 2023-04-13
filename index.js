import app from './app.js'
import { connectToDB } from './utils/mongoose.mjs'

async function main() {
  await connectToDB()
  app.listen(3000)
  console.log('server running on port 3000')
}
main()
