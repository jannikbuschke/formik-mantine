import { Slider as MantineSlider, SliderProps } from "@mantine/core"
import { useField } from "formik"

export const Slider = ({
  name,
  onFocus,
  onBlur,
  onChange,
  ...rest
}: { name: string } & SliderProps) => {
  const [{ value, onBlur: formikOnBlur }, _, { setValue, setTouched }] =
    useField(name)
  return (
    <MantineSlider
      {...rest}
      onBlur={(e) => {
        formikOnBlur(e)
        onBlur && onBlur(e)
      }}
      value={value}
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

export default Slider
