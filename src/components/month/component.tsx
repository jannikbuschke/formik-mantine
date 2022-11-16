import { Month as Component, MonthProps as Props } from "@mantine/dates"
import { useField } from "formik"

export type MonthProps = { name: string } & Omit<Props, "error" | "value">

export function Month({ name, onFocus, onChange, ...rest }: MonthProps) {
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

export default Month
