import { omitBy, isEmpty, isString, isNull, isUndefined } from 'lodash';
export const removeEmptyValues = (
    dataObj,
    // options = {
    //   emptyStrings: false,
    //   nullVals: false,
    //   undefinedVals: false,
    //   emptyArrays: false,
    // },
) => {
    // console.log(options);
    // const { emptyStrings, nullVals, undefinedVals, emptyArrays, } = options;
    // console.log(options);
    // console.log(emptyStrings, nullVals, undefinedVals, emptyArrays);
    let result = dataObj;
    // if (emptyStrings) {
    result = omitBy(result, v => isString(v) && isEmpty(v.trim()));
    // }
    // if (nullVals) {
    result = omitBy(result, isNull);
    // }
    // if (undefinedVals) {
    result = omitBy(result, isUndefined);
    // }
    // if (emptyArrays) {
    result = omitBy(result, v => Array.isArray(v) && isEmpty(v));
    // }
    return result;
};