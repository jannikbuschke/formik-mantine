import { Textarea as MantineTextarea, TextareaProps } from "@mantine/core"
import { useField } from "formik"
export function Textarea({
  name,
  onBlur,
  onChange,
  ...rest
}: { name: string } & Omit<TextareaProps, "value" | "error">) {
  const [{ value, onBlur: formikOnBLur }, { error }, { setValue, setTouched }] =
    useField(name)
  return (
    <MantineTextarea
      {...rest}
      value={value}
      error={error}
      onChange={(v) => {
        setValue(v.target.value)
        onChange && onChange(v)
      }}
      onFocus={(e) => {
        setTouched(true)
      }}
      onBlur={(e) => {
        formikOnBLur(e)
        onBlur && onBlur(e)
      }}
    />
  )
}

export default Textarea
