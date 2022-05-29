import {
  Input as MantineInput,
  Textarea as MantineTextArea,
  TextInput as MantineTextInput,
  TextInputProps,
} from "@mantine/core"
import { useField } from "formik"

export function TextInput({
  name,
  onBlur,
  onFocus,
  onChange,
  ...rest
}: { name: string } & Omit<TextInputProps, "value" | "error">) {
  const [{ value, onBlur: formikOnBlur }, { error }, { setValue, setTouched }] =
    useField(name)
  return (
    <MantineTextInput
      {...rest}
      error={error}
      value={value}
      onBlur={(e) => {
        formikOnBlur(e)
        onBlur && onBlur(e)
      }}
      onFocus={(e) => {
        onFocus && onFocus(e)
        setTouched(true)
      }}
      onChange={(v) => {
        setValue(v.target.value)
        onChange && onChange(v)
      }}
    />
  )
}

export default TextInput
