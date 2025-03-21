import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { RiUserSettingsLine } from "react-icons/ri";
import { SiGoogledocs } from "react-icons/si";
import { TbClipboardData } from "react-icons/tb";
import { TbTool } from "react-icons/tb";
import { MdLiveHelp } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { PiSpinnerBallFill } from "react-icons/pi";
import { TbSettingsCog } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import img1 from '../../componentimg1/img1.jpg';
import img2 from '../../componentimg1/img2.jpg';
import img3 from '../../componentimg1/img3.jpg';
import img4 from '../../componentimg1/img4.jpg';
import img5 from '../../componentimg1/img5.jpg';
import img6 from '../../componentimg1/img6.jpg';
import img7 from '../../componentimg1/img7.jpg';
import imag1 from '../../componentimg2/imag1.jpg';
import imag2 from '../../componentimg2/imag2.jpg';
import imag3 from '../../componentimg2/imag3.jpg';
import imag4 from '../../componentimg2/imag4.jpg';
import imag5 from '../../componentimg2/imag5.jpg';
import imag6 from '../../componentimg2/imag6.jpg';
import imag7 from '../../componentimg2/imag7.jpg';
import './Home.css';
import { useDevice } from '../../DeviceContext';


const Home = () => {

  const {isValidDevice,setIsValidDevice}=useDevice();
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showClose, setShowClose] = useState(false);
  // const [isValidDevice, setIsValidDevice] = useState(false);
  const [isProceedState, setIsProceedState] = useState(false);
  const [imageStep,setImageStep]=useState(0);

  const devices = [
    {
      name:"MCF8316C",
      images:[img1,imag1],
      heading:["Know Your Device","HardWare Setup"],
      descriptions:["The MCF8316C is a 4.5-V to 35-V, 8-A peak integrated three-phase gate driver IC with sensorless field-oriented control for motor drive applications. It provides three accurately trimmed and temperature compensated halfbridge MOSFETS, gate drivers, charge pump, current sense amplifier, linear regulator for the external load and adjustable buck regulator. The I2C interface variant (MCF8316C) also provides a standard I2C interface for configuring the various device settings and reading fault diagnostic information through an external controller.",
                      "1.J1 selected to POT, J3 selected to 5V_USB, and J5 selected to 3V3COM \n 2.Potentiometer R4 is rotated clockwise fully \n  3.S1 pushed right to select BRAKE=RUN, S2 pushed left to select DIR=ABC,and S3 pushed right to select DRVOFF=ON \n 4.Connect the motor to J8 \n  5.Supply a voltage compliant with the Power Supply Voltage (VM) \n  6.Recommended voltage range is 4.5V – 35V \n  7.Connect the positive terminal to VBAT (PIN3 of J7) and negative terminal to PGND (PIN2 of J7) \n  8.Plug in the micro-USB, from the computer that holds the GUI, to the USB Connector J2 "],
    
      },
    {
      name:"MCF8315A",
      images:[img2,imag2],
      heading:["Know Your Device","HardWare Setup"],
      descriptions:["The MCF8315A is a 4.5-V to 35-V, 5-A peak integrated three-phase gate driver IC with sensorless field-oriented control for motor drive applications. It provides three accurately trimmed and temperature compensated halfbridge MOSFETS, gate drivers, charge pump, current sense amplifier, linear regulator for the external load and adjustable buck regulator. MCF8315A also provides a standard I2C interface for configuring the various device settings and reading fault diagnostic information through an external controller.",
        "1.J1 selected to POT, J3 selected to 5V_USB, and J5 selected to 3V3COM \n  2.Potentiometer R4 is rotated clockwise fully \n  3.S1 pushed right to select BRAKE=RUN, S2 pushed left to select DIR=ABC, and S3 pushed right to select DRVOFF=ON \n  4.Connect the motor to J8 \n  5.Supply a voltage compliant with the Power Supply Voltage (VM)."
      ],
    },
    {
      name:"MCF8316A",
      images:[img3,imag3],
      heading:["Know Your Device","HardWare Setup"],
      descriptions:["The MCF8316A is a 4.5-V to 35-V, 8-A peak integrated three-phase gate driver IC with sensorless field-oriented control for motor drive applications. It provides three accurately trimmed and temperature compensated halfbridge MOSFETS, gate drivers, charge pump, current sense amplifier, linear regulator for the external load and adjustable buck regulator. The I2C interface variant (MCF8316A) also provides a standard I2C interface for configuring the various device settings and reading fault diagnostic information through an external controller.",
        " 1.J1 selected to POT, J3 selected to 5V_USB, and J5 selected to 3V3COM \n 2.Potentiometer R4 is rotated clockwise fully \n  3.S1 pushed right to select BRAKE=RUN, S2 pushed left to select DIR=ABC, \n 4.and S3 pushed right to select DRVOFF=ON \n 5.Connect the motor to J8 \n 6.Supply a voltage compliant with the Power Supply Voltage (VM) \n  7.Recommended voltage range is 4.5V – 35V \n 8.Connect the positive terminal to VBAT (PIN3 of J7) and negative terminal to PGND (PIN2 of J7) \n  9.Plug in the micro-USB, from the computer that holds the GUI, to the USB Connector J2"
      ],
    },
    {
      name:"MCF8329A",
      images:[img4,imag4],
      heading:["Know Your Device","HardWare Setup"],
      descriptions:["The MCF8329A is a 4.5-V to 60-V, three-phase BLDC gate driver IC with code-free sensorless Trapezoidal control for motor drive applications. It provides three half-bridge gate drivers, each capable of driving highside and low-side N-channel power MOSFETs. The device generates the correct gate drive voltages using in internal charge pump and enhances the high-side MOSFETs using a bootstrap circuit. A trickle charge pump is included to support 100% duty cycle. The Gate Drive architecture supports peak gate drive currents up to 1-A source and 2-A sink. The MCF8329A can operate from a single power supply and supports a wide input supply range of 4.5 to 60 V. MCF8329A also provides a standard I2C interface for configuring the various device settings and reading fault diagnostic information through an external controller.",
        "1.Connect motor phases to A, B, C on connector J11 \n 2.Do not turn on the power supply yet. Connect motor supply to PVDD and GND on connector J10 \n  3.Select J6 to 5V_USB and J8 to 3V3COM to power MSP430 from USB power supply \n  4.Connect the micro-USB cable into the computer \n  5.Turn the potentiometer fully clockwise to set the motor to zero speed upon powerup \n  6.Flip the switch S1 to the top to configure BRAKE = RUN, switch S2 to the top to configure DRVOFF = ON, switch S3 to the bottom to configure DIR = ABC, and switch S4 to the bottom to configure to WAKE \n  7.Flip the switch SW1 to left to configure SPEED/WAKE pin to SPEED mode and DACOUT/SOx/SPEED_ANA pin to DACOUT mode. Note that flipping the switch SW1 to right will configure SPEED/WAKE pin to WAKE mode and DACOUT/SOx/SPEED_ANA pin to SPEED_ANA mode. When SW1 is flipped to right, switch S4 can be used to put the device in SLEEP or WAKE mode and potentiometer R47 can be used to apply analog voltage to the DACOUT/SOx/SPEED_ANA pin \n  8.Select J12 to leftmost position(closer to C6) to apply AVDD to VREG \n  9.Select J13 to middle position to apply analog voltage from potentiometer R47 to SPEED/WAKE pin \n  10.Turn on the motor power supply \n  11.Use the potentiometer R47 to control the speed of the motor and the switches to disable the motor driver, change the direction, or apply a brake to the motor. Optionally, use the GUI (as shown in Section 6) to monitor real-time speed of the motor, put the MCF8329A into a low-power sleep mode, and read status of the LEDs."
      ],
    },
    {
      name:"MCF8315C",
      images:[img5,imag5],
      heading:["Know Your Device","HardWare Setup"],
      descriptions:["The MCF8315C is a 4.5-V to 35-V, 8-A peak integrated three-phase gate driver IC with sensorless field-oriented control for motor drive applications. It provides three accurately trimmed and temperature compensated halfbridge MOSFETS, gate drivers, charge pump, current sense amplifier, linear regulator for the external load and adjustable buck regulator. The I2C interface variant (MCF8315C) also provides a standard I2C interface for configuring the various device settings and reading fault diagnostic information through an external controller.",
        " 1.J1 selected to POT, J3 selected to 5V_USB, and J5 selected to 3V3COM \n  2.Potentiometer R4 is rotated clockwise fully \n 3.S1 pushed right to select BRAKE=RUN, S2 pushed left to select DIR=ABC,and S3 pushed right to select DRVOFF=ON \n  4.Connect the motor to J8 \n  5.Supply a voltage compliant with the Power Supply Voltage (VM) \n  6.Recommended voltage range is 4.5V – 35V \n  7.Connect the positive terminal to VBAT (PIN3 of J7) and negative terminal to PGND (PIN2 of J7) \n  8.Plug in the micro-USB, from the computer that holds the GUI, to the USB Connector J2"
      ],
    },
    {
      name:"MCF8316D",
      images:[img6,imag6],
      heading:["Know Your Device","HardWare Setup"],
      descriptions:["The MCF8316D is a 4.5-V to 35-V, 8-A peak integrated three-phase gate driver IC with sensorless field-oriented control for motor drive applications. It provides three accurately trimmed and temperature compensated halfbridge MOSFETS, gate drivers, charge pump, current sense amplifier, linear regulator for the external load and adjustable buck regulator. The I2C interface variant (MCF8316D) also provides a standard I2C interface for configuring the various device settings and reading fault diagnostic information through an external controller.",
        "1. J1 selected to POT, J3 selected to 5V_USB, and J5 selected to 3V3COM \n 2. Potentiometer R4 is rotated clockwise fully \n 3. S1 pushed right to select BRAKE=RUN, S2 pushed left to select DIR=ABC,and S3 pushed right to select DRVOFF=ON \n 4. Connect the motor to J8 \n 5. Supply a voltage compliant with the Power Supply Voltage (VM) \n 6. Recommended voltage range is 4.5V – 35V \n 7. Connect the positive terminal to VBAT (PIN3 of J7) and negative terminal to PGND (PIN2 of J7) \n 8. Plug in the micro-USB, from the computer that holds the GUI, to the USB Connector J2"
      ],
    },
    {
      name:"MCF8315D",
      images:[img7,imag7],
      heading:["Know Your Device","HardWare Setup"],
      descriptions:["The MCF8315D is a 4.5-V to 35-V, 8-A peak integrated three-phase gate driver IC with sensorless field-oriented control for motor drive applications. It provides three accurately trimmed and temperature compensated halfbridge MOSFETS, gate drivers, charge pump, current sense amplifier, linear regulator for the external load and adjustable buck regulator. The I2C interface variant (MCF8315D) also provides a standard I2C interface for configuring the various device settings and reading fault diagnostic information through an external controller.",
        "1. J1 selected to POT, J3 selected to 5V_USB, and J5 selected to 3V3COM \n 2. Potentiometer R4 is rotated clockwise fully \n 3. S1 pushed right to select BRAKE=RUN, S2 pushed left to select DIR=ABC,and S3 pushed right to select DRVOFF=ON \n 4. Connect the motor to J8 \n 5. Supply a voltage compliant with the Power Supply Voltage (VM) \n 6. Recommended voltage range is 4.5V – 35V \n 7. Connect the positive terminal to VBAT (PIN3 of J7) and negative terminal to PGND (PIN2 of J7) \n 8. Plug in the micro-USB, from the computer that holds the GUI, to the USB Connector J2"
      ],
    },

  ];

  useEffect(() => {
    const isDevice=devices.some(device=>device.name === search)
    setIsValidDevice(isDevice);
  }, [search,setIsValidDevice]);

  const showErrorToast = () => {
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

  const handleButtonClick = (e: { preventDefault: () => void; }) => {
    if (!isValidDevice) {
      e.preventDefault();
      showErrorToast();
    }
  };

  const filteredDevices = devices.filter(device =>
    device.name.toLowerCase().includes(search.toLowerCase())
  );


  function handleDeviceSelect(device: React.SetStateAction<string>) {
    setSearch(device);
    setIsOpen(false);
    setImageStep(0);
    console.log("Selected Device", device);
  }

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
  };

  const handleProceed=() =>{
    setIsProceedState(true);
    setImageStep(1);
  }

  const selectedDevice=devices.find(device => device.name === search);

  return (
    <>
      <ToastContainer limit={10} />
      <div className='home-outline'>
        <div className='device-selector'>
          <div className='dropdown'>
            <div className='for-button'
              onMouseEnter={() => setShowClose(true)}
              onMouseLeave={() => setShowClose(false)}
            >
              <input 
                className='textbox'
                type="text"    
                placeholder='Select Your Device'
                value={search}
                onChange={handleInputChange}
                onClick={() => setIsOpen(true)}
              />
              {showClose && search && (
                <IoClose
                  className="close-icon"
                  onClick={() => {
                    setSearch('')
                    setIsValidDevice(false)
                  }}
                  size={16}
                />
              )}
              <IoChevronDown
                className="dropdown-icon"
                onClick={() => setIsOpen(!isOpen)}
                size={16}
              />
            </div>
            {isOpen && (
              <div className="device-list">
                {filteredDevices.map((device, index) => (
                  <div
                    key={index}
                    className="device-item"
                    onClick={() => handleDeviceSelect(device.name)}
                  >
                    {device.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className='warning-content'>
            <div className='img1'><IoRadioButtonOnOutline size="1.7em" color='red' /></div>
            <div className='content1'>
              <p className='para1'>
                {isValidDevice ? 'Device Selected' : 'Hardware Not Connected'}
              </p>
              <p className='para2'>
                {isValidDevice ? 'EVM not Connected' : 'Please plug your target device into your computer\'s USB port'}
              </p>
            </div>
          </div>
          <div className='warning-content2'>
            {isValidDevice ? 
              <p className='dev-name'>
                Device Selected:
                {filteredDevices[0].name}
              </p> :
              <>
                <div className='img2'><IoIosWarning size="1em" color='red'/></div>
                <div className='content2'>
                  <p className='para3'>Select device from the dropdown</p>
                </div>
              </>
            }
          </div>
          <div className='proceed'>
            {isValidDevice &&
              <>
                <button className='pro1' onClick={handleProceed}>Proceed</button>
                <button className='pro2'>Re-Scan</button>
              </>
            }
          </div>
        </div>
  
        {(!(isProceedState && isValidDevice)) ? 
        <div className='control-buttons'>
          <div className='row1'>
            <button className='b1' onClick={handleButtonClick}><RiUserSettingsLine className='icon' size="1.9em"/>User Guide</button>
            <button className='b2' onClick={handleButtonClick}><SiGoogledocs className='icon' size="1.9em"/>Product Page</button>
          </div>
          <div className='row2'>
            <button className='b3' onClick={handleButtonClick}><TbClipboardData className='icon' size="1.9em"/>Datasheet</button>
            <button className='b4' onClick={handleButtonClick}><TbTool className='icon' size="1.9em"/>Tool Page</button>
          </div>
          <div className='row3'>
            <button className='b5' onClick={handleButtonClick}><HiOutlineAdjustmentsHorizontal className='icon' size="1.9em"/>Tuning Guide</button>
            <button className='b6' onClick={handleButtonClick}><MdLiveHelp className='icon' size="1.9em"/>E2E Support</button>
          </div>
        </div>
        :
        <div className='proceed-buttons'>
          <div className='qsd' >
            <div className='qsi'><PiSpinnerBallFill/></div>
            <div className='pd'>
              <p className='cp1'>Quick Spin</p>
              <p className='cp2'>Get your motor spining in just few steps.</p>
            </div>
          </div>
          <div className='owd'>
            <div className='owi'><HiOutlineAdjustmentsHorizontal/></div>
              <div className='od'>
                <p className='cp1'>Optimization Wizards</p>
                <p className='cp2'>Go here after your motor spin consistently.</p>
              </div>
          </div>
          <div className='atd'>
            <div className='ati'><TbSettingsCog/></div>
              <div className='ad'>
                <p className='cp1'>Advanced Tuning</p>
                <p className='cp2'>Access all your control in one single page.</p>
              </div>
            </div>
          <div className='rmd'>
            <div className='rmi'><GoProjectRoadmap /></div>
              <div className='rd'>
                <p className='cp1'>Register Map</p>
                <p className='cp2'>Full interactive device register map.</p>
              </div>
            </div>
        </div>
        }
      </div>
      <div className='about'>
        <div className='au'>{isValidDevice ? (imageStep === 0 ? selectedDevice?.heading[0] : selectedDevice?.heading[1] ): 'About Us'}</div>
        <div className='line'>{isValidDevice ? '________' : '____'}</div>
        <div className='youtube'>
          {isValidDevice ? 
            <img className='dev-img' src={selectedDevice?.images[imageStep]} alt='device' /> :
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/fzms9dYm4-M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          }
        </div>
        <div className='description-content'>
          { isValidDevice ? (imageStep === 0 ? (<p className='para5'>{selectedDevice?.descriptions[imageStep]}</p>): <ol className='para5'>
            {selectedDevice?.descriptions[imageStep].split("\n").map((item,index)=>(
              <li key={index} >{item}</li>
            ))}
          </ol> ):
            <p className='para5'>For decades, we have operated with a passion to create a better world by making electronics more affordable through semiconductors. We were pioneers in the transition of the world from vacuum tubes to transistors and then to integrated circuits (ICs) – and we’ve been advancing IC technology and the ability to reliably produce ICs in high volumes for decades. Each generation of innovation builds upon the last to make technology smaller, more efficient, more reliable and more affordable – making it possible for semiconductors to go into electronics everywhere. We think of this as Engineering Progress. It’s what we do and have been doing for decades:The object-detection capability used in a $20 million military radar system from the 1980s is now possible using a $20 radar chip in automobiles everywhere to increase vehicle safety and reduce collisions.Home automation systems that cost tens of thousands of dollars 20 years ago are now only hundreds of dollars. Today, these systems are more accessible to homeowners and are making homes safer, more convenient and more energy efficient.Technology that previously was only used in expensive factory robotic systems is affordable enough to be integrated into home appliances, making common household tasks, like vacuuming, easier and more convenient.Our passion to create a better world by making electronics more affordable through semiconductors is alive today as we help our customers develop new applications, particularly in the industrial and automotive markets.</p>
          }
          
        </div>
        {isProceedState &&
          <div className='setup-div'>
            {/* <label className='setup-label'> */}
            <input type="checkbox" className='setup-check'/>
            {/* <span className='checked11'></span> */}
            {/* </label> */}
            <p className='setup-para'>Hardware setup has been done manually</p> 
            <button className='setup-btn'>Setup Now</button>
          </div>
        }
      </div>
    </>
  );
};

export default Home;

