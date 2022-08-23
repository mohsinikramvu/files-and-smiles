export const yupValidateSync = (val, YupValidationSchema) => {
    let error;
    try {
        YupValidationSchema.validateSync(val);
    } catch (e) {
        error = e.errors[0];
    }
    return error;
}

