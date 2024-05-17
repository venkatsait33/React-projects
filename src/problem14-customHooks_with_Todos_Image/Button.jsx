import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ colorScheme = "white", size = "md", variant, children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <h1 className="text-2xl font-semibold">Button</h1>
      <button
        className={`${styles.button} ${styles[colorScheme]} ${styles[size]} ${
          variant && styles[variant]
        }  `}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  colorScheme: PropTypes.oneOf(["red", "yellow", "orange", "green", "white"]),
  size: PropTypes.oneOf(["sm", "md", "lg", 'xl']),
  variant: PropTypes.oneOf(["outline", "solid", "ghost"]),
  children: PropTypes.node.isRequired,
};

export default Button;
