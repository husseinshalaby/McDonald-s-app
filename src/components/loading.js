import React from 'react';
import '../App.css';

const Loading = ({ text = 'Loading', speed = 300 }) => {
  const [content, setContent] = React.useState(text)
  React.useEffect(()=>{
    const id = window.setInterval(()=>{
      setContent((content)=>{
        return content === `${text}...`
        ? text
        : `${content}.`
      })
    },speed)
    return (id)=> window.clearInterval(id)
  },[text,speed])
  return (
    <p className = 'loading'>{content}</p>
  )
}

export default Loading