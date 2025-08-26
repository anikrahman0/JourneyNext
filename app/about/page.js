import getAllPosts from "@/lib/getAllPosts";
import Image from "next/image";

export const metadata = {
    title: "About Page",
    description: "This is about page",
};
export default function About() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="max-w-2xl text-center text-lg mb-6">
                Welcome to our company! We build modern web applications using Next.js and Tailwind CSS.
            </p>
            <div className="flex gap-4">
                <a
                    href="#"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Learn More
                </a>
                <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                >
                    Contact Us
                </a>
            </div>
        </main>
    );
}

