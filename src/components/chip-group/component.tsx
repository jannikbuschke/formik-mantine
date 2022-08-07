import { ChipGroupProps, Chip } from "@mantine/core"
import { useField } from "formik"

export function ChipGroup<T extends boolean>({
  name,
  onChange,
  onFocus,
  ...rest
}: { name: string } & Omit<ChipGroupProps<T>, "value">) {
  const [{ value }, , { setValue, setTouched }] = useField(name)
  return (
    <Chip.Group<T>
      value={value}
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

export default ChipGroup
