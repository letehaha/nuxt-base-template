export const observeDOMNode = (DOMNode, callback) => {
  const resizeObserver = new ResizeObserver(() => {
    callback();
  });
  resizeObserver.observe(DOMNode);
};
