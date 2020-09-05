import React from 'react'
import Button from './Button'

export default {
    title: 'Button',
    component: Button,
}

export const Primary = () => <Button variant={"primary"}>Default Button</Button>
export const Secondary = () => <Button variant={"secondary"}>Default Button</Button>
export const Success = () => <Button variant={"success"}>Success Button</Button>