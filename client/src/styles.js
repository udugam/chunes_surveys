const styles = theme => ({
    container: {
        paddingTop: '40px',
    },
    button: {
        margin:'20px'
    },
    margin: {
        margin: theme.spacing.unit
    },
    textFieldLarge: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400+(theme.spacing.unit*2),
    }
})

module.exports = styles