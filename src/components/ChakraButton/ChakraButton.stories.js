import React from 'react'
import { Button } from '@chakra-ui/core'
import { action, actions } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: {
        variantColor: { control: 'text' },
        children: { control: 'text' },
        onClick: { action: 'clicked' }
    }
}

export const Warning = () => (
    <Button onClick={action('Click Handler')} variantColor="yellow">
        Warn On Click
    </Button>
)

export const Info = () => (
    <Button {...actions('onClick', 'onMouseOver')} variantColor="blue">
        Hover and Click
    </Button>
)

export const Log = () => (
    <Button onClick={() => console.log("Button Clicked!")} variantColor="purple">
        Log
    </Button>
)

export const Disable = () => (
    <Button disabled={boolean('Disable', false)}>
        {text('Label', 'Knobs Button')}
    </Button>
)

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    variantColor: 'green',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    variantColor: 'red',
    children: 'Danger'
}