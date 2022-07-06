import {
  TimeRangeInput as Component,
  TimeRangeInputProps as Props,
} from "@mantine/dates"
import { useField } from "formik"

export function TimeInput({
  name,
  onFocus,
  onChange,
  ...rest
}: { name: string } & Omit<Props, "error" | "value">) {
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

export default TimeInput
