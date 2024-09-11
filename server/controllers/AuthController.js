const UserModel = require('../models/UserModel')
const registerUser = async (req, res) => {
    try {
        const { course, subject, firstname, lastname, guardian, gender, category, nationality, mobile, country, city, email, state, address } = req.body;

        if (!course || !subject || !firstname || !lastname || !guardian || !gender || !gender || !category || !nationality || !mobile || !country || !city || !email || !state || !address) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }


        const user = await UserModel.create({
            course: course,
            subject: subject,
            firstname: firstname,
            lastname: lastname,
            guardian: guardian,
            gender: gender,
            category: category,
            nationality: nationality,
            mobile: mobile,
            country: country,
            city: city,
            email: email,
            state: state,
            address: address
        })
        return res.status(200).send({
            success: true,
            message: "User created successfully",
            user
        })


    } catch (err) {
        return res.status(500).send({
            success: false,
            error: err
        })
    }


}
module.exports = {
    registerUser
}