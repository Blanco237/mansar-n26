import EmployeeRequests from "@/components/employee-requests/EmployeeRequests";
import Hero from "@/components/hero/Hero";
import LastExpenses from "@/components/last-expenses/LastExpenses";
import ManageRequests from "@/components/manage-requests/ManageRequests";
import MyDashboard from "@/components/my-dashboard/MyDashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12">
      <Hero />
      <MyDashboard />
      <section className="flex items-start gap-12">
        <div className="w-[70%] flex flex-col gap-8">
          <EmployeeRequests />
          <LastExpenses />
        </div>
        <div className="w-[30%] flex flex-col gap-8">
          <ManageRequests />
        </div>
      </section>
    </main>
  );
}
