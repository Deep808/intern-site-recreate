import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ percentage, heading, info }) => {
  return (
    <div className="">
      <div className="w-24 h-24 mb-4 mt-6">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `rgba(38,14,255, ${percentage / 100})`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(1turn)',
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#d6d6d6',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#000',
              textAlign: 'center',
              // Text size
              fontSize: '16px',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: '#3e98c7',
            },
          }}
        />
      </div>
      <div>
        <h1 className="text-xl text-blue-900 font-bold md:w-max">{heading}</h1>
        <p className="mt-4 text-sm text-gray-700">{info}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
