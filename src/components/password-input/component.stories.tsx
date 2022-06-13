import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Component from "./component"
import { StoryTemplate } from "../../shared"

export default {
  title: "Example/PasswordInput",
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: "" }}>
        <div>
          <Component {...args} />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
