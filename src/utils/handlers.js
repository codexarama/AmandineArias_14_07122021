// MANAGING FOCUS STYLE
// ACCORDING TO NAVIGATION TYPE
// KEYBOARD OR MOUSE
var head = document.head || document.getElementsByTagName('head')[0];
var accessStyles = head.appendChild(document.createElement('style'));
// console.log(accessStyles);

// cancel focus effects if mouse navigation
document.addEventListener('mousedown', () => {
  accessStyles.innerHTML = '* {box-shadow:none !important}';
});
document.addEventListener('keydown', () => {
  accessStyles.innerHTML = '';
});

// GETTING HTML ELEMENT(S)
export const getElement = (id) => {
  return document.getElementById(id);
};

export const getElements = (className) => {
  return [...document.getElementsByClassName(className)];
};

// GETTING HTML NESTED TAGS
export const getTags = (tag1, index, tag2) => {
  return [...document.getElementsByTagName(tag1)[index].getElementsByTagName(tag2)];
};

// MANAGING SET MULTIPLE ATTRIBUTES
export const setAttributes = (element, attributes) => {
  for (var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};
