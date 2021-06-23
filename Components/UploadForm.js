import React from 'react'

const UploadForm = () => {
    const changeHandle =(e)=>{
        let seleced = e.target.files[0];
        console.log(seleced.name)
    
      }

    return(
        <form>
            <input type="file" onChange={changeHandle}/>
        </form>
    )
}

export default UploadForm