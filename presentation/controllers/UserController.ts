import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import Users from '../../domain/user/mocks/UserMock'

class UserController {

    createCustomer(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json( { errors: errors.mapped() } )
        }
        Users.push(req.body)
        res.send(200)
    }

    listCustomers(req: Request, res: Response, next: NextFunction) {
        res.status(200).send("Neat!")
    }
}

export default new UserController