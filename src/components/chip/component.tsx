import { Chip as Component, ChipProps as Props } from "@mantine/core"
import { useField } from "formik"

export type ChipProps = { name: string } & Omit<
  Props,
  "chccked" | "defaultChecked"
>

export function Chip({ name, onChange, onFocus, ...rest }: ChipProps) {
  const [{ value }, , { setValue, setTouched }] = useField(name)
  return (
    <Component
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
