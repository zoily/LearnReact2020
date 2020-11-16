import React from 'react'
import { Button } from './Button'

// This default export determines where your story goes in the story list
export default {
	title: 'System Design/Button',
	component: Button
}

const Template = (args) => <Button {...args} />

export const EasyButton = Template.bind({})

EasyButton.args = {
	/* the args you need here will depend on your component */
}
