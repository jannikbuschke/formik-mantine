import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoryTemplate } from "../../shared"
import Component from "./component"

export default {
  title: "Example/Slider",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: 50 }}>
        <div>
          <Component label="Slider" name="value" />
        </div>
      </StoryTemplate>
      {/* <pre>{JSON.stringify(args, null, 4)}</pre>
      <pre>{JSON.stringify(argTypes, null, 4)}</pre> */}
    </>
  )
}

export const Default = Template.bind({})
