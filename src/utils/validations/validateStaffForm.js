import * as Yup from 'yup';
import {yupValidateSync} from "../yup";

export const validateFirstName = (val) => {
    if (val !== "") {
        return undefined;
    }
    let validationSchema = Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
    return yupValidateSync(val, validationSchema);
}

export const validateLastName = (val) => {
    if (val !== "") {
        return undefined;
    }
    let validationSchema = Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
    return yupValidateSync(val, validationSchema);
}
