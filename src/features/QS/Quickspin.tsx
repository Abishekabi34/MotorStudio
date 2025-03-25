import { Dispatch, ReactElement, SetStateAction } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { TbSettingsCog } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { RiErrorWarningLine } from "react-icons/ri";
import enhanced_image from '../../compimg/enhanced_image.png';
import Home from '../../components/homepage/Home';
import Optimization from '../OPTIMIZATION/Optimization';
import AdvancedTuning from '../ADVANCEDTUNING/AdvancedTuning';
import Registermap from '../Registermap';
import './Quickspin.css'

type QuickspinPropType={
  setActiveComponent:Dispatch<SetStateAction<ReactElement | null>>
}

const Quickspin = ({setActiveComponent}:QuickspinPropType) => {
  return (
    <div className='QS'>
      <div className='QSheader'>
        <button className='qsb1' onClick={()=>{setActiveComponent(<Home setActiveComponent={setActiveComponent} />)}}><IoHomeOutline className='qsic' /> Home Page</button>
        <button className='qsb2' onClick={()=>{setActiveComponent(<Optimization/>)}}><HiOutlineAdjustmentsHorizontal className='qsic'/>Optimization Wizards</button>
        <button className='qsb3' onClick={()=>{setActiveComponent(<AdvancedTuning />)}}><TbSettingsCog className='qsic'/>Advanced Tuning</button>
        <button className='qsb4' onClick={()=>{setActiveComponent(<Registermap />)}}><GoProjectRoadmap className='qsic'/>Register Map</button>
      </div>
      <p className='qsp'>Quick Spin </p>
      <div className='loadDefault'>
        <div className='sno'>1</div>
        <div className='para-content'>
          <p className='ld1'>Load Default</p>
          <p className='ld2'>Click the "Load Preset values" button to load the recommended default values.</p>
        </div>
        <div className='inpdiv'>
          <input type='' placeholder='Select' className='qsinp'/>
          <button className='loadbutton'>Load Preset Values</button>
          </div>
      </div>
      <div className='part2' contentEditable="false" style={{opacity:'0.3'}}>
        <div className='motorinfo'>
          <div className='mi2'>
            <div className='sno2'>2</div>
            <div className='para-content'>
              <p className='ld1'>Motor Information</p>
              <p className='ld2'>Enter the basic information of your motor</p>
            </div>
          </div>
          <div className='options'>
            <div className='checks'>
              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <p className='speed'>Speed in RPM</p>
              </label>
              <label className="custom-checkbox ">
                <input type="checkbox " />
                <span className="checkmark1"></span>
                <p className='speed1'>Speed in Hertz</p>
              </label>

            </div>
          </div>
          <div className='speed-inputs'>
            <input type="text" className='inp1' placeholder='0.125A' readOnly/>
            <input type="text" className='inp2' placeholder='0.00' readOnly/>
            <input type="text" className='inp3'placeholder='1' readOnly/>
          </div>
          <div className='run'><button className='run-button'>Run MPET</button></div>
          <div className='war'><RiErrorWarningLine className='war1'/><p className='war2'>Executing the MPET command will enable Motor spinning</p></div>
        </div>
        <div className='sideline'></div>
        <div className='rightpart'>
          <div className='mpet-title'>MPET Results</div>
          <div className='inp-container'>
            <div className='rinpc'><input type="number" readOnly className='rinp1' placeholder='0.00'/><p className='m1'>Ohm</p></div>
            <div className='rinpc'><input type="number" readOnly className='rinp2' placeholder='0.00'/><p className='m2'>mH</p></div>
            <div className='rinpc'><input type="number" readOnly className='rinp3' placeholder='0.00'/><p className='m3'>mV/Hz</p></div>
            <div className='rinpc'><input type="number" readOnly className='rinp4' placeholder='0.00'/></div>
            <div className='rinpc'><input type="number" readOnly className='rinp5' placeholder='0.00'/></div>
          </div>
        </div>
      </div>
      <div className='part3'>
        <div className='spinmotor' style={{opacity:'0.3'}}>
          <div className='sno2'>3</div>
          <div className='para-content'>
            <p className='ld1'>Spin Motor</p>
            <p className='ld2'>Move the slider to control the speed of the motor</p>
            <div><img src={enhanced_image} alt="speedofmotor" className='enhanced-img'  /></div>
            <div><p className='i2c'>I2C Speed Command Percentage(%)</p></div>
            <div className='slidecontainer'><input type="range" min="1" max="100" value="50" className='slider'/><input type="text" placeholder='0.00' /></div>
          </div>
        </div>
        <div className='log-page'>
        </div>
        <div className='logpage'>
          <p className='log1'>Logs</p>
          <p className='log2'>No Logs available</p>
        </div>
      </div>
    </div>
  )
}

export default Quickspin