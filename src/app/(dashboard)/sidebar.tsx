import { Logo } from './logo';
import { SidebarRoutes } from './sidebar-routes';

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex fixed flex-col w-dashboard-sidebar left-0 shrink-0 h-full">
      <Logo />
      <SidebarRoutes />
    </aside>
  );
};
