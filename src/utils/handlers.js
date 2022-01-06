// MANAGING FOCUS STYLE ACCORDING TO NAVIGATION TYPE : //////////////////////////
// KEYBOARD OR MOUSE

var head = document.head || document.getElementsByTagName('head')[0];
var accessStyles = head.appendChild(document.createElement('style'));
// console.log(accessStyles);

/**
 * eventListener mouse navigation : discard box-shadow
 * @param   {string}  mousedown  [detects mouse navigation]
 * @return  {string}  css        {box-shadow:none !important}
 */
document.addEventListener('mousedown', () => {
  accessStyles.innerHTML = '* {box-shadow:none !important}';
});

/**
 * eventListener keydown navigation : active box-shadow
 * @param   {string}  keydown  [detects keydown navigation]
 * @param   {boolean}  e       [event is tab key || shift tab key ? y/n]
 * @return  {string}  css      ["" no content to set the default one]
 */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' || e.shiftKey) accessStyles.innerHTML = '';
});

// GETTING HTML ELEMENT(S) /////////////////////////////////////////////////////

/**
 * Get an element by its id
 * @param   {string}  id    [element identifier]
 * @return  {node}    html   [collection]
 */
export const getElement = (id) => {
  return document.getElementById(id);
};

/**
 * Get many elements by their common classname
 * @param   {string}  className  [element className]
 * @return  {object}  html       [nodes collection]
 */
export const getElements = (className) => {
  return [...document.getElementsByClassName(className)];
};

/**
 * Get many elements by their common classname
 * @param   {[type]}  tag    [tag description]
 * @return  {object}  html   [nodes collection]
 */
export const getTags = (tag) => {
  return [...document.getElementsByTagName(tag)];
};

/**
 * Get many nested elements by their common tag
 *
 * @param   {string}  tag1   [tag1 name]
 * @param   {number}  index  [index]
 * @param   {string}  tag2   [tag2 name]
 *
 * @return  {object}  html   [nodes collection]
 */
export const getNestedTags = (tag1, index, tag2) => {
  return [
    ...document.getElementsByTagName(tag1)[index].getElementsByTagName(tag2),
  ];
};

// SETTING MULTIPLE ATTRIBUTES for html elements ///////////////////////////////
/**
 * Set multiple attributes
 * @param   {node}    element       [html]
 * @param   {string}  attributes    [attributes names]
 * @return  {object}                [element attributes]
 */
export const setAttributes = (element, attributes) => {
  for (var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};
