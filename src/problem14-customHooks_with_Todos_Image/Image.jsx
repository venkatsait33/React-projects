import PropTypes from "prop-types";
import React from "react";

const Image = ({ src, alt, width, height, radius }) => {
  return (
    <div className="w-[50%] mx-auto p-5 bg-slate-200 rounded-lg shadow-lg">
      <h1 className="mb-5 text-2xl font-bold text-center">Image </h1>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        border-radius={radius}
        className="p-3 mx-auto"
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  Radius: PropTypes.number,
};

export default Image;
