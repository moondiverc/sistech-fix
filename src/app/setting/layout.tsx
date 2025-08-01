// app/setting/layout.tsx
import DashboardLayout from "../dashboard/layout";

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
