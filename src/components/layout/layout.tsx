"use client";

import {FC} from "react";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100">
            <main className="min-h-screen flex items-center justify-center">
                {children}
            </main>
        </div>
    )
}
export default Layout;