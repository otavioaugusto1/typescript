import { Request, Response } from "express"
import createUser
 from "./services/CreateUser";
export function helloWolrd(request:Request,response:Response){
    const user = createUser({
        email: "otavio.com.br",
        password: '123456',
        techs: ['NodeJS',
        'ReactJS',
        "React Native",
         {title: 'javascript',experience: 100}
        ]
    })
    return response.json({message:'Hello,world.'});
}