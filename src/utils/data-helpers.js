import { EXTERNAL_ID } from '../constants/grid-orders-data';

/**
 * @param {Array} target
 * @param {Array} source
 * @return {Array}
 */
export function replaceById({ target, source }) {
  const payloadById = collectionById(source);

  return target.map(item => {
    const payloadItem = payloadById[item[EXTERNAL_ID]];
    return payloadItem || item;
  });
}

/**
 * @param {Array} source
 * @param {string} key
 * @return {Object}
 */
export function collectionById(source, key = EXTERNAL_ID) {
  return source.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
}
