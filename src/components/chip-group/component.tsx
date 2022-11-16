import { ChipGroupProps as Props, Chip as Component } from "@mantine/core"
import { useField } from "formik"

export type ChipGroupProps<T extends boolean> = { name: string } & Omit<
  Props<T>,
  "value"
>

export function ChipGroup<T extends boolean>({
  name,
  onChange,
  onFocus,
  ...rest
}: ChipGroupProps<T>) {
  const [{ value }, , { setValue, setTouched }] = useField(name)
  return (
    <Component.Group<T>
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
