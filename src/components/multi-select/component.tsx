import {
  MultiSelect as MantineMultiSelect,
  MultiSelectProps,
} from "@mantine/core"
import { useField } from "formik"

export const MultiSelect = ({
  name,
  onChange,
  onFocus,
  ...rest
}: { name: string } & Omit<MultiSelectProps, "error" | "value">) => {
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
