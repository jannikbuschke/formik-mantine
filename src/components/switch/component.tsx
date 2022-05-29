import { Switch as MantineSwitch, SwitchProps } from "@mantine/core"
import { useField } from "formik"

export const Switch = ({
  name,
  onChange,
  onBlur,
  onFocus,
  ...rest
}: { name: string } & Omit<SwitchProps, "checked">) => {
  const [{ onBlur: formikOnBlur, checked }, _, { setValue, setTouched }] =
    useField(name)
  return (
    <MantineSwitch
      {...rest}
      checked={checked}
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
