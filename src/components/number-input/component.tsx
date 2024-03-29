import {
  NumberInput as Component,
  NumberInputProps as Props,
} from "@mantine/core"
import { useField } from "formik"

export type NumberInputProps = { name: string } & Omit<Props, "error" | "value">

export const NumberInput = ({
  name,
  onChange,
  onFocus,
  ...rest
}: NumberInputProps) => {
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
