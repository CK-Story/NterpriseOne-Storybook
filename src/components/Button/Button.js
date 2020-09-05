import React from 'react'
import './Button.css'
import { DefaultButton, PrimaryButton,  Stack, IStackTokens } from 'office-ui-fabric-react';

export default function Button(props) {
    const {children, variant="primary", size, ...rest} = props;

    switch (variant) {
        case "primary":
           return <DefaultButton text={children} primary />
            
        case "default":
           return <DefaultButton text={children} />
        

        case "success":
          return  <DefaultButton text={children}  />
        
    
        default:
          return  <DefaultButton text={children} />
            
    }
}
