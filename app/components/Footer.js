"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-800 antialiased">
            <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    {/* Company */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Company
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <Link href="/about" className="hover:underline">
                                    About
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/careers" className="hover:underline">
                                    Careers
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/brand-center" className="hover:underline">
                                    Brand Center
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/blog" className="hover:underline">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Help Center */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Help center
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <Link href="/discord" className="hover:underline">
                                    Discord Server
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/twitter" className="hover:underline">
                                    Twitter
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/facebook" className="hover:underline">
                                    Facebook
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/contact" className="hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Legal
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Licensing
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Removed duplicate Company section */}

                    {/* Download */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Download
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    iOS
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Android
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Windows
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    MacOS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                {/* Logo + Social */}
                <div className="text-center">
                    <a
                        href="#"
                        className="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        {/* SVG Logo */}
                        <svg
                            className="mr-2 h-8"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Keep all your <path> and <defs> inside */}
                        </svg>
                        Flowbite
                    </a>

                    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2021-2022{" "}
                        <Link href="#" className="hover:underline">
                            Flowbite™
                        </Link>
                        . All Rights Reserved.
                    </span>

                    {/* Social Icons */}
                    <ul className="flex justify-center mt-5 space-x-5">
                        <li>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                            >
                                {/* Facebook Icon */}
                                <svg
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 8 19"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142..."
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                        {/* Repeat for other icons */}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
