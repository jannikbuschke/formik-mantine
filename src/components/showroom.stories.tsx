import * as React from "react"
import { Paper, Stack, Title, Text, Chip, Radio } from "@mantine/core"
import { NotificationsProvider, showNotification } from "@mantine/notifications"
import { Formik } from "formik"
import { Checkbox } from "./checkbox"
import { Chips } from "./chips"
import { Input } from "./input"
import { MultiSelect } from "./multi-select"
import { NumberInput } from "./number-input"
import { PasswordInput } from "./password-input"
import { RadioGroup } from "./radio-group"
import { Select } from "./select"
import { Slider } from "./slider"
import { Switch } from "./switch"
import { Textarea } from "./text-area"
import { TextInput } from "./text-input"
import { SubmitButton } from "./submit-button"

function Label({ children }: { children: string }) {
  return (
    <label>
      <Text weight={500} style={{ fontSize: 14, color: "#212529" }} pb={4}>
        {children}
      </Text>
    </label>
  )
}

export function Showroom() {
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
          <Paper m="md" p="md" shadow="xs">
            <Stack>
              <Title order={1}>Texts</Title>
              <TextInput label="TextInput" name="value1" />
              <Textarea label="Textarea" name="value1" />
              <PasswordInput label="PasswordInput" name="value1" />
              <div>
                <Label>Input</Label>
                <Input name="value1" />
              </div>
            </Stack>
          </Paper>
          <Paper m="md" p="md" shadow="xs">
            <Stack>
              <Title order={1}>Booleans</Title>
              <Checkbox name="value2" />
              <Switch name="value2" />
            </Stack>
          </Paper>
          <Paper m="md" p="md" shadow="xs">
            <Stack>
              <Title order={1}>Numbers</Title>
              <NumberInput name="value3" label="NumberInput" />
              <Slider name="value3" label="Slider" />
            </Stack>
          </Paper>
          <Paper m="md" p="md" shadow="xs">
            <Stack>
              <Title order={1}>Selects</Title>
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
              <div>
                <Label>Chips (value4)</Label>
                <Chips name="value4">
                  <Chip value="val1">val1</Chip>
                  <Chip value="val2">val2</Chip>
                  <Chip value="val3">val3</Chip>
                </Chips>
              </div>
              <MultiSelect
                name="value5"
                label="MultiSelect (value5)"
                data={["val1", "val2", "val3", "react", "svelte", "vue"]}
              />
              <div>
                <Label>Chips (multiple, value5)</Label>
                <Chips name="value5" multiple={true}>
                  {["val1", "val2", "val3", "react", "svelte", "vue"].map(
                    (v) => (
                      <Chip key={v} value={v}>
                        {v}
                      </Chip>
                    ),
                  )}
                </Chips>
              </div>
            </Stack>
          </Paper>
          <Paper m="md" p="md" shadow="xs">
            <Title order={1}>Submit</Title>
            <SubmitButton>Submit</SubmitButton>
          </Paper>
        </form>
      </Formik>
    </NotificationsProvider>
  )
}

export default Showroom
