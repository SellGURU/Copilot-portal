/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import TestPage from "../../api/TestPage"
import FormLabel from "../Base/FormLabel"
import { Tooltip } from 'react-tooltip'
import {BeatLoader} from "react-spinners";
import ImageUploadr from "../UploadImage"
interface AdditinalBoxProps {
   setAditinalData:(additinalData:any) =>void
   additinalData:any
   isLoading:boolean
   chats:Array<ChatType>
   additinalDataResolves:Array<any>,
   setAdditinalDataResolved:(data:Array<any>) => void   
   sendToApi:() =>void
   getRefrences: (chat:ChatType) => void
}

const AdditinalBox:React.FC<AdditinalBoxProps> = ({setAditinalData,isLoading,getRefrences,sendToApi,chats,additinalData,additinalDataResolves,setAdditinalDataResolved}) => {
    const [showAdditinal,setShowAdditinal] = useState(false)
    const testPageApi = new TestPage()
    const getAdditionalData = () => {
        testPageApi.additinalData(
            (res) => {
            if (res.data.additional_data) {
              setAditinalData(res.data.additional_data);
            //   console.log(res.data.additional_data["AI Generated"])
              if(res.data.additional_data["AI Generated"]){
                    makeAdditinaljson(
                            "AI Generated",
                            'True'
                    );
              }
              setShowAdditinal(true)
            }
            }
        );        
    }  
    const [files,setFiles] = useState<any>([])
    // const resolveSassionName = () => {
    //     const date = new Date();
    //     const yers = date.getFullYear();
    //     const month = date.getMonth() + 1;
    //     const day = date.getDate();
    //     return "Test_" + yers + "_" + month + "_" + day;
    // };    
    const makeAdditinaljson = (key: string, value: any) => {
        const resolved: Array<any> = additinalDataResolves;
        resolved.forEach((item: any) => {
        if (item.key == key) {
            item.value = value;
        }
        });
        if (resolved.length == 0) {
        resolved.push({
            key: key,
            value: value,
        });
        } else {
        const keys = resolved.map((item) => item.key);
        if (!keys.includes(key)) {
            resolved.push({
            key: key,
            value: value,
            });
        }
        }
        setAdditinalDataResolved(resolved);
        // resolveAdditinalJsonForApi();
    };        
    useEffect(() => {
        const chatbox = document.getElementById('chat'+ (chats.length -1))
        if(chatbox){
            chatbox.scrollIntoView({behavior:'smooth',block:'start',inline:'start'})
            // chatbox.scrollTop = chatbox.scrollHeight;
        }
    },[chats])
    return (
        <>
            {
                showAdditinal?
                    <>
                        <div className="bg-white w-[313px] h-[355px] shadow-lg mb-2 border border-[#F0F0F0] rounded-[18px]">
                            <div className="text-[#3C3744] font-medium px-6 pt-4">
                                New Session
                            </div>
                            <hr className="my-4" />
                            <div className="px-4 ">
                              <div className="h-[220px] overflow-y-scroll chatBoxScroolBar">
                            {/* <div className="col-span-12 mb-4 px-[21px]">
                                <FormLabel
                                    htmlFor="modal-form-1"
                                    className="text-[14px]  leading-[19.12px] font-[500] text-[#3C3744]"
                                >
                                    <div>Session Name</div>
                                </FormLabel>
                                <div className="flex items-center -mt-1 w-full">
                                    <input
                                    placeholder={resolveSassionName()}
                                    // onChange={(event) => {
                                    //     makeAdditinaljson(
                                    //     "session_name",
                                    //     event.target.value
                                    //     );
                                    // }}
                                    className="w-full border rounded-lg h-[40px] text-sm px-[16px]"
                                    />
                                </div>
                            </div>                              */}
                              {Object.entries(additinalData).map((item) => {
                                const [key, value]: [string, any] = item;
                                return (
                                    <>
                                    {value == "str" ? (
                                        <div className="col-span-12 mb-4 px-[21px]">
                                        <FormLabel
                                            htmlFor="modal-form-1"
                                            className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                        >
                                            {/* <StarText text={key} /> */}
                                            {key}
                                        </FormLabel>
                                        <div className="flex items-center -mt-1 w-full">
                                            <input
                                            onChange={(event) => {
                                                makeAdditinaljson(
                                                key,
                                                event.target.value
                                                );
                                            }}
                                            className="w-full border rounded-lg h-[40px] text-sm px-[16px]"
                                            />
                                        </div>
                                        </div>
                                    ) : undefined}
                                    {value == "textarea" ? (
                                        <div className="col-span-12 mb-4 px-[21px]">
                                        <FormLabel
                                            htmlFor="modal-form-1"
                                            className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                        >
                                            {/* <StarText text={key} /> */}
                                            {key}
                                        </FormLabel>
                                        <div className="flex items-center -mt-1 w-full">
                                            <textarea
                                            onChange={(event) => {
                                                makeAdditinaljson(
                                                key,
                                                event.target.value
                                                );
                                            }}
                                            className="w-full border-[1px] border-[#000000]/10
                                                focus:ring-0 focus:outline-none focus:border-[#000000]/10 placeholder:text-[14px] placeholder:font-[100] placeholder:text-[#92a7c1]/60 placeholder:leading-[19.12px] text-[#3C3744] font-[400] text-[14px] rounded-lg h-[100px] text-sm px-[16px]"
                                            />
                                        </div>
                                        </div>
                                    ) : undefined}
                                    {value.includes("int") ? (
                                        <div className="col-span-12 mb-4 px-[21px]">
                                        <FormLabel
                                            htmlFor="modal-form-1"
                                            className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                        >
                                            {/* <StarText text={key} /> */}
                                            <div>{key}</div>
                                        </FormLabel>
                                        <div className="flex items-center -mt-1 w-full">
                                            <input
                                            onChange={(event) => {
                                                makeAdditinaljson(
                                                key,
                                                event.target.value
                                                );
                                            }}
                                            {...value.replace('int','')}
                                            type="number"
                                            min={1}
                                            className="w-full rounded-[5px] px-4 h-[40px]
                                                    border-[1px] border-[#000000]/10
                                                focus:ring-0 focus:outline-none focus:border-[#000000]/10 placeholder:text-[14px] placeholder:font-[100] placeholder:text-[#92a7c1]/60 placeholder:leading-[19.12px] text-[#3C3744] font-[400] text-[14px]"
                                            />
                                        </div>
                                        </div>
                                    ) : undefined}
                                    {value == "float" ? (
                                        <div className="col-span-12 mb-4 px-[21px]">
                                        <FormLabel
                                            htmlFor="modal-form-1"
                                            className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                        >
                                            {/* <StarText text={key} /> */}
                                            <div>{key}</div>
                                        </FormLabel>
                                        <div className="flex items-center -mt-1 w-full">
                                            <input
                                            onChange={(event) => {
                                                makeAdditinaljson(
                                                key,
                                                event.target.value
                                                );
                                            }}
                                            type="number"
                                            step="0.01"
                                            min={1}
                                            className="w-full h-10 rounded-[5px] 
                                                    border-[1px] border-[#000000]/10
                                                focus:ring-0 focus:outline-none focus:border-[#000000]/10 placeholder:text-[14px] placeholder:font-[100] placeholder:text-[#92a7c1]/60 placeholder:leading-[19.12px] text-[#3C3744] font-[400] text-[14px]"
                                            />
                                        </div>
                                        </div>
                                    ) : undefined}
                                    {!value.includes("int") &&
                                    value != "str" &&
                                    value != "float" &&
                                    value != "textarea" ? (
                                        <div className="col-span-12 mb-4  px-[21px]">
                                        <FormLabel
                                            htmlFor="modal-form-3"
                                            className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                        >
                                            {/* <StarText text={key}/> */}
                                            <div>{key}</div>
                                        </FormLabel>
                                        <div className="flex -mt-1  items-center w-full">
                                            <select
                                            className={`w-full h-10 rounded-[5px] 
                                                    border-[1px] border-[#000000]/10
                                                focus:ring-0 focus:outline-none focus:border-[#000000]/10 placeholder:text-[14px] placeholder:font-[100] placeholder:text-[#92a7c1]/60 placeholder:leading-[19.12px] text-[#3C3744] font-[400] text-[14px]`}
                                            style={{
                                                boxShadow:
                                                "0px 2px 2px rgba(0, 0, 0, 0.05)",
                                            }}
                                            id="modal-form-3"
                                            onChange={(event) => {
                                                makeAdditinaljson(
                                                key,
                                                event.target.value
                                                );
                                            }}
                                            >
                                            {key != "AI Generated"?
                                             <option value={""}>not selected</option>
                                            :undefined}
                                            {value.map((ite: any) => {
                                                return (
                                                <option className="" value={ite}>
                                                    {ite}
                                                </option>
                                                );
                                            })}
                                            </select>
                                        </div>
                                        </div>
                                    ) : undefined}
                                    </>
                                );
                              })}    
                                <div className="px-[16px]">                               
                                    <ImageUploadr value={files} uploades={(val) =>{
                                        setFiles(val)
                                    }} mod="files" label="Upload File" ></ImageUploadr>   

                                </div>
                              </div>

                              <button onClick={() => {
                                sendToApi()
                                setShowAdditinal(false)
                                }} className="bg-[#3B34A4] w-full h-[44px] text-white rounded-[8px] text-sm">Save</button>

                            </div>
                        </div>
                    </>
                :undefined
            }
            {
                !showAdditinal && chats.length > 0 ?
                    <div  className="bg-white w-[313px] px-3  pb-5 h-[355px] shadow-lg mb-2 pt-2 border border-[#F0F0F0] rounded-[18px]">
                        <div id="chatbox-sassions" className="chatBoxScroolBar h-full px-2 overflow-x-hidden overflow-y-scroll">
                            {chats.map((item:ChatType,index:number) => {
                                console.log(item)
                                return (
                                    <>
                                    {item.from == 'Ai' ?
                                    <div id={"chat"+index} className='flex w-full '>
                                        <div className="bg-[#6432C933] max-w-[247px] rounded-[18px] rounded-tl-[0px] p-5 pt-4 text-xs leading-5 text-[#1A202C]">
                                            {item.text}
                                        </div>
                                        <div className="w-7">
                                            <div data-tooltip-id={"info-tooltip"+index} className='ml-2 w-6 h-6'>
                                                <img onClick={() => {
                                                    // getRefrences(item)
                                                }
                                                    } className='cursor-pointer max-w-5 ' src="./icons/info-circle.svg" alt="" />
                                            </div>                                        
                                            <div className='ml-2 mt-2 w-6 h-6'>
                                                <img onClick={() => {
                                                    getRefrences(item)
                                                }
                                                    } className='cursor-pointer max-w-5  ' src="./icons/export.svg" alt="" />
                                            </div>


                                        </div>
                                        <Tooltip
                                        opacity={"98%"}
                                        style={{
                                            zIndex: 50,
                                            backgroundColor: "white",
                                            color: "#3C3744",
                                            boxShadow: "0px 0px 6px 1px rgba(0, 0, 0, 0.2)",
                                        }}
                                        render={() => (
                                            <div>
                                            {item.additinalData.map((item) => {
                                                return (
                                                <>
                                                    <div className="text-[#3C3744] mt-2 flex text-[12px]">
                                                    <div className="opacity-80">{item.key}</div>{" "}
                                                    <span>:{item.value}</span>
                                                    </div>
                                                </>
                                                );
                                            })}
                                            </div>
                                        )}
                                        place="right-end"
                                        id={"info-tooltip"+index}
                                        />
                                    </div>
                                    :
                                    <div className=" max-w-[247px] rounded-[18px] rounded-tl-[0px] p-5 pt-4 text-xs leading-5 text-[#1A202C]">
                                        {item.text}
                                    </div>                        
                                    }
                                    
                                    </>
                                )
                            })}
                            {
                                isLoading ?
                                    <div className="bg-[#6432C933] max-w-[247px] rounded-[18px] rounded-tl-[0px] p-2 pt-4 text-xs leading-5 text-[#1A202C]">
                                        <BeatLoader size={10} color="#6432C9" />
                                    </div>                            
                                :
                                undefined
                            }

                        </div>
                    </div>
                :
                 undefined
            }
            <div onClick={() => {
              if(!showAdditinal){
                getAdditionalData()
              }else{
                setShowAdditinal(false)
              }
              }} className="w-16 h-16 flex justify-center cursor-pointer items-center bg-[#3B34A4] rounded-full">
                <img src={!showAdditinal? './icons/Add.svg':'./icons/arrow-down.svg'} alt="" />
            </div>
        </>
    )
} 

export default AdditinalBox