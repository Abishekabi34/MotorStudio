import './AdvancedTuning.css' 
import oi1 from '../OPTIMIZATION/OPT-IMAGES/optimg1.png'
import oi2 from '../OPTIMIZATION/OPT-IMAGES/optimg2.png'
import oi3 from '../OPTIMIZATION/OPT-IMAGES/optimg3.png'
import oi4 from '../OPTIMIZATION/OPT-IMAGES/optimg4.png'
import oi5 from '../OPTIMIZATION/OPT-IMAGES/optimg5.png'
const AdvancedTuning = () => {
  return (
    <div className='AT-WHOLE-CONTAINER'>
      <div className='AT-TOP-CONTAINER'>
        <div>
          <div>
            <img src={oi1} alt="img" style={{height:"100px",width:"150px"}} />
            <button className='atb-1 atb-2' style={{width:'150px'}}>Pre-Startup</button>
          </div>
          <div>
            <img src={oi2} alt="img" style={{height:"100px",width:"150px"}}  />
            <button className='atb-1 atb-3' style={{width:'150px'}}>Motor-Startup</button>
          </div>
          <div>
            <img src={oi3} alt="img" style={{height:"100px",width:"250px"}} />
            <button className='atb-1 atb-4' style={{width:'250px'}}>Open Loop and Handoff</button>
          </div>
          <div>
            <img src={oi4} alt="img" style={{height:"100px",width:"250px"}}  />
            <button className='atb-1 atb-5' style={{width:'250px'}}>Closed Loop</button>
          </div>
          <div>
            <img src={oi5} alt="img" style={{height:"100px",width:"150px"}}/>
            <button className='atb-1 atb-6' style={{width:'150px'}}>Motor Stop</button>
          </div>
        </div>
        <div>
          <div className='right-atb-top'>
            <div style={{display:'flex'}}>
              <input type="checkbox" name="" id="" />
              <p>Show Advance Settings</p>
            </div>
            <div style={{display:'flex'}}>
              <input type="checkbox" name="" id="" />
              <p>Show Modified Registers</p>
            </div>
            <div>
              <p>Auto Read All Registers</p>
              <input type="checkbox" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedTuning