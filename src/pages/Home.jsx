import { Alert, Button } from '@mui/material'
import React, { useState } from 'react'

function Home() {

    const[show,setShow]=useState(false);

    const showMe = () => {
        setShow(true);        
    }

  return (
    <div>

        <Button variant="outlined" onClick={showMe}>Outlined</Button>
        {show && (
            <Alert severity="warning">This is a warning Alert.</Alert>
        )}
    </div>
  )
}

export default Home