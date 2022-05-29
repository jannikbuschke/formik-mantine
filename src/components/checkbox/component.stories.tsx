import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Example/Checkbox",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: null }}>
        <div>
          <Component {...args} label="Checkbox" name="value" />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
export const WithIndeterminate = Template.bind({})
WithIndeterminate.args = { nullAsIndeterminate: true }
