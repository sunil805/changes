import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import {
  
  faDashboard,
  faUser,
  faVideoCamera,
  faTriangleExclamation,
  faFileCircleExclamation,
  faBell,
  faUserPlus,
  faAngleRight,
  faDownload,
  faRobot,
  faAppleAlt,
  faXmark,
  faBars
  
} from "@fortawesome/free-solid-svg-icons";
import img from "../Asset/stats.png";
import moment from "moment";

const Dashboard = () => {

  const [data, setdata] = useState();
  const [change, setchange] = useState(false);
  const[select , setselect] = useState(10)
  const [button , setbutton] = useState()
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const data = () => fetch(
      `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${moment(
        state[0]?.startDate
      ).format("YYYY-MM-DD")}&todate=${moment(state[0]?.endDate).format(
        "YYYY-MM-DD"
      )}&page=1&limit=${select}`
    )
      .then((res) => res.json())
      .then((res) => setdata(res));
    data()
  }, [state , select]);
  return (
    <div className="admin_page w-full h-full flex items-baseline justify-between lg:flex-row flex-col">
      <FontAwesomeIcon icon={faBars} className = "lg:hidden block pl-3 pt-5 text-white z-10 " onClick={()=>setbutton(!button)} />
      <div className="left_content hidden lg:block">
        <div className="bg-[#283046] p-3 w-[220px] h-[80vh] ">
          <div className="flex justify-between">
            <h1 className="text-blue-900 text-2xl font-[800]">WOW</h1>
            <img alt="" src={img} className="w-[20px]" />
          </div>
          <ul className="mt-4 text-white  text-sm cursor-pointer">
            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faDashboard} />
              <p className="font-[500]">Dashboard</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faUser} />
              <p className="font-[500]">WOW Users</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faVideoCamera} />
              <p className="font-[500]">Video Clips</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <p className="font-[500]">Reported Content</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faDashboard} />
              <p className="font-[500]">Category</p>
            </li>
            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg  items-center">
              <FontAwesomeIcon icon={faFileCircleExclamation} />
              <p className="font-[500]">info page</p>
            </li>
            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faDashboard} />
              <p className="font-[500]">FAQ</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faBell} />
              <p className="font-[500]">Push Notifications</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <div className="flex  space-x-7">
                <FontAwesomeIcon icon={faUserPlus} />

                <p className="font-[500]">Internal User</p>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
            </li>
          </ul>
        </div>
      </div>


      {
!button ? ""  : <div className="left_content absolute">
<div className="bg-[#283046] p-3 w-[220px] h-[80vh] ">
  <div className="flex justify-between ">
    <h1 className="text-blue-900 text-2xl font-[800] w-full pl-5">WOW</h1>
    <img alt="" src={img} className="w-[20px]" />
  </div>
  <ul className="mt-4 text-white  text-sm cursor-pointer">
    <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
      <FontAwesomeIcon icon={faDashboard} />
      <p className="font-[500]">Dashboard</p>
    </li>

    <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
      <FontAwesomeIcon icon={faUser} />
      <p className="font-[500]">WOW Users</p>
    </li>

    <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
      <FontAwesomeIcon icon={faVideoCamera} />
      <p className="font-[500]">Video Clips</p>
    </li>

    <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
      <FontAwesomeIcon icon={faTriangleExclamation} />
      <p className="font-[500]">Reported Content</p>
    </li>

    <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
      <FontAwesomeIcon icon={faDashboard} />
      <p className="font-[500]">Category</p>
    </li>
    <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg  items-center">
      <FontAwesomeIcon icon={faFileCircleExclamation} />
      <p className="font-[500]">info page</p>
    </li>
    <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
      <FontAwesomeIcon icon={faDashboard} />
      <p className="font-[500]">FAQ</p>
    </li>

    <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
      <FontAwesomeIcon icon={faBell} />
      <p className="font-[500]">Push Notifications</p>
    </li>

    <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
      <div className="flex  space-x-7">
        <FontAwesomeIcon icon={faUserPlus} />

        <p className="font-[500]">Internal User</p>
      </div>
      <FontAwesomeIcon icon={faAngleRight} />
    </li>
  </ul>
</div>
</div>

      }
      <div className="right_content flex  w-full mt-5 gap-5 flex-col lg:ml-7 ml-0 lg:p-0  px-4  ">
        <div className="bg-[#283046] lg:w-[1250px] w-full lg:h-[238px] h-[80vh] ">
          <div className="flex items-center w-full justify-center lg:pt-10 pt-5 lg:pl-10 p-5 ">
            <div className="flex flex-col w-full ">
              <div className=" flex justify-between lg:w-[80%] w-full  lg:flex-row flex-col space-y-5">
                <div className="flex space-x-5 items-center">
                  <div className="w-[63px] h-[63px] bg-white flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="w-[36px] h-[36px]"
                    />
                  </div>
                  <div className="w-full">
                    <div className="font-[20px]  text-white">3154</div>
                    <span className="font-[10px] text-white">
                      App installed
                    </span>
                  </div>
                </div>
                <div className="flex space-x-5 items-center">
                  <div className="w-[63px] h-[63px] bg-white flex items-center justify-center rounded-full"></div>
                  <div className="w-full">
                    <div className="font-[20px]  text-white">900</div>
                    <span className="font-[10px] text-white">
                      Active installed
                    </span>
                  </div>
                </div>
                <div className="flex space-x-5 items-center">
                  <div className="w-[63px] h-[63px] bg-white flex items-center justify-center rounded-full"></div>
                  <div className="w-full">
                    <div className="font-[20px]  text-white">14.85%</div>
                    <span className="font-[10px] text-white">Churn Rate</span>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between w-full mt-5 lg:w-[80%]   lg:flex-row flex-col space-y-5">
                <div className="flex space-x-5 items-center">
                  <div className="w-[63px] h-[63px] bg-white flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="w-[36px] h-[36px]"
                    />
                  </div>
                  <div className="w-full">
                    <div className="font-[20px]  text-white">3154</div>
                    <span className="font-[10px] text-white">
                      App installed
                    </span>
                  </div>
                </div>
                <div className="flex space-x-5 items-center">
                  <div className="w-[63px] h-[63px] bg-white flex items-center justify-center rounded-full"></div>
                  <div className="w-full">
                    <div className="font-[20px]  text-white">900</div>
                    <span className="font-[10px] text-white">
                      Active installed
                    </span>
                  </div>
                </div>
                <div className="flex space-x-5 items-center">
                  <div className="w-[63px] h-[63px] bg-white flex items-center justify-center rounded-full"></div>
                  <div className="w-full">
                    <div className="font-[20px]  text-white">14.85%</div>
                    <span className="font-[10px] text-white">Churn Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#283046] lg:w-[1250px] w-full p-2">
          <div className=" flex justify-between">
            <div className="space-x-4 capitalize ">
              <span className="text-white">show</span>
              <select className="border border-gray-700 bg-[#161C32] w-16 rounded-md text-white cursor-pointer" onChange={(e)=>setselect(e.target.value)}>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
              </select>
              <sapn className="text-white">Entries</sapn>
            </div>

            <span
              className="border border-gray-700 bg-[#161C32] py-1 px-2 text-white rounded-md w-48 capitalize cursor-pointer "
              onClick={() => setchange(!change)}
            >
              select diration
            </span>

            {/* date picker */}

            {!change ? (
              ""
            ) : (
              <div className="date  right-6 top-80 absolute bg-[#283046] flex justify-between p-5 border border-blue-700 space-x-4">
                <DateRangePicker
                  onChange={(item) => {
                    setState([item.selection]);
                  }}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                  className=""
                />
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-white cursor-pointer"
                  onClick={() => setchange()}
                />
              </div>
            )}
            {/* {} */}
          </div>

          <div>
            <div className=" bg-[#271C1C]  border border-gray-500  mt-4 ">
              <ul className="  flex justify-between py-2 lg:pl-10 p-2 lg:text-[12px]  text-[5px] text-white lg:w-[90%] w-full">
                <li>Day</li>
                <li>Days install</li>
                <li>plateform</li>
                <li>Days uinstalls</li>
                <li>Plateform</li>
                <li>Churn Rate</li>
                <li>Churn plateform</li>
              </ul>
            </div>
          
          <div>
          {data?.data?.data?.map((data, index) => {
              console.log(data, "hv");
              return (
                <>
                <div className="text-[12px] flex justify-between  w-[90%] mt-4 text-white items-center">
                  <span>{moment(data.created_At).format("YYYY-MM-DD")}</span>
                  <span className="w-[30px]">{data.totalinstall}</span>
                  <div className="flex flex-col items-baseline w-[80px]">
                    <div className="space-x-2">
                      <FontAwesomeIcon icon={faRobot} />
                      <span>{data.android_install}</span>
                    </div>
                    <div className="space-x-2">
                      <FontAwesomeIcon icon={faAppleAlt} />
                      <span>{data.ios_install}</span>
                    </div>
                  </div>
                  <span className="w-[30px]">{data.totaluninstall}</span>

                  <div className="flex flex-col items-baseline w-[80px]">
                    <div className="space-x-2">
                      <FontAwesomeIcon icon={faRobot} />
                      <span>{data.android_uninstall}</span>
                    </div>
                    <div className="space-x-2">
                      <FontAwesomeIcon icon={faAppleAlt} />
                      <span>{data.ios_uninstall}</span>
                    </div>
                  </div>

                  <span className="w-[30px]">{data.totalchurn}</span>

                  <div className="flex flex-col items-baseline w-[80px]">
                    <div className="space-x-2">
                      <FontAwesomeIcon icon={faRobot} />
                      <span>{data.android_churn}%</span>
                    </div>
                    <div className="space-x-2">
                      <FontAwesomeIcon icon={faAppleAlt} />
                      <span>{data.ios_churn}%</span>
                    </div>
                  </div>
                  
                </div>
                <hr className="mt-2 bg-gray-400" />
                </>
                
              );
            })}
              
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
