import React,{useState} from 'react'
import "./ClosedLoopTuning.css"
import { IoChevronDown } from 'react-icons/io5';
import { LineChart,XAxis,Tooltip,CartesianGrid,Line,ResponsiveContainer,YAxis} from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ClosedLoopTuning = () => {
  const[activeTab,setActiveTab]=useState('Current Loop');
  const [value,setValue]=useState<number | null>(0);
  const [value1,setValue1]=useState<number | null>(0);
  const [dropValue,setDropValue]=useState<string | null>('0kHz');
  const [isOpen,setIsOpen]=useState(false);
  const handleClick = (tabName:string) => {
    setActiveTab(tabName)
  }

  const data = [
    {time:0,current:0},
  ];

  const phaseData = [{ frequency: 0, phase: 0 }];

  const magnitudeData=[
    {frequency:0,magnitude:0}
  ];

  const toastError=()=>{
    toast.error(
      <div className='toast-content'>
        <span>MOTOR_RES and MOTOR_IND cannot be 0</span>
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



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let newValue=parseInt(e.target.value,10)||0;
    if(newValue<0){
      newValue=0;
    }
    if(newValue>255){
      newValue=255;
    }
    setValue(newValue);
  }

  const dropdownValues=['15kHz','20kHz','25kHz','30kHz','35kHz','40kHz','45kHz','50kHz','55kHz','60kHz','Not Applicable'];

  const handleChange1 = (e:React.ChangeEvent<HTMLInputElement>) => {
    let newValue=parseInt(e.target.value,10)||0;
    if(newValue<0){
      newValue=0;
    }
    if(newValue>255000){
      newValue=255000;
    } 
    setValue1(newValue);
  }

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }
  return (
    <>
    <ToastContainer limit={10}/>
    <div className='CLT-WHOLE-CONTAINER'>
      <div className='CLT-TOP-CONTAINER'>
        <p className={`clt-p1 ${activeTab === 'Current Loop' ? 'active' : ''}`} 
          onClick={()=>handleClick('Current Loop')} style={{color:'red'}}>Current Loop</p>
        <p className={`clt-p2 ${activeTab === 'Motor Characteristics' ? 'active' : ''}`} 
          onClick={()=>handleClick('Motor Characterisitics')}>Motor Characterisitics</p>
        <p className='clt-p3'>Speed Loop</p>
        <p className='clt-p4'>Active Braking</p>
      </div>
      <div className='CLT-CONTENT'>
        {activeTab === 'Current Loop' &&
         <div className='clt-current-loop'>
          <div className='clt-cl-inp' style={{display:'flex',marginTop:'20px'}}>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
              {/* <label htmlFor="inp" style={{position:'relative'}}>Kp coefficient</label> */}
              <input type="number" id='KpCoefficient' min='0' max='255'  step='1' className='clt-cl-inp1' value={value ?? ''} onChange={handleChange}/>
              <p style={{marginLeft:'15px',marginTop:'5px',color:'gray'}}>Range-0 to 255</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'40px'}}>
              <input type="number" min='0' max='255000' step='1' className='clt-cl-inp2' defaultValue='max' value={value1 ?? ''} onChange={handleChange1}/>
              <p style={{marginLeft:'15px',marginTop:'5px',color:'gray'}}>Range-0 to 255000</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'50px'}}>
              <div>
              <input 
                className='clt-dropdown-input'
                type="text" 
                readOnly 
                value={dropValue?? ''} 
                onChange={handleInputChange} 
                onClick={()=>setIsOpen(!isOpen)}/>
              <IoChevronDown 
                className='clt-dropdown-icon'
                onClick={()=>setIsOpen(!isOpen)}
                size={16}
              />
              
              </div>
              
              {isOpen && (
                <div className='clt-dropdown-container' onClick={()=>setIsOpen(false)}>
                  {dropdownValues.map((item,index)=>(
                    <div key={index} onClick={()=>setDropValue(item)} className='clt-dropdown-item'>
                      {item}
                    </div>
                  ))}
                </div>
              )}
              <p style={{marginLeft:'15px',marginTop:'5px',color:'gray'}}>Recommended 15kHz</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'40px'}}>
              <input type="number" value={0} className='clt-cl-inp11 clt-input-opac'/>
              <p style={{marginLeft:'15px',marginTop:'5px',color:'gray',opacity:'0.5'}}>Range-0 to 20</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'40px'}}>
              <input type="number" value={0} className='clt-cl-inp11  clt-input-opac'/>
              <p style={{marginLeft:'15px',marginTop:'5px',color:'gray',opacity:'0.5'}}>Range-0 to 20</p>
            </div>
          </div>
         </div>
        }
      </div>
      {activeTab==="Current Loop" &&
        <div className='CLT-DOWN-CONTAINER' style={{display:'flex'}}>
          <div className='clt-left-content'>
            <div style={{display:"flex",marginTop:"10px"}}>
              <p style={{marginLeft:"10px"}}>Time Domain Graph</p>
              <button className='tdg-btn' onClick={toastError}>Plot Current Response</button>
            </div>
            <ResponsiveContainer width="100%" height={250} style={{marginTop:"60px",marginLeft:"2px",maxWidth:"570px"}}>
              <LineChart data={data} >
              <XAxis dataKey="time" label={{value:'Time(Sec)' , position:'insideBottom',dy:5}} />
              <YAxis label={{value:'Current(Amps)',angle:-90 ,position:'insideLeft',dy:50}}/>
              <Tooltip />
              <CartesianGrid strokeDasharray="2 2" />
              <Line type="monotone" dataKey="current" stroke="#8884d8" strokeWidth={2} dot={{fill:"#82ca9d",r:4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='clt-right-container'>
            <div style={{display:"flex",marginTop:"10px"}}>
              <p className='crcp1'>Bode Graph</p>
              <input className='crci' type="checkbox" readOnly checked style={{cursor:'default'}} data-indeterminate="false"/>
              <p className='crcp2'>Wrap</p>
              <button className='crcb'>Plot Bode</button>
            </div>
            <ResponsiveContainer width="95%" height={250} style={{marginTop:"15px"}}>
              <LineChart data={phaseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="frequency" label={{ value: 'Frequency (Rad/Sec)', position: 'insideBottom',dy:5 }} />
                <YAxis label={{ value: 'Phase (deg)', angle: -90, position: 'insideLeft',dy:50 }} />
                <Tooltip />
                <Line type="monotone" dataKey="phase" stroke="#82ca9d" strokeWidth={2} dot={{ fill: "#82ca9d", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="95%" height={250} style={{marginTop:"35px"}}>
              <LineChart data={magnitudeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="frequency" label={{ value: 'Frequency (Rad/Sec)', position: 'insideBottom',dy:5 }} />
                <YAxis label={{ value: 'Magnitude (dB)', angle: -90, position: 'insideLeft',dy:50 }} />
                <Tooltip />
                <Line type="monotone" dataKey="magnitude" stroke="#ff7300" strokeWidth={2} dot={{ fill: "#ff7300", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>

          </div>
        </div>
        }
      
    </div>
    </>
  )
}

export default ClosedLoopTuning