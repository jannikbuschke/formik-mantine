import {
  Chips as MantineChips,
  Chip as MantineChip,
  ChipsProps,
} from "@mantine/core"
import { useField } from "formik"

export const Chip = MantineChip

export function Chips<T extends boolean>({
  name,
  onChange,
  ...rest
}: { name: string } & Omit<ChipsProps<T>, "value">) {
  const [
    { value, onBlur, checked, multiple },
    { value: value2, error, initialTouched },
    { setValue, setTouched },
  ] = useField(name)
  return (
    <MantineChips<T>
      value={value}
      {...rest}
      onFocus={() => setTouched(true)}
      onChange={(v) => {
        setValue(v)
        onChange && onChange(v)
      }}
    />
  )
}

export default Chips
