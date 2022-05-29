[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikbuschke.formik-antd?branchName=master)](https://dev.azure.com/jannikb/formik-mantine/_build/latest?definitionId=40&branchName=master)
![npm](https://img.shields.io/npm/dw/mantine-formik)
[![All Contributors](https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square)](#contributors)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

Simple declarative bindings for [Mantine](https://mantine.dev/) and [Formik](https://github.com/jaredpalmer/Formik).

# Getting started

```
npm install formik-mantine
```

# Example

```jsx
import React from 'react'
import { Form, Input, InputNumber, Checkbox } from 'formik-mantine'
import { Formik } from 'formik'

function App() {
  return (
    <Formik
      {/* default/initial values are set on the Formik container: */ }
      initialValues={{ firstName: '', age: 20, newsletter: false }}
      render={() => (
        <Form>
          {/* every formik-antd component must have the 'name' prop set: */}
          <Input name='firstName' placeholder='First Name' />
          {/* the rest of the api stays as is */}
          <InputNumber name='age' min={0} />
          <Checkbox name='newsletter'>Newsletter</Checkbox>
        </Form>
      )}
    />
  )
}
```

# Core Concept

This library enriches several Mantine components with a required `name: string` prop that connects them to a Formik form field. It is quite simple. Instead of importing your form components from Mantine, you need to import them from 'formik-mantine' and set their `name` prop. Now the component is connected/synced with the corresponding `Formik` field!

The Ant Design components are feature rich and provide a lot of props to customize their visual presentation. These features and also their apis stay exactly the same. Visit their documentation to learn more.
