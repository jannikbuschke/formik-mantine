import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Example/SegmentedControl",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: null }}>
        <div>
          <Component
            name="value"
            data={[
              { label: "Item 1", value: "1" },
              { label: "Item 2", value: "2" },
              { label: "Item 3", value: "3" },
            ]}
          />
        </div>
      </StoryTemplate>
      {/* <pre>{JSON.stringify(args, null, 4)}</pre>
      <pre>{JSON.stringify(argTypes, null, 4)}</pre> */}
    </>
  )
}

export const Default = Template.bind({})
