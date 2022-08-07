import { Radio as MantineRadio, RadioGroupProps } from "@mantine/core"
import { useField } from "formik"

export const Radio = MantineRadio

export const RadioGroup = ({
  name,
  onFocus,
  onChange,
  ...rest
}: { name: string } & Omit<RadioGroupProps, "error" | "value">) => {
  const [{ value }, { error }, { setValue, setTouched }] = useField(name)
  return (
    <MantineRadio.Group
      {...rest}
      error={error}
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

export default RadioGroup
