import React from 'react';
import { useState , useEffect} from 'react';
import { useSubscription } from 'mqtt-react-hooks';
function Teacher() {
//   const [connectionStatus, setConnectionStatus] = useState(false);
//   const [messages, setMessages] = useState([]);
    const { message } = useSubscription('student1');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      if (message) setMessages((msgs) => [...msgs, message]);
    }, [message]);
    setTimeout(() => {
        const endTime = new Date();
        const timeInMinutes = (endTime - startTime) / 1000 / 60;
      }, 60000);
    const startTime = new Date();
    function countWords(str) {
        return str.split(' ').length;
      }
      function countCharacters(str) {
        return str.length;
      }
      function countWordsPerMinute(str, timeInMinutes) {
        const numWords = str.split(' ').length;
        return numWords / timeInMinutes;
      }
      function countCharactersPerMinute(str, timeInMinutes) {
        const numCharacters = str.length;
        return numCharacters / timeInMinutes;
      }
     
  return(
    <>
    <div>
        <h1>Total words : {countWords(messages.message)}</h1> 
        <h1>Total characters : {countCharacters(messages.message)}</h1>
        <h1>Words per minute : {countWordsPerMinute(messages.message)}</h1>
        <h1>characters per minute : {countCharactersPerMinute(messages.message)}</h1>
    </div>
    </>
  )
}
export default Teacher;