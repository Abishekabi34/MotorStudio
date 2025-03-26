import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Head.css";

const showErrorToastss = () => {
  toast.error(
    <div className="toast-content">
      <span>Select device from dropdown</span>
    </div>,
    {
      position: "bottom-left",
      autoClose:1500,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
    }
  );
};

const Head = () => {
  return (
    <div className='head1'>
      <div className='ms1'>
        <div className='ms2'>
          <div className='appheader'>
            <div className='ms'>Motor Studio</div>
            <div className='vl'></div>
          </div>
          <p className='p1 p1-File c1 c2' onClick={showErrorToastss}>File</p>
          <p className='p1 p2-Options c1 c2 c3' onClick={showErrorToastss}>Options</p>
          <p className='p1 p3-Tools c1 c2 c3' onClick={showErrorToastss}>Tools</p>
          <p className='p1 p4-Help c1 c2 c3' onClick={showErrorToastss}>Help</p>
          <p className='p1 p5-Docs c1 c2 c3' onClick={showErrorToastss}>Documents</p>
        </div>
      </div>
    </div>
  )
}

export default Head