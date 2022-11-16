import { TimeInput as Component, TimeInputProps as Props } from "@mantine/dates"
import { useField } from "formik"

export type TimeInputProps = { name: string } & Omit<Props, "error" | "value">

export function TimeInput({
  name,
  onFocus,
  onChange,
  ...rest
}: TimeInputProps) {
  const [{ value }, {}, { setValue, setTouched }] = useField(name)
  return (
    <Component
      {...rest}
      value={
        value instanceof Date
          ? value
          : value === null
          ? null
          : value === undefined
          ? undefined
          : new Date(value)
      }
      onFocus={(e) => {
        setTouched(true, true)
        onFocus && onFocus(e)
      }}
      onChange={(v) => {
        setValue(v.toISOString())
        onChange && onChange(v)
      }}
    />
  )
}

export default TimeInput
