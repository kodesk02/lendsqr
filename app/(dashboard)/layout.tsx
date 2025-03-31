import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="shadow-md">
      <Navbar />

      </div>
        <div className="h-screen flex">
      <div className="w-1/6">
        <Sidebar/>
      </div>
      <div className="w-5/6 p-12">{children}</div>
    </div>
    </div>
 
  );
}
