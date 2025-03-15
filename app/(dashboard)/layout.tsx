import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-1/6">
        <Navbar />
        <Sidebar/>
      </div>
      <div className="w-5/6 mt-20 p-12">{children}</div>
    </div>
  );
}
