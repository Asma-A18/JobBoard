const {check, validationResult} = require('express-validator')

exports.validateAnnonceInput = () =>
    
    [check('title', 'ref field is required !').notEmpty(),
    check('field', 'this field is required !').notEmpty(),
    check('description', 'this field is required !').notEmpty(),
    check('regime', 'this field is required !').notEmpty(),
    check('pay', 'this field is required !').notEmpty()]

exports.validator = (req, res, next) =>{
    const errors = validationResult(req)
    errors.isEmpty() ? next(): res.status(400).json({errors: errors.mapped()})
}
