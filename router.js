import Router from 'express'
import Controller from "./Controller.js";

const router = new Router()

const operators = [
    {
        id: 1,
        name: 'Mts',
        imageSrc: 'https://tadviser.ru/images/b/bf/MTS_Logo_rus_2r.png',
    },
    {
        id: 2,
        name: 'Megaphone',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/MegaFon_sign%2Blogo_horiz_green_RU_%28RGB%29.svg/2560px-MegaFon_sign%2Blogo_horiz_green_RU_%28RGB%29.svg.png',
    },
    {
        id: 3,
        name: 'Biline',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/BeeLine_logo.png'
    }
];


router.get('/operators', async (req, res) => {
    res.status(200).json(operators)
})
router.get('/operators/:id', async (req, res) => {

    const {id} = req.params
    console.log(id)
    const operator = operators.find(operator => operator.id == id)
    console.log(operator)
    res.status(200).json(operator)
})

export default router;