import _debounce from 'lodash/debounce';

// Known issue: in case you're leaving the page where DOMNode is placed the
// callback will be called once. So if your callback contains some logic that
// can break the application - add additional checks
export const observeDOMNode = (DOMNode, callback) => {
  if (!(DOMNode instanceof HTMLElement)) {
    throw new Error('observeDOMNode helper: "DOMNode" should be an HTMLElement');
  }
  if (typeof callback !== 'function') {
    throw new Error('observeDOMNode helper: "callback" should be an Function');
  }
  const resizeObserver = new ResizeObserver(
    _debounce(callback, 200),
  );
  resizeObserver.observe(DOMNode);
};
