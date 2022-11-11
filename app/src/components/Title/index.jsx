import React from 'react'
import { H2 } from './styles'


const Title = ({ children, color }) => {
    return (
        <H2 color={color}>{children}</H2>
    );
}
export default Title