import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Example/MultiSelect",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: ["1"] }}>
        <div>
          <Component
            label="Multiselect"
            name="value"
            data={[
              { label: "item1", value: "1" },
              { label: "item2", value: "2" },
            ]}
          />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
