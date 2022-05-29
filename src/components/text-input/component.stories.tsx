import React from "react"
import { ComponentStory, ComponentMeta, Story } from "@storybook/react"
import Component from "./component"
import { StoryTemplate } from "../../shared"

export default {
  title: "Example/TextInput",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
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

export const InitialEmpty = Template.bind({})
