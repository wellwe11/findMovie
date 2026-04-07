const debounce = (callback, delay) => {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => callback(...args), delay);
  };
};

export default debounce;
