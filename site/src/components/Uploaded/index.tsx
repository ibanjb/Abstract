import * as React from 'react';

const Uploaded = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomFillColor = `#${randomColor}`;
  console.log('random', randomFillColor);
  return (
    <div className="media text-muted pt-3">
      <svg
        className="bd-placeholder-img mr-2 rounded"
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: 32x32"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill={randomFillColor} />
        <text x="50%" y="50%" fill={randomFillColor} dy=".3em">
          32x32
        </text>
      </svg>
      <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div className="d-flex justify-content-between align-items-center w-100">
          <strong className="text-gray-dark">File name</strong>
          <a className="text-pink" href="#">
            Remove
          </a>
        </div>
        <span className="d-block">@uploader</span>
      </div>
    </div>
  );
};
export default Uploaded;
