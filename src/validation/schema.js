import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('A Pizza Name Is Required!')
    .min(2, 'name must be at least 2 characters'),
    sauce: yup
    .string()
    .oneOf(['Marinara', 'Ranch', 'BBQ'], 'Sauce Is Required'),
    extras: yup
    .string(),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'Size Is Required'),

    cheese: yup.boolean().notRequired(),
    pepperonie: yup.boolean().notRequired(),
    sausage: yup.boolean().notRequired(),
    onion: yup.boolean().notRequired(),
    pineapple: yup.boolean().notRequired(),
    greenPepper: yup.boolean().notRequired(),
    corn: yup.boolean().notRequired(),
})

export default schema