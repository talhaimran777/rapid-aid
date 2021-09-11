/*eslint comma-dangle: ["error", "always-multiline"]*/
// ** React Imports
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { useDispatch } from 'react-redux'
// import { sendMsg } from './store/actions'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { MessageSquare, Menu, PhoneCall, Video, Search, MoreVertical, Mic, Image, Send } from 'react-feather'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Button,
} from 'reactstrap'

const ChatLog = () => {
  // ** Refs & Dispatch
  // const chatArea = useRef(null)
  const dispatch = useDispatch()

  // ** State
  const [msg, setMsg] = useState('')

  // ** Scroll to chat bottom
  // const scrollToBottom = () => {
  //   const chatContainer = ReactDOM.findDOMNode(chatArea.current)
  //   chatContainer.scrollTop = Number.MAX_SAFE_INTEGER
  // }

  // ** If user chat is not empty scrollToBottom
  // useEffect(() => {
  //   const selectedUserLen = Object.keys(selectedUser).length

  //   if (selectedUserLen) {
  //     scrollToBottom()
  //   }
  // }, [selectedUser])

  // ** Formats chat data based on sender
  // const formattedChatData = () => {
  //   let chatLog = []
  //   if (selectedUser.chat) {
  //     chatLog = selectedUser.chat.chat
  //   }

  //   const formattedChatLog = []
  //   let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined
  //   let msgGroup = {
  //     senderId: chatMessageSenderId,
  //     messages: [],
  //   }
  //   chatLog.forEach((msg, index) => {
  //     if (chatMessageSenderId === msg.senderId) {
  //       msgGroup.messages.push({
  //         msg: msg.message,
  //         time: msg.time,
  //       })
  //     } else {
  //       chatMessageSenderId = msg.senderId
  //       formattedChatLog.push(msgGroup)
  //       msgGroup = {
  //         senderId: msg.senderId,
  //         messages: [
  //           {
  //             msg: msg.message,
  //             time: msg.time,
  //           },
  //         ],
  //       }
  //     }
  //     if (index === chatLog.length - 1) formattedChatLog.push(msgGroup)
  //   })
  //   return formattedChatLog
  // }

  // ** Renders user chat
  // const renderChats = () => {
  //   return formattedChatData().map((item, index) => {
  //     return (
  //       <div
  //         key={index}
  //         className={classnames('chat', {
  //           'chat-left': item.senderId !== 11,
  //         })}
  //       >
  //         <div className='chat-avatar'>
  //           <Avatar
  //             className='box-shadow-1 cursor-pointer'
  //             img={item.senderId === 11 ? userProfile.avatar : selectedUser.contact.avatar}
  //           />
  //         </div>

  //         <div className='chat-body'>
  //           {item.messages.map((chat) => (
  //             <div key={chat.msg} className='chat-content'>
  //               <p>{chat.msg}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     )
  //   })
  // }

  // ** Opens right sidebar & handles its data
  // const handleAvatarClick = (obj) => {
  //   handleUserSidebarRight()
  //   handleUser(obj)
  // }

  // ** On mobile screen open left sidebar on Start Conversation Click
  // const handleStartConversation = () => {
  //   if (!Object.keys(selectedUser).length && !userSidebarLeft && window.innerWidth <= 1200) {
  //     handleSidebar()
  //   }
  // }

  // ** Sends New Msg
  // const handleSendMsg = (e) => {
  //   e.preventDefault()
  //   if (msg.length) {
  //     dispatch(sendMsg({ ...selectedUser, message: msg }))
  //     setMsg('')
  //   }
  // }

  // ** ChatWrapper tag based on chat's length
  // const ChatWrapper = Object.keys(selectedUser).length && selectedUser.chat ? PerfectScrollbar : 'div'

  return (
    <div className='chat-app-window'>
      {/* <div className={classnames('start-chat-area', { 'd-none': Object.keys(selectedUser).length })}>
        <div className='start-chat-icon mb-1'>
          <MessageSquare />
        </div>
        <h4 className='sidebar-toggle start-chat-text' onClick={handleStartConversation}>
          Start Conversation
        </h4>
      </div> */}
      {/* {Object.keys(selectedUser).length ? (
      
      ) : null} */}

      <div className='active-chat d-flex flex-column'>
        <div className='chats flex-grow-1'>
          <div key={1} className=''>
            <div className='chat-avatar'>
              <Avatar
                className='box-shadow-1 cursor-pointer'
                // img={item.senderId === 11 ? userProfile.avatar : selectedUser.contact.avatar}
              />
            </div>

            <div className='chat-body'>
              {/* {item.messages.map((chat) => (
                ))} */}
              <div key={1} className='chat-content'>
                <p>Hello</p>
              </div>
            </div>
          </div>

          <div key={1} className='chat-left'>
            <div className='chat-avatar'>
              <Avatar
                className='box-shadow-1 cursor-pointer'
                // img={item.senderId === 11 ? userProfile.avatar : selectedUser.contact.avatar}
              />
            </div>

            <div className='chat-body'>
              {/* {item.messages.map((chat) => (
                ))} */}
              <div key={1} className='chat-content'>
                <p>Hello</p>
              </div>
            </div>
          </div>
        </div>

        <Form className='chat-app-form' onSubmit={(e) => handleSendMsg(e)}>
          <InputGroup className='input-group-merge mr-1 form-send-message'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Mic className='cursor-pointer' size={14} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder='Type your message or use speech to text'
            />
            <InputGroupAddon addonType='append'>
              <InputGroupText>
                <Label className='attachment-icon mb-0' for='attach-doc'>
                  <Image className='cursor-pointer text-secondary' size={14} />
                  <input type='file' id='attach-doc' hidden />
                </Label>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Button className='send' color='primary'>
            <Send size={14} className='d-lg-none' />
            <span className='d-none d-lg-block'>Send</span>
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default ChatLog
