import React, { useState } from 'react'
import {v4 as uuidV4} from 'uuid'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [roomId,setRoomId] = useState('')
    const [username,setUserName] = useState('')
    const createNewRoom  = (e) => {
      e.preventDefault()
      const id = uuidV4()
        setRoomId(id)
        toast.success('Created a new room')

    //   console.log(id)



    }
    const joinRoom = () => {
        if(!roomId || !username){
            toast.error("Room ID & username is required")
            return


        }

        //    redirect
           navigate(`/editor/${roomId}`, {
            state:{
                username,
            },
           })


    }
    const handleInputEnter = (e) => {
        console.log('event',e.code)
        if(e.code === 'Enter'){
            joinRoom()
        }
    }
  return (
    <div className='homePageWrapper'>
     <div className='formWrappeer'>
     <img className = "homePageLogo" alt="logo" src={require('./web-logo.png')} />
         <h4 className='mainLabel'>Paste invitiation Room Id</h4>
         <div className='inputGroup'>
            <input type="text" className='inputBox' placeholder='Room ID' onChange={(e) => {
                setRoomId(e.target.value)
            }} value={roomId} onKeyUp = {handleInputEnter}/>
            <input type="text" className='inputBox' placeholder='USERNAME' onChange={(e) => {
                setUserName(e.target.value)
                // console.log(username)
            }} value={username} onKeyUp = {handleInputEnter}/>
            <button className='btn joinBtn' onClick={joinRoom}>join</button>
            <span className='createInfo'>
                If you dont have an invite then create &nbsp;
                <a onClick={createNewRoom} href='' className='createNewBtn'>new room</a>
            </span>
         </div>

     </div>
     <footer>
        <h4>Build with 💛 by <a href='#'>Homaid Afroz</a> </h4>
     </footer>

    </div>
  )
}

export default Home