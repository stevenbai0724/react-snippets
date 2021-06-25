import React from "react";
import Modal from '@material-ui/core/Modal'; 
import { positions } from '@material-ui/system';
import {useState} from 'react'

interface PopOutProps {
    children: string | React.ReactElement | (string | React.ReactElement    )[]
    modalOpen: boolean
    onClose: () => void
    tutorialStep: number
    styles?: React.CSSProperties
}

export default function PopOut({ children, styles, modalOpen, onClose, tutorialStep}: PopOutProps) {

    const [step, setStep] = useState(0);
    const STYLE_FOR_STEP: {
        [key: number]: React.CSSProperties
    } = 
    {
        1: pop1,
        2: pop2,
        3: pop3,
        4: pop4,
        5: pop5,
        6: pop6,
        7: pop7,
    }
    return (   
        <Modal  
            open={modalOpen}
            onClose = {onClose}
            style={{ ...modalStyling, ...styles}}
        >
            <>
            <div style={STYLE_FOR_STEP[tutorialStep]}>{children}</div>          

            </>
        </Modal>
    );
}
const modalStyling = {
    'border': 'none !important'
}
const pop1: React.CSSProperties = {
    backgroundColor: 'white',
    position: 'absolute',
    top: 'calc(50% - 200px)',
    left: 'calc(50% - 225px)',
    width: 450,
    height: 250,
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: 40,
    marginTop: 40,
    borderRadius: '12px',
    fontFamily: 'Source Sans Pro',
  }
  const pop2: React.CSSProperties = {
    backgroundColor: 'white',
    position: 'absolute',
    top: 'calc(50% - 325px)',
    left: 'calc(50% + 170px)',
    width: 375,
    height: 225,
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: 40,
    marginTop: 40,
    borderRadius: '12px',
    fontFamily: 'Source Sans Pro',
  }
  const pop3: React.CSSProperties = {
    backgroundColor: 'white',
    position: 'absolute',
    top: 'calc(50% - 325px)',
    left: 'calc(50% + 250px)',
    width: 350,
    height: 225,
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: 40,
    marginTop: 40,
    borderRadius: '12px',
    fontFamily: 'Source Sans Pro',
  }
  const pop4: React.CSSProperties = {
    backgroundColor: 'white',
    position: 'absolute',
    top: 'calc(50% - 250px)',
    left: 'calc(50% - 600px)',
    width: 350,
    height: 225,
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: 40,
    marginTop: 40,
    borderRadius: '12px',
    fontFamily: 'Source Sans Pro',
  }
  const pop5: React.CSSProperties = {
    backgroundColor: 'white',
    position: 'absolute',
    top: 'calc(50% - 250px)',
    left: 'calc(50% - 700px)',
    width: 400,
    height: 250,
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: 40,
    marginTop: 40,
    borderRadius: '12px',
    fontFamily: 'Source Sans Pro',
  }
  const pop6: React.CSSProperties = {
    backgroundColor: 'white',
    position: 'absolute',
    top: 'calc(50% - 250px)',
    left: 'calc(50% - 300px)',
    width: 350,
    height: 200,
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: 40,
    marginTop: 40,
    borderRadius: '12px',
    fontFamily: 'Source Sans Pro',
  }
  const pop7: React.CSSProperties = {
    backgroundColor: 'white',
    position: 'absolute',
    top: 'calc(50% - 200px)',
    left: 'calc(50% - 225px)',
    width: 450,
    height: 250,
    fontSize: '40px',
    textAlign: 'center',
    paddingTop: 40,
    marginTop: 40,
    borderRadius: '12px',
    fontFamily: 'Source Sans Pro',
  }