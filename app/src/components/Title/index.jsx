import React from 'react'
import { H2 } from './styles'

const Title = ({ children, color, size }) => {
    return (
        <H2 color={color} size={size}>{children}</H2>
    );
}
export default Title