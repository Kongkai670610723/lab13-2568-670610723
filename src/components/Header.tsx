//Header.tsx
import {
  Burger,
  Text,
  useMantineColorScheme,
  Group,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconRocket, IconSun, IconMoon } from "@tabler/icons-react";

interface HeaderComponentProps {
  opened: boolean;
  toggle: () => void;
}

export default function HeaderComponent({
  opened,
  toggle,
}: HeaderComponentProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  //lectuer12
  const isDark = colorScheme === "dark";
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Group p="md" justify="space-between">
      <Group>
        {isMobile && (
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        )}

        <ActionIcon
          variant="gradient"
          size="xl"
          aria-label="Gradient action icon"
          gradient={{ from: "orange", to: "cyan", deg: 90 }}
          mx={3}
        >
          <IconRocket />
        </ActionIcon>
        <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "red", to: "blue", deg: 90 }}
          style={{ fontFamily: "Libertinus Keyboard" }}
        >
          My App Header
        </Text>
      </Group>
      <Group gap={5}>
        <ActionIcon
          variant="filled"
          color={isDark ? "yellow" : "blue"}
          onClick={toggleColorScheme}
          size="lg"
          aria-label={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
        </ActionIcon>
      </Group>
    </Group>
  );
}
