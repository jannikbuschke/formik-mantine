import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Input from "./component"
import { StoryTemplate } from "../../shared"

export default {
  title: "Example/JsonInput",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args, { argTypes }) => {
  return (
    <>
      <StoryTemplate initialValues={{ value: "" }}>
        <div>
          <Input
            {...args}
            name="value"
            minRows={20}
            label="Your package.json"
            placeholder="Textarea will autosize to fit the content"
            validationError="Invalid JSON"
            formatOnBlur
          />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
