import { toast,ToastContainer } from 'react-toastify';
import './Registermap.css'
const Registermap = () => {

    const showErrorToasts = () => {
      toast.error(
        <div className="toast-content">
          <span>Device not Connected</span>
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
  return (
    <>
    <ToastContainer limit={10}/>
    <div className='RM-WHOLE-CONTAINER'>
      <div className='RM-TOP-CONTAINER'>
        <input type="text" className='rm-search-bar' placeholder='Search registers by name,address or bitfield name'/>
        <input type="checkbox" className='rm-checkbox' />
        <p style={{marginLeft:'10px',marginTop:'8px'}}>Show Bits</p>
        <button className='rm-btn-1' style={{marginLeft:'700px',padding:'9px 20px'}} onClick={showErrorToasts}>Registers</button>
      </div>
      <div className='RM-DOWN-CONTAINER' style={{display:'flex'}}>
        <div className='RM-DOWN-LEFT'>
          <div className='rmtop'>
            <p>Register Name</p>
            <p>Address</p>
            <p>Value</p>
          </div>
          <div className='rmdown' style={{display:'flex',flexDirection:'column'}}>
            <div className='rmdown-divs'>
              <div>
                <p>Algorithm Configuration</p>
              </div>
              <div>
                <p>Fault Configuration</p>
              </div>
              <div>
                <p>Internal Algorithm Configuration</p>
              </div>
              <div>
                <p>Hardware Configuration</p>
              </div>
              <div>
                <p>Fault Status</p>
              </div>
              <div>
                <p>System Status</p>
              </div>
              <div>
                <p>Device Control</p>
              </div>
              <div>
                <p>Algorithm Control</p>
              </div>
              <div>
                <p>Algorithm Variables</p>
              </div>
            </div>
          </div>
        </div>
        <div className='RM-DOWN-RIGHT'>
          <div className='rm-right-head'>
            <p>Field View</p>
          </div>
          <div className='rm-right-down'>
            <p>ISD_CONFIG</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Registermap