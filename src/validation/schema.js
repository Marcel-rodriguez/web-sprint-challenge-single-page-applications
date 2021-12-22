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

    cheese: yup.boolean(),
    pepperonie: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
    pineapple: yup.boolean(),
    greenPepper: yup.boolean(),
    corn: yup.boolean(),
})

export default schema