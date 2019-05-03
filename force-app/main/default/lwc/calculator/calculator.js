const calculator = (first_param, second_param, mode) => {
    if (mode === "add" || mode === "+" || mode === "Add" || mode === "ADD") {
      return +first_param + +second_param;
    }
  
    if (
      mode === "subtraction" ||
      mode === "-" ||
      mode === "Subtraction" ||
      mode === "SUBTRACTION"
    ) {
      return first_param - second_param;
    }
  
    if (
      mode === "divide" ||
      mode === "/" ||
      mode === "Divide" ||
      mode === "DIVIDE"
    ) {
      return first_param / second_param;
    }
  
    if (
      mode === "multiplication" ||
      mode === "*" ||
      mode === "Multi" ||
      mode === "ADD"
    ) {
      return first_param * second_param;
    }
    return 0;
  };
  
  export { calculator };