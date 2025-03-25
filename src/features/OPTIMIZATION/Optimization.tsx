import React from 'react'
import './Optimization.css'
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { MdOutlineSyncProblem } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { MdNoiseControlOff } from "react-icons/md";
import { MdOutlineQueryStats } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { MdLockReset } from "react-icons/md";
import { MdOutlineTrendingDown } from "react-icons/md";
import { MdOutlineStopCircle } from "react-icons/md";
import { MdBatterySaver } from "react-icons/md";
import { MdElectricMeter } from "react-icons/md";
import { MdOutlineThermostatAuto } from "react-icons/md";
import { MdLeakRemove } from "react-icons/md";
import { MdOutlineRunningWithErrors } from "react-icons/md";
import { MdMultilineChart } from "react-icons/md";
import optimg1 from './OPT-IMAGES/optimg1.png'
import optimg2 from './OPT-IMAGES/optimg2.png'
import optimg3 from './OPT-IMAGES/optimg3.png'
import optimg4 from './OPT-IMAGES/optimg4.png'
import optimg5 from './OPT-IMAGES/optimg5.png'
const Optimization = () => {
  return (
    <div className='OPT-Whole-Container'>
      <div className='OPT-TOP-CONTAINER'>
        <div className='prestartup-div'>
          <img src={optimg1}  style={{height:"70px",width:"82px"}}/>
          <button className='opt-btn1'>Pre-Startup</button>
        </div>
        <div className='motorstartup-div'>
          <img src={optimg2}  style={{height:"70px",width:"93px"}}/>
          <button className='opt-btn2'>Motor Startup</button>
        </div>
        <div className='openloop-div'>
          <img src={optimg3}  style={{height:"70px",width:"170px"}}/>
          <button className='opt-btn3'>Open Loop and Handoff</button>
        </div>
        <div className='closedloop-div'>
          <img src={optimg4}  style={{height:"70px",width:"170px"}}/>
          <button className='opt-btn4'>Closed Loop</button>
        </div>
        <div className='motorstop-div'>
          <img src={optimg5}  style={{height:"70px",width:"70px"}}/>
          <button className='opt-btn5'>Motor Stop</button>
        </div>
      </div>
      <div className='OPT-DOWN-CONTAINER'>
        <div className='Motor-Prestartup-div'>
          <p className='mps-title1'>Motor Pre-startup</p>
          <div className='Motor-Prestartup-subdivs'>
            <div className='mps-subdiv1' style={{display:"flex"}}>
              <div className='mps-subdiv-img1'> <MdOutlineSpeed size={40} color='gray'/></div>
              <div className='mps-subdiv-p1'>
                <p className='mps-p1'>Initial Speed Detection</p>
                <p className='mps-p2'>This wizard helps Initial speed detection of motor reliable motor resynchronization.</p>
              </div>
            </div>
            <div className='mps-subdiv2' style={{display:"flex"}}>
              <div className='mps-subdiv-img2'><MdOutlineSettingsBackupRestore size={40} color='gray'/></div>
              <div className='mps-subdiv-p2'>
                <p className='mps-p1'>Unidirectional motor drive detecting </p>
                <p className='mps-p2'>This wizard helps you in Unidirectional motor drive detecting backward spin</p>
              </div>
            </div>
            <div className='mps-subdiv3' style={{display:"flex"}}>
              <div className='mps-subdiv-img3'><MdOutlineSyncProblem size={40} color='gray'/></div>
              <div className='mps-subdiv-p3'>
                <p className='mps-p1'>Direction and Brake pin override</p>
                <p className='mps-p2'>This wizard helps you in Direction and Brake pin override</p>
              </div>
            </div>
          </div>
        </div>
        <div className='Motor-Startup-div'>
          <p className='mps-title2'>Motor Startup</p>
          <div className='mps-redline1'></div>
              <div className='Motor-Prestartup-subdivs'>
                <div className='mps-subdiv1' style={{display:"flex"}}>
                  <div className='mps-subdiv-img1'> <MdOutlinePublishedWithChanges size={40} color='gray'/></div>
                  <div className='mps-subdiv-p1'>
                    <p className='mps-p1'>Optimal Startup</p>
                    <p className='mps-p2'>This wizard helps you configure fast and robust motor startup.</p>
                  </div>
                </div>
              </div>
        </div>
        <div className='Openloop-div'>
          <p className='mps-title3'>Open Loop and Handoff</p>
            <div className='mps-redline1'></div>
                <div className='Motor-Prestartup-subdivs'>
                  <div className='mps-subdiv1' style={{display:"flex"}}>
                    <div className='mps-subdiv-img1'> <MdOutlineStackedBarChart size={40} color='gray'/></div>
                    <div className='mps-subdiv-p1'>
                      <p className='mps-p1'>Gradual and smooth start up motion</p>
                      <p className='mps-p2'>This wizard helps for applications that require slow and gradual startup.</p>
                    </div>
                  </div>
                </div>
        </div>
        <div className='closedloop-div'>
            <p className='mps-title2'>Closed Loop</p>
            <div className='closedloop-container-subdiv'>
                <div className='mps-subdiv1' style={{display:"flex"}}>
                  <div className='mps-subdiv-img1'> <MdNoiseControlOff size={40} color='gray'/></div>
                  <div className='mps-subdiv-p1'>
                    <p className='mps-p1'>Improving Acoustics</p>
                    <p className='mps-p2'>This wizard helps reduce audible noise during motor operation.</p>
                  </div>
                </div>
                <div className='mps-subdiv2' style={{display:"flex"}}>
                  <div className='mps-subdiv-img1'> <MdOutlineQueryStats size={40} color='gray'/></div>
                  <div className='mps-subdiv-p2'>
                    <p className='mps-p1'>Tracking motor speed feedback</p>
                    <p className='mps-p2'>This wizard helps you in tracking motor speed feedback in real time.</p>
                  </div>
                </div>
                <div className='mps-subdiv2' style={{display:"flex"}}>
                  <div className='mps-subdiv-img1'> <MdManageHistory size={40} color='gray'/></div>
                  <div className='mps-subdiv-p2'>
                    <p className='mps-p1'>Improving Speed Accuracy</p>
                    <p className='mps-p2'>This wizard helps you in improving speed accuracy with external clock source.</p>
                  </div>
                </div>
                <div className='mps-subdiv1' style={{display:"flex"}}>
                  <div className='mps-subdiv-img1'> <MdLockReset size={40} color='gray'/></div>
                  <div className='mps-subdiv-p1'>
                    <p className='mps-p1'>Protecting against rotor lock or stall condition</p>
                    <p className='mps-p2'>This wizard helps for protecting against rotor lock or stall condtion</p>
                  </div>
                </div>
            </div>
        </div>
        <div className='motor-stop-div' style={{marginTop:"15px"}}>
          <p className='mps-title2'>Motor Stop</p>
          <div className='motorstop-container'>
            <div className='mps-subdiv1' style={{display:"flex"}}>
              <div className='mps-subdiv-img1'> <MdOutlineTrendingDown size={40} color='gray'/></div>
              <div className='mps-subdiv-p1'>
                <p className='mps-p1'>Faster deceleration</p>
                <p className='mps-p2'>This wizard helps for Faster deceleration.</p>
              </div>
            </div>
            <div className='mps-subdiv2' style={{display:"flex"}}>
              <div className='mps-subdiv-img1'> <MdOutlineStopCircle size={40} color='gray'/></div>
              <div className='mps-subdiv-p1'>
                <p className='mps-p1'>Stopping motor quickly</p>
                <p className='mps-p2'>This wizard helps for applications that require stopping the motor quickly</p>
              </div>
            </div>
          </div>
        </div>
        <div className='General-Performance-div' style={{marginTop:"15px"}}>
          <p className='mps-title2'>General Performance</p>
          <div className='GPContainer'>
          <div className='mps-subdiv1' style={{display:"flex"}}>
              <div className='mps-subdiv-img1'> <MdBatterySaver size={40} color='gray'/></div>
              <div className='mps-subdiv-p1'>
                <p className='mps-p1'>Power Saver / Sleep Mode</p>
                <p className='mps-p2'>This wizard helps you save power in sleep mode or battery operated applications</p>
              </div>
            </div>
            <div className='mps-subdiv2' style={{display:"flex"}}>
              <div className='mps-subdiv-img1'> <MdElectricMeter size={40} color='gray'/></div>
              <div className='mps-subdiv-p1'>
                <p className='mps-p1'>Power Supply Protection</p>
                <p className='mps-p2'>This wizard helps protect the power supply by enabling motor driver features.</p>
              </div>
            </div>
            <div className='mps-subdiv2' style={{display:"flex"}}>
              <div className='mps-subdiv-img1'> <MdOutlineThermostatAuto size={40} color='gray'/></div>
              <div className='mps-subdiv-p1'>
                <p className='mps-p1'>Maximizing thermal efficiency</p>
                <p className='mps-p2'>This wizard helps for maximizing thermal efficiency and increasing thermal performance</p>
              </div>
            </div>
            <div className='mps-subdiv1' style={{display:"flex"}}>
              <div className='mps-subdiv-img1'> <MdLeakRemove size={40} color='gray'/></div>
              <div className='mps-subdiv-p1'>
                <p className='mps-p1'>Mitigating Electromagnetic Interference</p>
                <p className='mps-p2'>This wizard helps for Mitigating Electromagnetic Interference (EMI)</p>
              </div>
            </div>
            <div className='mps-subdiv2' style={{display:"flex"}}>
              <div className='mps-subdiv-img1'> <MdOutlineRunningWithErrors size={40} color='gray'/></div>
              <div className='mps-subdiv-p1'>
                <p className='mps-p1'>Power Supply voltage fluctuations</p>
                <p className='mps-p2'>This wizard helps for monitoring power supply voltage fluctuations for motor operation</p>
              </div>
            </div>
            <div className='mps-subdiv2' style={{display:"flex"}}>
              <div className='mps-subdiv-img1'> <MdMultilineChart size={40} color='gray'/></div>
              <div className='mps-subdiv-p1'>
                <p className='mps-p1'>Preventing supply voltage overshoot</p>
                <p className='mps-p2'>This wizard helps in Preventing supply voltage overshoot during motor stop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Optimization