import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Component from "./component"
import { Chip, Space } from "@mantine/core"
import { StoryTemplate } from "../../shared"
import { Label } from "../shared"

export default {
  title: "Example/Chips",
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
          value1: "2",
          // its important that the default value is an array if the chip is set to 'multiple
          value2: [],
        }}
      >
        <div>
          <div>
            <Label>Single</Label>
            <Component name="value1" multiple={false}>
              <Chip value="1">Item 1</Chip>
              <Chip value="2">Item 2</Chip>
            </Component>
          </div>
          <Space my="md" />
          <div>
            <Label>Multiple</Label>
            <Component name="value2" multiple={true}>
              <Chip key="1" value="1">
                Item 1
              </Chip>
              <Chip key="2" value="2">
                Item 2
              </Chip>
              <Chip key="3" value="3">
                Item 3
              </Chip>
            </Component>
          </div>
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
