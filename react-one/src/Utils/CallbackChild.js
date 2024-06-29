import React, { memo } from 'react'

function CallbackChild(props) {
    console.log('Inside the callback child');
  return (
    <div>
        {props.learn()}
      <h2>Inside the callback child</h2>
        {props.value}
    </div>
  )
}

export default memo(CallbackChild)
