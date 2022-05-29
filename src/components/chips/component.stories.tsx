import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Component from "./component"
import { Chip } from "./component"
import { StoryTemplate } from "../../shared"

export default {
  title: "Example/Chips",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: "2" }}>
        <div>
          <Component name="value" multiple={true}>
            <Chip value="1">hwllo 1</Chip>
            <Chip value="2">hwllo 2</Chip>
          </Component>
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
