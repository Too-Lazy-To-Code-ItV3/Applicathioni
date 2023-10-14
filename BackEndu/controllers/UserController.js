const User = require("../models/User");

exports.AllUsers = async (req, res) => {
    try {
        const Useres = await User.find();
        res.status(200).json(Useres);

    } catch (error) {
        res.status(500).json(error);
    }

}

exports.deleteUser = async (req, res) => {
    try {
        const UserId = req.params.id;
        console.log("UserId", UserId);

        const deletedUser = await User.findOneAndDelete({ _id: UserId })
            .then(() => {
                res.status(204).json({ message: "User deleted with success" })
            }
            )

    } catch (error) {
        res.status(500).json(error)

    }
}

exports.editUser = async (req, res) => {
    try {
        const updatedUserData = req.body; 
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Updated User: ", updatedUser);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.addUser = async (req, res) => {

    try {
        const user = req.body;
        console.log("User body", user);

        const newUser = await User.create(user);
        res.status(201).json(newUser);


    } catch (error) {
        res.status(500).json(error);


    }



}

exports.getUserById = async (req, res) => {
    try {
        const leUser = await User.findById(req.params.id);

        if (!leUser) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User: ", leUser);
        res.status(200).json(leUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ message: "Authentication failed. Invalid email or password." });
        }

        res.status(200).json({ message: "Authentication successful" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

