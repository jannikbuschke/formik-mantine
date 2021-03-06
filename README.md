[![Build Status](https://dev.azure.com/jannikb/projects-tasks-invoices/_apis/build/status/formik-mantine?branchName=main)](https://dev.azure.com/jannikb/projects-tasks-invoices/_build/latest?definitionId=56&branchName=main)
![npm](https://img.shields.io/npm/dw/mantine-formik)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)
![GitHub package.json version](https://img.shields.io/github/package-json/v/jannikbuschke/formik-mantine)
![npm](https://img.shields.io/npm/v/formik-mantine?style=plastic)

Codesandbox example: https://codesandbox.io/s/formik-mantine-showroom-46h1jx

Simple declarative bindings for [Mantine](https://mantine.dev/) and [Formik](https://github.com/jaredpalmer/Formik).

# Getting started

```
npm install formik-mantine
```

# Example

```jsx
import React from "react"
import { NotificationsProvider } from "@mantine/notifications"
import {
  TextInput,
  Textarea,
  PasswordInput,
  Input,
  Checkbox,
  Switch,
  NumberInput,
  Slider,
  Select,
  RadioGroup,
  Chips,
  MultiSelect,
  SubmitButton,
} from "formik-mantine"
import { Radio, Chip } from "@mantine/core"
import { Formik } from "formik"

function App() {
  return (
    <NotificationsProvider>
      <Formik
        initialValues={{
          // default form values
          value1: "hello",
          value2: true,
          value3: 5,
          value4: null,
          value5: ["react", "svelte", "vue"],
        }}
        onSubmit={(values) => {
          console.log({ values })
          showNotification({
            title: "Submit",
            message: <pre>{JSON.stringify(values)}</pre>,
          })
        }}
      >
        <form>
          <TextInput label="TextInput" name="value1" />
          <Textarea label="Textarea" name="value1" />
          <PasswordInput label="PasswordInput" name="value1" />
          <Input name="value1" />
          <Checkbox name="value2" />
          <Switch name="value2" />
          <NumberInput name="value3" label="NumberInput" />
          <Slider name="value3" label="Slider" />
          <Select
            name="value4"
            label="Select (value4)"
            data={["val1", "val2", "val3"]}
          />
          <RadioGroup name="value4" label="RadioGroup (value4)">
            <Radio value="val1" label="val1" />
            <Radio value="val2" label="val2" />
            <Radio value="val3" label="val3" />
          </RadioGroup>
          <Chips name="value4">
            <Chip value="val1">val1</Chip>
            <Chip value="val2">val2</Chip>
            <Chip value="val3">val3</Chip>
          </Chips>
          <MultiSelect
            name="value5"
            label="MultiSelect (value5)"
            data={["val1", "val2", "val3", "react", "svelte", "vue"]}
          />
          <Chips name="value5" multiple={true}>
            {["val1", "val2", "val3", "react", "svelte", "vue"].map((v) => (
              <Chip key={v} value={v}>
                {v}
              </Chip>
            ))}
          </Chips>
          <SubmitButton>Submit</SubmitButton>
        </form>
      </Formik>
    </NotificationsProvider>
  )
}
```

# Core Concept

This library enriches several Mantine components with a required `name: string` prop that connects them to a Formik form field. It is quite simple. Instead of importing your form components from Mantine, you need to import them from 'formik-mantine' and set their `name` prop. Now the component is connected/synced with the corresponding `Formik` field!

Otherwise the original api and functionality of the components stay the same.
