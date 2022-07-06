import React from "react"
import { ComponentStory, ComponentMeta, Story } from "@storybook/react"
import { Prism } from "@mantine/prism"
import { Form, Formik, FormikConfig } from "formik"

export function StoryTemplate<Values>({
  children,
  ...rest
}: { children: React.ReactNode } & Omit<FormikConfig<Values>, "onSubmit">) {
  return (
    <Formik {...rest} onSubmit={(values) => console.log({ values })}>
      {(f) => (
        <Form>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {children}
            <Prism language="json">{JSON.stringify({ ...f }, null, 4)}</Prism>;
            {/* <pre>{JSON.stringify({ ...f }, null, 4)}</pre> */}
          </div>
        </Form>
      )}
    </Formik>
  )
}
