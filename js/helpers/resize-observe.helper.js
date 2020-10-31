export const observeDOMNode = (DOMNode, callback) => {
  if (!(DOMNode instanceof HTMLElement)) {
    throw new Error('observeDOMNode helper: "DOMNode" should be an HTMLElement');
  }
  if (typeof callback !== 'function') {
    throw new Error('observeDOMNode helper: "callback" should be an Function');
  }
  const resizeObserver = new ResizeObserver(() => {
    callback();
  });
  resizeObserver.observe(DOMNode);
};
