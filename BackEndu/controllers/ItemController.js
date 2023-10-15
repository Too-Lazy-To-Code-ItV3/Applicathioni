const Item = require("../models/Item");

exports.AllItems = async (req, res) => {
    try {
        const Itemes = await Item.find();
        res.status(200).json(Itemes);

    } catch (error) {
        res.status(500).json(error);
    }

}

exports.deleteItem = async (req, res) => {
    try {
        const ItemId = req.params.id;
        console.log("ItemId", ItemId);

        const deletedItem = await Item.findOneAndDelete({ _id: ItemId })
            .then(() => {
                res.status(204).json({ message: "Item deleted with success" })
            }
            )

    } catch (error) {
        res.status(500).json(error)

    }
}

exports.editItem = async (req, res) => {
    try {
        const updatedItemData = req.body; 
        const ItemId = req.params.id;
        const updatedItem = await Item.findByIdAndUpdate(ItemId, updatedItemData, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        console.log("Updated Item: ", updatedItem);
        res.status(200).json(updatedItem);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.addItem = async (req, res) => {

    try {
        const item = req.body;
        console.log("Item body", item);

        const newItem = await Item.create(item)
        res.status(201).json(newItem);


    } catch (error) {
        res.status(500).json(error);


    }



}

exports.getItemById = async (req, res) => {
    try {
        const leItem = await Item.findById(req.params.id);

        if (!leItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        console.log("Item: ", leItem);
        res.status(200).json(leItem);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


