import * as React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Date Examples/Month",
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: null }}>
        <div>
          <Component name="value" month={new Date()} />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
