import { JsonInput as Component, JsonInputProps as Props } from "@mantine/core"
import { useField } from "formik"

export type JsonInput = { name: string } & Omit<Props, "value">

export function JsonInput({ name, ...props }: JsonInput) {
  const [{ value }, _, { setValue, setTouched }] = useField(name)
  return (
    <Component
      {...props}
      value={value}
      onFocus={() => {
        setTouched(true, true)
      }}
      onChange={(v) => {
        setValue(v)
      }}
    />
  )
}

export default JsonInput
