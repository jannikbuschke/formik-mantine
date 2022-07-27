import * as React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Date Examples/DatePicker",
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate
        initialValues={{ value: null, value2: "2022-07-29T22:00:00Z" }}
      >
        <div>
          <Component name="value" />
          <Component name="value2" />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
