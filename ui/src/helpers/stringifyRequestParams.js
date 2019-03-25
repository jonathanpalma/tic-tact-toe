import qs from 'qs';

/**
 * @param {Object} defaultRequestParams
 * @param {Array.<string>} expectedParams
 * @param {Object} requestParams
 * @returns {string}                        URL
 */
const stringifyRequestParams = (
  requestParams,
  expectedParams,
  defaultRequestParams = {}
) => {
  let params = {};
  const inputParams = Object.assign(defaultRequestParams, requestParams);
  Object.keys(inputParams).forEach(key => {
    if (expectedParams.includes(key)) {
      params = { ...params, [key]: inputParams[key] };
    }
  });
  const values = qs.stringify(params);
  return values ? `?${values}` : '';
};

export default stringifyRequestParams;
