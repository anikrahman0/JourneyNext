// app/layout.js  (Next.js App Router)
import Link from "next/link";

// import "./globals.css";
// import "./loading.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="flex min-h-screen">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
                    <h2 className="text-xl font-bold mb-6">My App</h2>
                    <nav className="flex flex-col space-y-2">
                        <Link href="/" className="hover:bg-gray-700 p-2 rounded">
                            Home
                        </Link>
                        <Link href="/articles" className="hover:bg-gray-700 p-2 rounded">
                            Articles
                        </Link>
                        <Link href="/media" className="hover:bg-gray-700 p-2 rounded">
                            Media
                        </Link>
                        <Link href="/users" className="hover:bg-gray-700 p-2 rounded">
                            Users
                        </Link>
                        <Link href="/settings" className="hover:bg-gray-700 p-2 rounded">
                            Settings
                        </Link>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 bg-gray-100 p-6">{children}</main>
            </body>
        </html>
    );
}
