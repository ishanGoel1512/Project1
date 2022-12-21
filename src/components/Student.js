import React, { useState } from 'react';
import { useMqttState } from 'mqtt-react-hooks';

function Student() {

  const [textValue, setTextValue] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [value, setValue] = useState('');
  const { client }  = useMqttState();
  
  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleFileChange = event => {
    setImageFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    // const words = value.split(' ');
    // words.forEach(word => {
    client.publish('student1',value);
    // });
  }
  return (
    <div>
      <input type="text" value={textValue} onChange={handleTextChange} />
      <input type="file" onChange={handleFileChange} />
      <img src={imageFile}/>
      <button type='submit'>Save</button>
      <textarea onChange={handleChange} value={value} />
    </div>
  );
}
export default Student;