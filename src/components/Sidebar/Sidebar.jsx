/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Sidebar = () => {

    const [extendSideBar, setExtendSideBar] = useState(false)
    const {onSent, previousPrompt, setRecentPrompt, newChat} =  useContext(Context)

    const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt)
    }

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExtendSideBar(!extendSideBar)} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extendSideBar? <p>New Chat</p> : null }
        </div>
        {
            extendSideBar? 
            <div className="recent">
            <p className="recent-title">Recent</p>
            {
              previousPrompt.map((item, index)=>{
                return(
                  <div onClick={()=>loadPrompt(item)} key={index} className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 18)} ...</p>
            </div>
                )
              })
            }
            
        </div> : null
        }
        
      </div>
      <div className="bottom">


        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extendSideBar? <p>Help</p> : null}
        </div>


        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extendSideBar?<p>Activity</p>:null}
        </div>


        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extendSideBar?<p>Settings</p>:null}
        </div>


      </div>
    </div>
  )
}

export default Sidebar
