import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const contact = await Message.create(req.body);
    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get('/',async(req,res)=>{
    try {
        const contacts=await Message.find({})
        res.status(200).json(contacts)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default router;
