import * as React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Date Examples/RangeCalendar",
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: [null, null] }}>
        <div>
          <Component name="value" />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
