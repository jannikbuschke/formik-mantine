import {
  DatePicker as Component,
  DatePickerProps as Props,
} from "@mantine/dates"
import { useField } from "formik"

export type DatePickerProps = { name: string } & Omit<Props, "error" | "value">

export function DatePicker({
  name,
  onFocus,
  onChange,
  ...rest
}: DatePickerProps) {
  const [{ value }, {}, { setValue, setTouched }] = useField(name)
  const date = value ? new Date(value) : null
  return (
    <Component
      {...rest}
      value={date}
      onFocus={(e) => {
        setTouched(true, true)
        onFocus && onFocus(e)
      }}
      onChange={(v) => {
        if (v) {
          setValue(v.toISOString())
        } else {
          setValue(null)
        }
        onChange && onChange(v)
      }}
    />
  )
}

export default DatePicker
