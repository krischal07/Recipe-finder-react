import React from "react";

const Sidebar = () => {
  return (
    <div>
      <DesktopSidebar />

      <MobileSidebar />
    </div>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="/logo.svg" alt="" className="hidden md:block" />
          <img src="/mobile-logo.svg" alt="" className="block md:hidden" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-8">
          {/* <Link></Link> */}
        </ul>
      </div>
    </div>
  );
};
