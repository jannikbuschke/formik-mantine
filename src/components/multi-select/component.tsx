import {
  MultiSelect as MantineMultiSelect,
  MultiSelectProps as MantineMultiSelectProps,
} from "@mantine/core"
import { useField } from "formik"

export type MultiSelectProps = { name: string } & Omit<
  MantineMultiSelectProps,
  "error" | "value"
>

export const MultiSelect = ({
  name,
  onChange,
  onFocus,
  ...rest
}: MultiSelectProps) => {
  const [{ value }, { error }, { setValue, setTouched }] = useField(name)
  return (
    <MantineMultiSelect
      {...rest}
      error={error}
      onFocus={(e) => {
        setTouched(true, true)
        onFocus && onFocus(e)
      }}
      value={value}
      onChange={(v) => {
        setValue(v)
        onChange && onChange(v)
      }}
    />
  )
}

export default MultiSelect
