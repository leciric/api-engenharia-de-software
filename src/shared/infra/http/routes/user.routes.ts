import { Router } from 'express';


const userRoutes = Router();

userRoutes.post('/signup', (req, res) => {


    console.log(req.body);


    res.status(201).send();

});

export { userRoutes };

