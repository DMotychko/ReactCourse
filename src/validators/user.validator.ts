import Joi from 'joi'

export const userValidator = Joi.object({
    userId: Joi.number().required().min(1).max(999).messages({
        'any.required': 'field is required',
        'number.min': 'ID must be at least 1',
        'number.max': 'ID must be less than 999',
        'number.base': 'field is empty'
    }),
    id: Joi.number().required().min(1).max(999).messages({
        'any.required': 'field is required',
        'number.min': 'ID must be at least 1',
        'number.max': 'ID must be less than 1',
        'number.base': 'field is empty'
    }),
    title: Joi.string().required().min(5).pattern(/^[a-zA-Z]+$/).messages({
        'string.pattern.base': 'title shouldn`t have numbers or symbols',
        'string.min': 'title must have min 5 letters',
        'any.required': 'field is required',
        'string.empty': 'field is empty'
    }),
    body: Joi.string().required().min(5).messages({
        'string.min': 'title must have min 5 letters',
        'any.required': 'field is required',
        'string.empty': 'field is empty'
    })
});