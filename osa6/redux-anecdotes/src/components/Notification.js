import React from 'react';
// import {notif} from '../reducers/notificationReducer'

const Notification = ({store}) => {
  

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  console.log(store.getState().notification)
  return (
    //mapppaus? 
    <div style={style}>
        {store.getState().notification}
      
      {/* render here notification... */}
    </div>
  )
}

export default Notification
