/*
Controller for managing authentication-related operations such as user login and logout.
Uncomment and customize database operations as needed for user authentication.
*/

import { typeCredentialParams } from "../types";



// Login User
export const login = async ({ req, res, next }: typeCredentialParams) => {
    try {
        // const { email, password } = req.body;

        // // If email field is empty - RETURN
        // if (!email) {
        //     return next(new Error("Please Enter Email to login"))
        // };

        // // If password field is empty - RETURN
        // if (!password) {
        //     return next(new Error("Please Enter Password to login"))
        // };

        // Checks if user exist in DB - based on email
        // const user = await Schema.findOne({ email });

        // If user does not exist in DB - RETURN 
        // if (!user) {
        //     return next(new Error("Email not Found, Please Enter Correct Email to login"))
        // };

        // Checks if user's entered password is correct or not
        // const passMatched = await bcrypt.compare(password, user.password)

        // If Password is incorrect - RETURN 
        // if (!passMatched) {
        //     return next(new Error("Password not matched, Please Enter correct Password to login"))
        // }

        // JWT tokens
        // const token = jwt.sign({
        //     // Valid user Object
        //     user
        // },
        //     //   JWT Secret Key
        //     process.env.JWT_SECRET_KEY,
        //     //   Token Expiry
        //     { expiresIn: '1h' }
        // );
        // sets cookie in Cookies 
        // res.cookie("token", token, { httpOnly: true }).json({ user })
        res.json({
            message: "Logged In Successfully"
        })

    } catch (error) {
        next(error);
    }
}

// Logout User
export const logout = async ({ req, res, next }: typeCredentialParams) => {
    // const { token } = req.cookies
    // // If User Already Logged out - RETURN
    // if (!token) {
    //     return res.json({
    //         message: "Already Logged out"
    //     })
    // }
    // // Logout User and Clear Cookies
    // res.clearCookie("token", { httpOnly: true }).json({
    //     message: "Logged Out Successfully"
    // })
    res.json({
        message: "Logged Out Successfully"
    })
}