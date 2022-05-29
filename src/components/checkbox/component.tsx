import { Checkbox as MantineCheckbox, CheckboxProps } from "@mantine/core"
import { useField } from "formik"

export const Checkbox = ({
  name,
  nullAsIndeterminate,
  ...rest
}: { name: string; nullAsIndeterminate?: boolean } & Omit<
  CheckboxProps,
  "value" | "checked" | "indeterminate"
>) => {
  const [
    { value, onBlur, onChange, checked, multiple },
    { value: value2, error, initialTouched },
    { setValue, setTouched },
  ] = useField(name)
  return (
    <MantineCheckbox
      {...rest}
      checked={checked}
      onChange={(v) => setValue(v.target.checked)}
      indeterminate={nullAsIndeterminate && value == null}
    />
  )
}

export default Checkbox
