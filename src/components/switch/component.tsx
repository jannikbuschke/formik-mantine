import { Switch as Component, SwitchProps as Props } from "@mantine/core"
import { useField } from "formik"

export type SwitchProps = { name: string } & Omit<Props, "checked">

export const Switch = ({
  name,
  onChange,
  onBlur,
  onFocus,
  ...rest
}: SwitchProps) => {
  const [
    { onBlur: formikOnBlur, value, checked },
    _,
    { setValue, setTouched },
  ] = useField(name)
  return (
    <Component
      {...rest}
      checked={checked || value}
      onBlur={(v) => {
        formikOnBlur(v)
        onBlur && onBlur(v)
      }}
      onFocus={(e) => {
        setTouched(true, false)
        onFocus && onFocus(e)
      }}
      onChange={(v) => {
        setValue(v.target.checked)
        onChange && onChange(v)
      }}
    />
  )
}

export default Switch
