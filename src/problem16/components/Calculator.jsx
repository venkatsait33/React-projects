import React, { useState } from "react";
import Display from "./Display";
import { connect } from "react-redux";
import {
  updateResult,
  updateOperation,
  resetState,
  updateExpression,
} from "../redux/action";
import Button from "./Button";

function Calculator({
  result,
  operation,
  expression,
  updateResult,
  updateOperation,
  resetState,
  updateExpression,
}) {
  const handleNumberClick = (num) => {
    updateExpression(expression === "0" ? num : expression + num);
  };
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "00"];
  const operators = ["+", "-", "*", "/"];

  // Function to handle arithmetic operator button clicks
  const handleOperatorClick = (operator) => {
    if (expression !== "") {
      updateExpression(expression + operator);
      updateOperation(operator);
    }
  };

  const handleEqualClick = () => {
    if (expression !== "") {
      // Evaluate the expression
      try {
        const evaluatedResult = eval(expression); // Be cautious with eval() in production
        updateResult(evaluatedResult.toString());
        updateExpression(evaluatedResult.toString());
        updateOperation("");
      } catch (error) {
        updateResult("Error");
        updateExpression("");
        updateOperation("");
      }
    }
  };

  // Function to handle clear button click
  const handleClearClick = () => {
    resetState();
  };
  return (
    <div className="flex flex-col items-center justify-center w-3/4 p-4 mx-auto bg-gray-200 rounded-lg h-100">
      <Display result={expression || result} />
      <div className="grid w-full grid-cols-3 gap-4 mt-4 mb-4">
        {numbers.map((num) => (
          <Button
            key={num}
            onClick={() => handleNumberClick(num)}
            value={num}
          />
        ))}
      </div>
      <div className="grid w-full grid-cols-4 gap-4 mt-4 mb-4">
        {operators.map((operator) => (
          <Button
            key={operator}
            onClick={() => handleOperatorClick(operator)}
            value={operator}
          />
        ))}
      </div>
      <div className="grid w-full grid-cols-2 gap-4 mt-4 mb-4">
        <Button onClick={handleEqualClick} value="=" />
        <Button onClick={handleClearClick} value="Clear" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  result: state.result,
  operation: state.operation,
  expression: state.expression,
});

const mapDispatchToProps = {
  updateResult,
  updateOperation,
  resetState,
  updateExpression,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
