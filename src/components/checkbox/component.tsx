import { Checkbox as Component, CheckboxProps as Props } from "@mantine/core"
import { useField } from "formik"

export type CheckboxProps = {
  name: string
  nullAsIndeterminate?: boolean
} & Omit<Props, "value" | "checked" | "indeterminate">

export const Checkbox = ({
  name,
  nullAsIndeterminate,
  ...rest
}: CheckboxProps) => {
  const [{ value, checked }, , { setValue }] = useField(name)
  return (
    <Component
      {...rest}
      checked={checked || value}
      onChange={(v) => setValue(v.target.checked)}
      indeterminate={nullAsIndeterminate && value == null}
    />
  )
}

export default Checkbox
