import {
  NumberInput as Component,
  NumberInputProps as ComponentProps,
} from "@mantine/core"
import { useField } from "formik"

export const NumberInput = ({
  name,
  onChange,
  onFocus,
  ...rest
}: { name: string } & Omit<ComponentProps, "error" | "value">) => {
  const [{ value }, { error }, { setValue, setTouched }] = useField(name)
  return (
    <Component
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

export default NumberInput
