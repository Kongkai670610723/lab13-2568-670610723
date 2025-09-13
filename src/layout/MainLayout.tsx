//MainLayout.tsx
import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import HeaderComponent from "../components/Header";
import Sidebar from "../components/Sidebar";
import FooterComponent from "../components/Footer";
import { useDisclosure } from "@mantine/hooks";
export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  //opened: เป็น boolean (true/false)
  //toggle(): สลับค่า opened (true → false → true)
  //navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <HeaderComponent opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Footer>
        <FooterComponent
          year="2025"
          fullName="Phurin Inthajak"
          studentId="670610723"
        />
      </AppShell.Footer>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
