"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="flex items-center mx-auto max-w-[1440px] sticky top-0 z-50 justify-between px-6 py-4 lg:px-20 bg-inherit">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Maimeals Logo"
                        width={80}
                        height={80}
                    />
                </Link>

                <div className="hidden md:flex md:items-center md:justify-center md:gap-x-8">
                    <ul className="space-x-8 hidden md:flex text-red-900">
                        {NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key}>
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                    <Button
                        type="submit"
                        title="Order Now"
                        variant="btn_dark_red"
                    />
                </div>

                <button
                    onClick={toggleMenu}
                    className="text-red-900 focus:outline-none md:hidden"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </nav>
            {isOpen && (
                <div className="md:hidden top-20 left-0 w-full h-full bg-white z-50 sticky">
                    <div className="flex flex-col items-center justify-center min-h-[40vh] gap-y-10 z-50 py-6">
                        <ul className="flex flex-col text-center text-red-900 gap-y-10">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    href={link.href}
                                    key={link.key}
                                    className="font-bold"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </ul>
                        <Button
                            type="button"
                            title="Order Now"
                            variant="btn_dark_red"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
