import {
  RangeCalendar as Component,
  RangeCalendarProps as Props,
} from "@mantine/dates"
import { useField } from "formik"

export function RangeCalendar({
  name,
  onFocus,
  onChange,
  ...rest
}: { name: string; onChange?: (value: [Date, Date]) => void } & Omit<
  Props,
  "error" | "value" | "onChange"
>) {
  const [{ value }, {}, { setValue, setTouched }] = useField(name)
  return (
    <Component
      {...rest}
      value={value}
      onFocus={(e) => {
        setTouched(true, true)
        onFocus && onFocus(e)
      }}
      onChange={(v) => {
        setValue(v)
        onChange && onChange(v)
      }}
    />
  )
}

export default RangeCalendar
