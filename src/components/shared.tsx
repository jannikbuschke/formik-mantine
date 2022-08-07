import { Text } from "@mantine/core"

export function Label({ children }: { children: string }) {
  return (
    <label>
      <Text
        sx={(theme) => ({
          fontSize: 14,
          fontWeight: 500,
          color: theme.colors.dark[5],
        })}
        pb={4}
      >
        {children}
      </Text>
    </label>
  )
}
