import {
  PasswordInput as Component,
  PasswordInputProps as ComponentProps,
} from "@mantine/core"
import { useField } from "formik"

export function PasswordInput({
  name,
  ...rest
}: { name: string } & Omit<ComponentProps, "value" | "onFocus" | "onChange">) {
  const [{ value }, _, { setValue, setTouched }] = useField(name)
  return (
    <Component
      {...rest}
      value={value}
      onFocus={() => setTouched(true, true)}
      onChange={(v) => setValue(v.target.value)}
    />
  )
}

export default PasswordInput
