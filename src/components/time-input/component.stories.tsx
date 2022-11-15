import * as React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Date Examples/TimeInput ",
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate
        initialValues={{
          value: null,
          value1: new Date(),
          value2: new Date().toISOString(),
        }}
      >
        <div>
          <Component name="value" />
          <Component name="value1" />
          <Component name="value2" />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
