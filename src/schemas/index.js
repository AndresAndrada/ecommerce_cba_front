import * as yup from 'yup'

// const usernameMatch =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.*\$%\^&\*])(?=.{8,})/;
// const usernameSignUp = /^(\S+$)/g;
// const minPriceVerify = /^[0-9]*$/;
// const date = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
// const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.*%&@\$%\^&\*])(?=.{8,})/
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.*%&@$%^&*])(?=.{8,})/

export const LoginScheme = yup.object().shape({
    email: yup.string().max(255).required('Ingrese el correo'),
    // .matches(
    //   /^[^@]+@[^@]+\.[^@]+$/,
    //   "El correo debe contener '@' antes del '.'"
    // ),

    password: yup
        .string()
        .required('Ingrese su contraseña')
        .matches(
            passwordRules,
            'Debe contener 8 catacteres, una mayuscula, una minuscula, un número y una caracter especial.'
        ),
})

export const RegisterScheme = yup.object().shape({
    userFullName: yup
        .string()
        .min(5, 'Debe contener más de 5 caracteres')
        .max(65, 'Máximo de 65 caracteres')
        .required('Ingrese nombre completo'),

    email: yup
        .string()
        .max(255)
        .required('Ingrese el correo')
        .matches(
            /^[^@]+@[^@]+\.[^@]+$/,
            "El correo debe contener '@' antes del '.'"
        ),

    password: yup
        .string()
        .required('Ingrese su contraseña')
        .matches(
            passwordRules,
            'Debe contener 8 catacteres, una mayuscula, una minuscula, un número y una caracter especial.'
        ),
})

export const AddCompany = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Debe contener más de 5 caracteres')
        .max(65, 'Máximo de 65 caracteres')
        .required('Ingrese nombre completo'),

    email: yup
        .string()
        .max(255)
        .required('Ingrese el correo')
        .matches(
            /^[^@]+@[^@]+\.[^@]+$/,
            "El correo debe contener '@' antes del '.'"
        ),

    password: yup
        .string()
        .required('Ingrese su contraseña')
        .matches(
            passwordRules,
            'Debe contener 8 catacteres, una mayuscula, una minuscula, un número y una caracter especial.'
        ),
})

export const DashBoardeScheme = yup.object().shape({
    fullName: yup
        .string()
        .min(5, 'Debe contener más de 5 caracteres')
        .max(65, 'Máximo de 65 caracteres')
        .required('Ingrese nombre completo'),

    document: yup
        .string()
        .min(7, 'Mínimo 7 caracteres')
        .max(10, 'Máximo 10 caracteres')
        .required('Ingrese documento empresarial'),

    email: yup
        .string()
        .max(255)
        .required('Ingrese el correo')
        .matches(
            /^[^@]+@[^@]+\.[^@]+$/,
            "El correo debe contener '@' antes del '.'"
        ),

    phone: yup
        .string()
        .min(9, 'Mínimo 10 caracteres')
        .max(11, 'Máximo 10 caracteres')
        .required('Ingrese el numero de teleforo'),

    title: yup
        .string()
        .min(5, 'Mínimo 5 caracteres')
        .max(100, 'Máximo de 100 caracteres')
        .required('Ingrese nombre completo'),

    endpoint: yup
        .string()
        .min(5, 'Mínimo 5 caracteres')
        .required('Ingrese nombre completo'),

    keyPrivate: yup.string().required('Ingrese nombre completo'),

    keyPublic: yup.string().required('Ingrese nombre completo'),
})