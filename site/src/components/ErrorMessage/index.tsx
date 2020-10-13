import * as React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = (props: { title: string; description: string }) => {
  const { title, description } = props;
  return (
    <div className="container pt-4"
      style={{ 
        minHeight: 500,
        backgroundImage: "url('assets/dino-t-rex.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <div>
        <div className="font-weight-bold mt-4 text-pink">
          <h1>{title}</h1>
        </div>
        <div className="mt-4">
          <h5>{description}</h5>
        </div>
        <div className="mt-5">
          <h6>Click here to return <Link to="/">home</Link></h6>
        </div>
      </div>      
    </div>
  );
};
export default ErrorMessage;
