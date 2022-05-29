import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Example/Select",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: "val2" }}>
        <div>
          <Component
            label="Select"
            description="Description"
            name="value"
            data={[
              { label: "Value 1", value: "val1" },
              { label: "Value 2", value: "val2" },
            ]}
          />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
