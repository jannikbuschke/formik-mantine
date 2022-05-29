import { Select as MantineSelect, SelectProps } from "@mantine/core"
import { useField } from "formik"

export const Select = ({
  name,
  onChange,
  onFocus,
  onBlur: onMantineBlur,
  ...rest
}: { name: string } & Omit<SelectProps, "value" | "error">) => {
  const [{ value, onBlur }, { error }, { setValue, setTouched }] =
    useField(name)
  return (
    <MantineSelect
      {...rest}
      onBlur={(e) => {
        onBlur(e)
        onMantineBlur && onMantineBlur(e)
      }}
      onFocus={(e) => {
        setTouched(true)
        onFocus && onFocus(e)
      }}
      error={error}
      value={value}
      onChange={(v) => {
        setValue(v)
        onChange && onChange(v)
      }}
    />
  )
}

export default Select
