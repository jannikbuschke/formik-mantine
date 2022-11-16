import {
  Select as MantineSelect,
  SelectProps as MantineSelectProps,
} from "@mantine/core"
import { useField } from "formik"

export type SelectProps = { name: string } & Omit<
  MantineSelectProps,
  "value" | "error"
>

export const Select = ({
  name,
  onChange,
  onFocus,
  onBlur: onMantineBlur,
  ...rest
}: SelectProps) => {
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
