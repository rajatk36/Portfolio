import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());              
app.use(express.json());      

// ROUTES
app.use('/contact', contactRoutes);

app.get('/zic',(req,res)=>{
  res.send('zac');
});
//mongo
mongoose.set("strictQuery",false)
mongoose
  .connect(process.env.MONGO_URI, { tlsAllowInvalidCertificates: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error(' MongoDB error:', err));
