import { Calendar as Component, CalendarProps as Props } from "@mantine/dates"
import { useField } from "formik"

export type CalendarProps = { name: string } & Omit<Props, "error" | "value">

export function Calendar({ name, onFocus, onChange, ...rest }: CalendarProps) {
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

export default Calendar
