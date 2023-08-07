import {React, useEffect, useState} from 'react';
import Date from './Date';
import person from './data';
function App() {
  const [personData, setPersonData] = useState(person);
  useEffect(()=> setPersonData([]),[])
  return (
    <div>
      <div className='main'>
      <h2>لديك اليوم {personData.length} مواعيد</h2>
      <div className='list'>
        {personData.length 
        ? (personData.map((item, ind)=> <Date key={ind} info={item}/>)) 
        : <h3 style={{textAlign: "center"}}>ليس لديك مواعيد ا ليوم</h3>}
      </div>
      <div className='controls'>
        <button onClick={()=> setPersonData(person)}>عرض المواعيد</button>
        <button onClick={()=> setPersonData([])}>مسح الكل</button>
      </div>
      </div>
    </div>
  );
}

export default App;