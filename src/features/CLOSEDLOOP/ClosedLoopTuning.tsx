import React,{useState} from 'react'
import "./ClosedLoopTuning.css"
import { IoChevronDown } from 'react-icons/io5';
import { LineChart,XAxis,Tooltip,CartesianGrid,Line,ResponsiveContainer,YAxis} from 'recharts';
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
    <div className='CLT-WHOLE-CONTAINER'>
      <div className='CLT-TOP-CONTAINER'>
        <p className={`clt-p1 ${activeTab === 'Current Loop' ? 'active' : ''}`} 
          onClick={()=>handleClick('Current Loop')}>Current Loop</p>
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
              <p>Range-0 to 255</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
              <input type="number" min='0' max='255000' step='1' className='clt-cl-inp2' defaultValue='max' value={value1 ?? ''} onChange={handleChange1}/>
              <p>Range-0 to 255000</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
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
              <p style={{marginLeft:'30px'}}>Recommended 15kHz</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
              <input type="number" value={0} className='clt-cl-inp1'/>
              <p>Raange-0 to 20</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
              <input type="number" value={0} className='clt-cl-inp1'/>
              <p>Range-0 to 20</p>
            </div>
          </div>
         </div>
        }
      </div>
      <div className='CLT-DOWN-CONTAINER' style={{display:'flex'}}>
        {activeTab==="Current Loop" && 
        <div className='clt-left-content'>
          <ResponsiveContainer width="80%" height={300}>
            <LineChart data={data} >
            <XAxis label={{value:'Time(Sec)' , position:'bottom'}} />
            <YAxis label={{value:'Current(Amps)',angle:-90 ,position:'insideLeft'}}/>
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="current" stroke="#8884d8" strokeWidth={2} dot={{fill:"#8884d8",r:4}} />
            </LineChart>
        </ResponsiveContainer>
        </div>
        }
      </div>
    </div>
  )
}

export default ClosedLoopTuning