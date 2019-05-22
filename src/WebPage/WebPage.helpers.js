exports.validateArray = arr => {
  let message;

  if (!Array.isArray(arr))
    message = "Invalid array.";

  if (!arr.length)
    message = "Array is empty.";

  if (message)
    throw new Error(message);
};

exports.validateSelector = selector => {
  if (typeof selector !== 'string' || !selector.length)
    throw new Error('Invalid selector.');
};