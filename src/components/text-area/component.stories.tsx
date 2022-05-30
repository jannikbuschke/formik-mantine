import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Component from "./component"
import { StoryTemplate } from "../../shared"

export default {
  title: "Example/Textarea",
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
          <Component name="value" />
        </div>
      </StoryTemplate>
    </>
  )
}

export const InitialEmpty = Template.bind({})
