import React,{forwardRef} from 'react';

 const PinItem = forwardRef(({changehandler,onBackSpaceHandler},ref) => {

  const handleKeyUp=(e)=>{
    if(e.keyCode === 8){
      onBackSpaceHandler();
    }
    else{
      changehandler(e);
    }
  }
  return (
    <div>
        <input 
            ref={ref}
            maxLength={1} 
            onKeyUp={handleKeyUp}           
            />
    </div>
  )
})

export default PinItem;