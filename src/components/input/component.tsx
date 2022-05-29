import { Input as MantineInput } from "@mantine/core"
import { useField } from "formik"

export function Input({ name }: { name: string }) {
  const [{ value }, _, { setValue, setTouched }] = useField(name)
  return (
    <MantineInput
      value={value}
      onFocus={() => setTouched(true, true)}
      onChange={(v) => setValue(v.target.value)}
    />
  )
}

export default Input
