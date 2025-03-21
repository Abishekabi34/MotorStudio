import React from 'react';
import { useState } from 'react';
import './MPET.css';
import { IoChevronBackCircle, IoChevronDown } from 'react-icons/io5';

const MPET = () => {

  const [isOpen, setIsOpen]=useState(false);
  const [selectedValue,setSelectedValue]=useState<string>("");

  const handleSelect = (value:string) =>{
    setSelectedValue(value);
    setIsOpen(false);
  }

  const busVoltage=["15V","30V","60V","Not defined"];
  const IPDSettings=["0.25A"," 0.5A" ,"0.75A", "1.0A", "1.25A", "1.5A", "2.0A" ,"2.5A", "3.0A", "3.667A", "5.0A", "5.333A" ,"6.0A" ,"6.667A" ,"7.333A", "8.0A", "Not Applicable"];
  const IPDParameter=["1 time","2 times","3 times","4 times"];
  const openLoopSetting=["0.01 Hz/s","0.05 Hz/s","1 Hz/s","2.5 Hz/s","5 Hz/s","10 Hz/s","25 Hz/s","50 Hz/s","75 Hz/s","100 Hz/s","250 Hz/s","500 Hz/s","750 Hz/s","1000 Hz/s","5000 Hz/s","10000 Hz/s"];
  const MPETOpenLoop=["0.00 Hz/s2","0.05 Hz/s2","1 Hz/s2","2.5 Hz/s2","5 Hz/s2","10 Hz/s2","25 Hz/s2","50 Hz/s2","75 Hz/s2","100 Hz/s2","250 Hz/s2","500 Hz/s2","750 Hz/s2","1000 Hz/s2","5000 Hz/s2","10000 Hz/s2"];
  const ClosedLoop=["0.125A","0.25A","0.5A","1.0A","1.5A","2.0A","2.5A","3.0A","3.5A","4.0A","4.5A","5.0A","5.5A","6.0A","7.0A","8.0A"];
  return (
    <div className='container'>
      <div className='mpet-container'>
        <div className='mpet-title-div'>
          <p className='mpet-titles'>Motor Parameter Extraction Tool (MPET)</p>
        </div>
        <div className='content-container'>
          <div className='content-1'>
            <p className='mpp'>Motor Parameters</p>
            <div className='mppafter'></div>
            <div className='whole-div'>
              <p className='ssp com'>System Settings</p>
              <div className='input-group'>
                <input type='text' className='mpin' placeholder='1.000' />
                <input 
                  type="text"
                  className='mpet-com-input mpet-com-input2'
                  value={selectedValue}
                  readOnly
                  onClick={()=>setIsOpen(!isOpen)}
                />
                <IoChevronDown
                  className='mpet-drop-icon'
                  onClick={()=>setIsOpen(!isOpen)}
                  size={16}
                />
                {isOpen && (
                  <div className='mpet-dropdown1' >
                    {IPDSettings.map((value,index)=>(
                      <div key={index} className='mpet-dropdown2-list1' onClick={()=> handleSelect(value)}>
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='ipds'>
                <p className='mpp1 com'>IPD Settings</p>
                <div>
                  <p className='ipd2 com'>MPET IPD Parameter Select</p>
                </div>
              </div>
              <div className='input-group'>
                <input 
                  type="text"
                  className='mpet-com-input '
                  value={selectedValue}
                  readOnly
                  onClick={()=>setIsOpen(!isOpen)}
                />
                <IoChevronDown
                  className='mpet-drop-icon'
                  onClick={()=>setIsOpen(!isOpen)}
                  size={16}
                />
                {isOpen && (
                  <div className='mpet-dropdown2' >
                    {busVoltage.map((value,index)=>(
                      <div key={index} className='mpet-dropdown2-list2' onClick={()=> handleSelect(value)}>
                        {value}
                      </div>
                    ))}
                  </div>
                )}
                <input 
                  type="text"
                  className='mpet-com-input mpet-com-input2'
                  value={selectedValue}
                  readOnly
                  onClick={()=>setIsOpen(!isOpen)}
                />
                <IoChevronDown
                  className='mpet-drop-icon'
                  onClick={()=>setIsOpen(!isOpen)}
                  size={16}
                />
                {isOpen && (
                  <div className='mpet-dropdown3' >
                    {IPDParameter.map((value,index)=>(
                      <div key={index} className='mpet-dropdown2-list3' onClick={()=> handleSelect(value)}>
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='ipds'>
                <p className='mpp2 com'>Open Loop Settings</p>
                <div>
                  <p className='paramres com'>MPET open loop parameter resistance</p>
                </div>
              </div>
              <div className='input-group'>
              <input 
                  type="text"
                  className='mpet-com-input'
                  value={selectedValue}
                  readOnly
                  onClick={()=>setIsOpen(!isOpen)}
                />
                <IoChevronDown
                  className='mpet-drop-icon'
                  onClick={()=>setIsOpen(!isOpen)}
                  size={16}
                />
                {isOpen && (
                  <div className='mpet-dropdown4' >
                    {openLoopSetting.map((value,index)=>(
                      <div key={index} className='mpet-dropdown2-list2' onClick={()=> handleSelect(value)}>
                        {value}
                      </div>
                    ))}
                  </div>
                )}
                <input 
                  type="text"
                  className='mpet-com-input  mpet-com-input2'
                  value={selectedValue}
                  readOnly
                  onClick={()=>setIsOpen(!isOpen)}
                />
                <IoChevronDown
                  className='mpet-drop-icon'
                  onClick={()=>setIsOpen(!isOpen)}
                  size={16}
                />
                {isOpen && (
                  <div className='mpet-dropdown5' >
                    {MPETOpenLoop.map((value,index)=>(
                      <div key={index} className='mpet-dropdown2-list2' onClick={()=> handleSelect(value)}>
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className='mpp3 com'>Closed Loop Settings</p>
              <div className='input-group'>
              <input 
                  type="text"
                  className='mpet-com-input '
                  value={selectedValue}
                  readOnly
                  onClick={()=>setIsOpen(!isOpen)}
                />
                <IoChevronDown
                  className='mpet-drop-icon'
                  onClick={()=>setIsOpen(!isOpen)}
                  size={16}
                />
                {isOpen && (
                  <div className='mpet-dropdown6' >
                    {ClosedLoop.map((value,index)=>(
                      <div key={index} className='mpet-dropdown2-list2' onClick={()=> handleSelect(value)}>
                        {value}
                      </div>
                    ))}
                  </div>
                )}
                
              </div>
              <div className='grayline-mpet'></div>
              <p className='mpp4'>MPET Select</p>
              <div className='mpetselect-redline'></div>
              <div className='mpet-textcontent'>
                {['Measure Motor Resistance', 'Measure Motor Inductance', 'Measure Motor BEMF Constant', 'Measure Motor Mechanical Parameter'].map((label, index) => (
                  <div key={index} className='mpet-option'>
                    <span>{label}</span>
                    <label className='switch'>
                      <input type='checkbox' />
                      <span className='slider1'></span>
                    </label>
                  </div>
                ))}
              </div>
              <button className='rmpetbtn'>Run MPET</button>
            </div>
          </div>
            <div className='content-2'>
              <div className='resultsec-div'>
                <div>Result Section</div>
                <div className='result-sec-redline'></div>
                <div className='result-sec-content2'>
                  <div className='mpet-res-content1'>
                    <p className='mpet-mpetresults'>MPET Results</p>
                    <div className='mpet-result-container'>
                      <div className='mpet-motor-resistance'>
                        <div>
                          <p>MPET motor resistance</p>
                          <div className='mpetmrdiv'>
                          <input type="text" readOnly placeholder='0.000'/>
                          <p className='pppp'>Ohm</p>
                          </div>
                        </div>
                      </div>
                      <div className='mpet-motor-inductance'>
                      <div>
                          <p className='ki'>MPET motor inductance</p>
                          <div className='mpetmrdiv'>
                          <input type="text" readOnly placeholder='0.000'/>
                          <p className='pppp'>L</p>
                          </div>
                        </div>
                      </div>
                      <div className='mpet-motor-bemf'>
                      <div>
                          <p className='ki'>MPET motor BMEF constant</p>
                          <div className='mpetmrdiv'>
                          <input type="text" readOnly placeholder='0.000'/>
                          <p className='pppp'>mV/Hz</p>
                          </div>
                        </div>
                      </div>
                      <div className='kp-coefficient'>
                      <div>
                          <p className='ki'>Kp coefficient for speed loop</p>
                          <div className='mpetmrdiv'>
                          <input type="text" readOnly placeholder='0.000'/>
                          </div>
                        </div>
                      </div>
                      <div className='ki-coefficient'>
                      <div>
                          <p className='ki'>Ki coefficient for speed loop</p>
                          <div className='mpetmrdiv'>
                          <input type="text" readOnly placeholder='0.000'/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mpet-res-grayline'></div>
                  <div className='mpet-res-content2'>
                    <p className='mpet-configuredvalues'>Configured Values</p>
                    <div className='mpet-configuredvalues-container'>
                      <div className='motor-phase-resistance'>
                      <div>
                          <p>Motor Phase Resistance</p>
                          <div className='mpetcvmr'>
                          <input type="text" readOnly placeholder='0.000'/>
                          <p className='pppp'>Ohm</p>
                          </div>
                        </div>
                      </div>
                      <div className='motor-phase-inductance'>
                      <div>
                          <p>Motor Phase Inductance</p>
                          <div className='mpetcvmr'>
                          <input type="text" readOnly placeholder='0.000'/>
                          <p className='pppp'>mH</p>
                          </div>
                        </div>
                      </div>
                      <div className='motor-bemf-constant'>
                      <div>
                          <p>Motor BEMF Constant</p>
                          <div className='mpetcvmr'>
                          <input type="text" readOnly placeholder='0.000'/>
                          <p className='pppp'>mV/Hz</p>
                          </div>
                        </div>
                      </div>
                      <div className='cv-kp-coeff'>
                      <div>
                          <p className='ki'>Kp coefficient for speed loop</p>
                          <div className='mpetcvmr'>
                          <input type="text" readOnly placeholder='0.000'/>
                          </div>
                        </div>
                      </div>
                      <div className='cv-ki-coeff'>
                      <div>
                          <p className='ki'>Ki coefficient for speed loop</p>
                          <div className='mpetcvmr'>
                          <input type="text" readOnly placeholder='0.000'/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='mpet-result-btn'>Write MPET Results To Shadow Registers</button>
              </div>
              <div className='mpet-logs-div'>
                <p className='mpet-logs-p1'>Logs</p>
                <p className='mpet-logs-p2'>No Logs available</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MPET;



// import React from 'react';
// import { useState } from 'react';
// import './MPET.css';
// import { IoChevronDown } from 'react-icons/io5';

// const MPET = () => {

//   const [isOpen, setIsOpen]=useState<{[key:string]:boolean}>({});
//   const [selectedValues,setSelectedValues]=useState<{[key:string]:string}>({    busVoltage: "",
//     IPDSettings: "",
//     IPDParameter: "",
//     openLoopSetting: "",
//     MPETOpenLoop: "",
//     ClosedLoop: "",});

//   const handleSelect = (key:string,value:string) =>{
//     setSelectedValues(prev =>({...prev,[key]:value}));
//     setIsOpen(prev =>({...prev,[key]:false}));
//   }

//   const toggleDropdown = (key: string) => {
//     setIsOpen(prev => ({ ...prev, [key]: !prev[key] }));
//   };

//   const busVoltage=["15V","30V","60V","Not defined"];
//   const IPDSettings=["0.25A"," 0.5A" ,"0.75A", "1.0A", "1.25A", "1.5A", "2.0A" ,"2.5A", "3.0A", "3.667A", "5.0A", "5.333A" ,"6.0A" ,"6.667A" ,"7.333A", "8.0A", "Not Applicable"];
//   const IPDParameter=["1 time","2 times","3 times","4 times"];
//   const openLoopSetting=["0.01 Hz/s","0.05 Hz/s","1 Hz/s","2.5 Hz/s","5 Hz/s","10 Hz/s","25 Hz/s","50 Hz/s","75 Hz/s","100 Hz/s","250 Hz/s","500 Hz/s","750 Hz/s","1000 Hz/s","5000 Hz/s","10000 Hz/s"];
//   const MPETOpenLoop=["0.00 Hz/s2","0.05 Hz/s2","1 Hz/s2","2.5 Hz/s2","5 Hz/s2","10 Hz/s2","25 Hz/s2","50 Hz/s2","75 Hz/s2","100 Hz/s2","250 Hz/s2","500 Hz/s2","750 Hz/s2","1000 Hz/s2","5000 Hz/s2","10000 Hz/s2"];
//   const ClosedLoop=["0.125A","0.25A","0.5A","1.0A","1.5A","2.0A","2.5A","3.0A","3.5A","4.0A","4.5A","5.0A","5.5A","6.0A","7.0A","8.0A"];
//   return (
//     <div className='container'>
//       <div className='mpet-container'>
//         <div className='mpet-title-div'>
//           <p className='mpet-titles'>Motor Parameter Extraction Tool (MPET)</p>
//         </div>
//         <div className='content-container'>
//           <div className='content-1'>
//             <p className='mpp'>Motor Parameters</p>
//             <div className='mppafter'></div>
//             {/* Dropdown Input Fields */}
//             {[
//               { label: "Bus Voltage", key: "busVoltage", options: busVoltage },
//               { label: "IPD Settings", key: "IPDSettings", options: IPDSettings },
//               { label: "IPD Parameter", key: "IPDParameter", options: IPDParameter },
//               { label: "Open Loop Setting", key: "openLoopSetting", options: openLoopSetting },
//               { label: "MPET Open Loop", key: "MPETOpenLoop", options: MPETOpenLoop },
//               { label: "Closed Loop Settings", key: "ClosedLoop", options: ClosedLoop },
//             ].map(({ label, key, options }) => (
//               <div className="input-group" key={key}>
//                 <p className="mpp1 com">{label}</p>
//                 <div style={{ position: "relative", width: "200px" }}>
//                   <input
//                     type="text"
//                     className="mpet-com-input"
//                     value={selectedValues[key]}
//                     readOnly
//                     onClick={() => toggleDropdown(key)}
//                   />
//                   <IoChevronDown className="mpet-drop-icon" onClick={() => toggleDropdown(key)} size={16} />
//                   {isOpen[key] && (
//                     <div className="mpet-dropdown" style={{ position: "absolute", width: "100%", border: "1px solid black", background: "white" }}>
//                       {options.map((value, index) => (
//                         <div key={index} className="mpet-dropdown-list" onClick={() => handleSelect(key, value)} style={{ padding: "5px", cursor: "pointer" }}>
//                           {value}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//               </div>
//               <div className='grayline-mpet'></div>
//               <p className='mpp4'>MPET Select</p>
//               <div className='mpetselect-redline'></div>
//               <div className='mpet-textcontent'>
//                 {['Measure Motor Resistance', 'Measure Motor Inductance', 'Measure Motor BEMF Constant', 'Measure Motor Mechanical Parameter'].map((label, index) => (
//                   <div key={index} className='mpet-option'>
//                     <span>{label}</span>
//                     <label className='switch'>
//                       <input type='checkbox' />
//                       <span className='slider1'></span>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//               <button className='rmpetbtn'>Run MPET</button>
//             </div>
//           </div>
//             <div className='content-2'>
//               <div className='resultsec-div'>
//                 <div>Result Section</div>
//                 <div className='result-sec-redline'></div>
//                 <div className='result-sec-content2'>
//                   <div className='mpet-res-content1'>
//                     <p className='mpet-mpetresults'>MPET Results</p>
//                     <div className='mpet-result-container'>
//                       <div className='mpet-motor-resistance'>
//                         <div>
//                           <p>MPET motor resistance</p>
//                           <div className='mpetmrdiv'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           <p className='pppp'>Ohm</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className='mpet-motor-inductance'>
//                       <div>
//                           <p className='ki'>MPET motor inductance</p>
//                           <div className='mpetmrdiv'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           <p className='pppp'>L</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className='mpet-motor-bemf'>
//                       <div>
//                           <p className='ki'>MPET motor BMEF constant</p>
//                           <div className='mpetmrdiv'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           <p className='pppp'>mV/Hz</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className='kp-coefficient'>
//                       <div>
//                           <p className='ki'>Kp coefficient for speed loop</p>
//                           <div className='mpetmrdiv'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           </div>
//                         </div>
//                       </div>
//                       <div className='ki-coefficient'>
//                       <div>
//                           <p className='ki'>Ki coefficient for speed loop</p>
//                           <div className='mpetmrdiv'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='mpet-res-grayline'></div>
//                   <div className='mpet-res-content2'>
//                     <p className='mpet-configuredvalues'>Configured Values</p>
//                     <div className='mpet-configuredvalues-container'>
//                       <div className='motor-phase-resistance'>
//                       <div>
//                           <p>Motor Phase Resistance</p>
//                           <div className='mpetcvmr'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           <p className='pppp'>Ohm</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className='motor-phase-inductance'>
//                       <div>
//                           <p>Motor Phase Inductance</p>
//                           <div className='mpetcvmr'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           <p className='pppp'>mH</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className='motor-bemf-constant'>
//                       <div>
//                           <p>Motor BEMF Constant</p>
//                           <div className='mpetcvmr'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           <p className='pppp'>mV/Hz</p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className='cv-kp-coeff'>
//                       <div>
//                           <p className='ki'>Kp coefficient for speed loop</p>
//                           <div className='mpetcvmr'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           </div>
//                         </div>
//                       </div>
//                       <div className='cv-ki-coeff'>
//                       <div>
//                           <p className='ki'>Ki coefficient for speed loop</p>
//                           <div className='mpetcvmr'>
//                           <input type="text" readOnly placeholder='0.000'/>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <button className='mpet-result-btn'>Write MPET Results To Shadow Registers</button>
//               </div>
//               <div className='mpet-logs-div'>
//                 <p className='mpet-logs-p1'>Logs</p>
//                 <p className='mpet-logs-p2'>No Logs available</p>
//               </div>
//             </div>
//         </div>
//   );
// };

// export default MPET;