import React from 'react'

const Add = () => {
  return (
    <div>
      <div className='main' style={{display: 'flex', flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", rowGap: "5px"}}>
        <input type='text' placeholder='الإسم....'/>
        <input type='text' placeholder='الموعد....'/>
        <button>إضافة</button>
      </div>
    </div>
  )
}

export default Add
