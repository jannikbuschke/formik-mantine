import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Example/Switch",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: false }}>
        <div>
          <Component label="Switch" name="value" />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
