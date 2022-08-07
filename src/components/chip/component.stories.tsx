import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Component from "./component"
import { StoryTemplate } from "../../shared"
import { Space } from "@mantine/core"

export default {
  title: "Example/Chip",
  component: Component,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate
        initialValues={{
          value1: false,
          value2: true,
          value3: null,
          value4: undefined,
        }}
      >
        <div>
          <Component name="value1">Chip component (default false)</Component>
          <Space my="md" />
          <Component name="value2">Chip component (default true)</Component>
          <Space my="md" />
          <Component name="value3">
            Chip component (default null/false)
          </Component>
          <Space my="md" />
          <Component name="value4">
            Chip component (default undefined/false)
          </Component>
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
