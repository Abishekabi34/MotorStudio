import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { PiSpinnerBallFill } from "react-icons/pi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { GiAxeSwing } from "react-icons/gi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { TbSettingsCog } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";
import Optimization from "../../features/OPTIMIZATION/Optimization";
import MPET from "../../features/MPET/MPET";
import ClosedLoopTuning from "../../features/CLOSEDLOOP/ClosedLoopTuning";
import AdvancedTuning from "../../features/ADVANCEDTUNING/AdvancedTuning";
import Registermap from "../../features/REGISTERMAP/Registermap";
import "./Sidebar.css";
import Quickspin from "../../features/QS/Quickspin";
import Home from "../homepage/Home";

// interface SidebarProps {
//   setActiveComponent: Dispatch<SetStateAction<ReactElement | null>>
// }

type SidePropType={
  setActiveComponent:Dispatch<SetStateAction<ReactElement | null>>
  setYesDevice:Dispatch<SetStateAction<boolean>>
  yesDevice:boolean
}



const Sidebar = ({ setActiveComponent,setYesDevice,yesDevice}: SidePropType) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    isExpanded ? 
    (<div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-link">
          <button onClick={() => setActiveComponent(<Home setActiveComponent={setActiveComponent} setYesDevice={setYesDevice} yesDevice={yesDevice}/>)}>
            <IoHomeOutline size="1.5em" />
          </button>
        </div>
        <div className="sidebar-link">
          <button onClick={() => setActiveComponent(<Quickspin setActiveComponent={setActiveComponent} setYesDevice={setYesDevice} yesDevice={yesDevice}/>)}>
            <PiSpinnerBallFill size="1.5em" />
          </button>
        </div>
        <div className="sidebar-link">
          <button onClick={() => setActiveComponent(<Optimization />)}>
            <HiOutlineAdjustmentsHorizontal size="1.5em" />
          </button>
        </div>
        <div className="sidebar-link">
          <button onClick={() => setActiveComponent(<MPET />)}>
            <GiAxeSwing size="1.5em" />
          </button>
        </div>
        <div className="sidebar-link">
          <button onClick={() => setActiveComponent(<ClosedLoopTuning />)}>
            <RiBarChartBoxLine size="1.5em" />
          </button>
        </div>
        <div className="sidebar-link">
          <button onClick={() => setActiveComponent(<AdvancedTuning />)}>
            <TbSettingsCog size="1.5em" />
          </button>
        </div>
        <div className="sidebar-link">
          <button onClick={() => setActiveComponent(<Registermap />)}>
            <GoProjectRoadmap size="1.5em" />
          </button>
        </div>
      </div>
      <div className="sidebar-down">
        <div className="sidebar-link1">
          <button onClick={()=>setIsExpanded(!isExpanded)}>
            <MdOutlineKeyboardDoubleArrowRight
              size="1.5em"
            />
          </button>
        </div>
        <div className="sidebar-link1">
          <button>
            <IoLinkSharp size="1.5em" color="red" />
          </button>
        </div>
      </div>
    </div>) 
    :
    (<div className="sidebar-expand">
      <div className="se-top" style={{display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex"}} className="se-div1" onClick={()=>setActiveComponent(<Home setActiveComponent={setActiveComponent} setYesDevice={setYesDevice} yesDevice={yesDevice}/>)}>
          <div className="se-ic"><IoHomeOutline size="1.5em"/></div>
          <div className="se-ip">Home</div>
        </div>
        <div style={{display:"flex"}} className="se-div2" onClick={()=>setActiveComponent(<Quickspin setActiveComponent={setActiveComponent} setYesDevice={setYesDevice} yesDevice={yesDevice}/>)}>
          <div className="se-ic"><PiSpinnerBallFill size="1.5em"/></div>
          <div className="se-ip">Quick Spin</div>
        </div>
        <div style={{display:"flex"}} className="se-div2" onClick={()=>setActiveComponent(<Optimization/>)}>
          <div className="se-ic"><HiOutlineAdjustmentsHorizontal size="1.5em"/></div>
          <div className="se-ip">Optimization</div>
        </div>
        <div style={{display:"flex"}} className="se-div2" onClick={()=>setActiveComponent(<MPET/>)}>
          <div className="se-ic"><GiAxeSwing size="1.5em"/></div>
          <div className="se-ip">MPET</div>
        </div>
        <div style={{display:"flex"}} className="se-div2" onClick={()=>setActiveComponent(<ClosedLoopTuning/>)}>
          <div className="se-ic"><RiBarChartBoxLine size="1.5em"/></div>
          <div className="se-ip">Closed Loop Tuning</div>
        </div>
        <div style={{display:"flex"}} className="se-div2" onClick={()=>setActiveComponent(<AdvancedTuning/>)}>
          <div className="se-ic"><TbSettingsCog size="1.5em"/></div>
          <div className="se-ip">Advanced Tuning</div>
        </div>
        <div style={{display:"flex"}} className="se-div2" onClick={()=>setActiveComponent(<Registermap/>)}>
          <div className="se-ic"><GoProjectRoadmap size="1.5em"/></div>
          <div className="se-ip">Register Map</div>
        </div>
      </div>
      <div className="se-down" style={{display:"flex",flexDirection:"column"}}>
        <div className="se-div2" onClick={()=>setIsExpanded(!isExpanded)} style={{display:"flex"}}>
          <button className="se-button" style={{cursor:"pointer"}}>
            <MdOutlineKeyboardDoubleArrowRight size="1.5em" className="icon-rotated" style={{marginLeft:"15px",marginTop:"15px"}}/>
          </button>
          <div style={{marginTop:"16.5px",marginLeft:"15px"}}>Toggle</div>
        </div>
        <div style={{display:"flex",marginTop:"20px"}} className="se-div2">
          <div style={{marginLeft:"15px",color:"red"}}><IoLinkSharp size="1.5em"/></div>
          <div style={{marginLeft:"15px",color:"red",marginTop:"4px"}}>Disconnected</div>
        </div>
      </div>
    </div>
    )

  );
};

export default Sidebar;
