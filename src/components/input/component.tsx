import { Input as Component, InputProps as Props } from "@mantine/core"
import { useField } from "formik"

export type InputProps = { name: string } & Omit<Props, "value">

export function Input({ name, ...props }: InputProps) {
  const [{ value }, _, { setValue, setTouched }] = useField(name)
  return (
    <Component
      {...props}
      value={value}
      onFocus={() => {
        setTouched(true, true)
      }}
      onChange={(v) => {
        setValue(v.target.value)
      }}
    />
  )
}

export default Input
