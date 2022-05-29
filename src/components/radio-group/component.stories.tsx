import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import { Radio } from "./component"
import Component from "./component"

export default {
  title: "Example/RadioGroup",
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
          <Component label="Radiogroup" description="Description" name="value">
            <Radio value="1" label="Item1" />
            <Radio value="2" label="Item2" />
          </Component>
        </div>
      </StoryTemplate>
      {/* <pre>{JSON.stringify(args, null, 4)}</pre>
      <pre>{JSON.stringify(argTypes, null, 4)}</pre> */}
    </>
  )
}

export const Default = Template.bind({})
