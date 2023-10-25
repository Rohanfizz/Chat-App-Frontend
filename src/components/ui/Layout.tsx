import React from "react";

const Layout = (props: any) => {
    return (
        <div className="bg-gray-100 min-h-screen flex">
          {/* Sidebar for desktop */}
          <aside className="hidden md:block w-1/5 bg-gray-200 p-4">
            {/* Add your sidebar content here */}
          </aside>
    
          {/* Mobile navigation (e.g., a hamburger menu) */}
          <div className="md:hidden flex items-center justify-between p-4 bg-gray-300">
            <button className="text-2xl">&#9776;</button>
            {/* Add any mobile-specific navigation or actions here */}
          </div>
    
          {/* Main content area */}
          <main className="w-full p-4">
            {/* Add your main content here */}
          </main>
        </div>
      );
};

export default Layout;
