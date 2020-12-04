import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import {ThemeProvider, CSSReset, theme} from '@chakra-ui/core'
import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'


addDecorator(story => (
    <ThemeProvider theme={theme}>
        <CSSReset />
        {story()}
    </ThemeProvider>
))

addDecorator((story, ctx) => withConsole()(story)(ctx))
addDecorator(withKnobs)
addDecorator(withA11y)

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
})