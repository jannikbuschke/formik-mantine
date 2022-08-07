import { Chip as MantineChip, ChipProps } from "@mantine/core"
import { useField } from "formik"

export function Chip({
  name,
  onChange,
  onFocus,
  ...rest
}: { name: string } & Omit<ChipProps, "chccked" | "defaultChecked">) {
  const [{ value }, , { setValue, setTouched }] = useField(name)
  return (
    <MantineChip
      checked={Boolean(value)}
      {...rest}
      onFocus={(e) => {
        setTouched(true)
        onFocus && onFocus(e)
      }}
      onChange={(v) => {
        setValue(v)
        onChange && onChange(v)
      }}
    />
  )
}

export default Chip
