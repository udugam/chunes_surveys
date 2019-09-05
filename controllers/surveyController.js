module.exports = {
    submit: function(req,res) {
        console.log(req.body)
        res.json(true)
    }
}