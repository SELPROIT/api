const { helpEmail } = require("../../controllers/post/email_help")


const emailHelp = async (req, res) => {
    const { name, help } = req.body
    try {
        await helpEmail(name, help)
        res.send('Email enviado exitosamente!')
    } catch (error) {
        res.json({ error: error.message })
    }
}

module.exports = { emailHelp }