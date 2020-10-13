import React from 'react';
import {useDropzone} from 'react-dropzone'

const DragnDrop = () => {

  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => (
    <p key={file.lastModified}>
      {file.name} - {file.type}
    </p>
  ));

  return (
    <div className="d-flex bg-white align-items-center p-3 my-3 text-white-50 rounded shadow-sm custom-shadow">
      <img
        className="mr-3 cursor-pointer"
        src="assets/upload.png"
        alt=""
        width="70"
        height="48"
      />
      <div className="lh-100">
        <h6 className="mb-0 text-pink lh-100">Upload</h6>
        <small className="text-dark">
          Drag and drop a file here or click on the upload icon to select
          one from your computer
        </small>
      </div>
      {/* <div className="mt-4">
        <div className="container">
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here</p>
            <button type="button" onClick={open}>
              Open File Dialog
            </button>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </div>
      </div> */}
    </div>
  );
};

export default DragnDrop;
