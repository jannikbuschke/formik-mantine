import { Button, ButtonProps } from "@mantine/core"
import { useFormikContext } from "formik"

export const SubmitButton = ({ ...props }: ButtonProps) => {
  const ctx = useFormikContext()
  return <Button type="button" {...props} onClick={() => ctx.submitForm()} />
}

export default SubmitButton
