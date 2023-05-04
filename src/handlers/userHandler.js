import { userService } from '../services/userService';

export const userHandler = {
    insertUser(newUser) {
        if (!newUser) {
            return;
        }

        let newUserRequestModel = {
               
                "email": newUser.email,
                "password": newUser.password,

        }
        console.log(newUserRequestModel)
        return userService.insertUser(newUserRequestModel);

    }
}