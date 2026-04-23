import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout() {
  return (
    <div className="flex-col bg-neutral-950 text-neutral-100">
      <SiteHeader />
      <main className="">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
