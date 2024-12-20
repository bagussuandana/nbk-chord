"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Github, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import appConfig from "@/app.config";

const Header = () => {
    const { routes, logo, githubRepo } = appConfig;

    const pathname = usePathname();
    const active = routes.find(
        (item: any) => item.value == "/" + pathname.split("/")[1]
    )?.name;

    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <div
            className={
                "w-full sticky top-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-sm z-10 min-h-20"
            }
        >
            <header className={"container flex justify-between py-4"}>
                <div className={"flex justify-center items-center"}>
                    <Link
                        className={"flex justify-center items-center mr-4"}
                        href={"/"}
                    >
                        {logo?.image && (
                            <Image
                                src={logo?.image}
                                height={28}
                                width={28}
                                alt={"logo"}
                            />
                        )}
                        {logo?.text && (
                            <div
                                className={
                                    "ml-1 text-lg font-semibold lg:block hidden"
                                }
                            >
                                {logo?.text}
                            </div>
                        )}
                    </Link>
                    <div className={"hidden md:block space-x-1"}>
                        {routes.map((route: any) => (
                            <Link
                                href={route?.value}
                                key={route?.value}
                                onClick={() => {
                                    if (typeof window !== "undefined") {
                                        localStorage.setItem("prevUrl", "");
                                    }
                                }}
                            >
                                <Button
                                    variant={
                                        active == route.name
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    className={"text-base"}
                                >
                                    {route.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={"flex justify-center items-center space-x-1"}>
                    <div className={"md:hidden block"}>
                        <Sheet
                            open={open}
                            onOpenChange={() => {
                                setOpen(!open);
                            }}
                        >
                            <SheetTrigger>
                                <Button size={"icon"} variant={"ghost"}>
                                    <Menu size={20} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side={"top"}
                                className={"w-full space-y-4 p-12 text-sm"}
                            >
                                {routes.map((route: any, index: number) => (
                                    <div className={"space-y-4"} key={index}>
                                        <Link
                                            href={route.value}
                                            onClick={() => {
                                                setOpen(false);
                                                if (
                                                    typeof window !==
                                                    "undefined"
                                                ) {
                                                    localStorage.setItem(
                                                        "prevUrl",
                                                        ""
                                                    );
                                                }
                                            }}
                                        >
                                            <Button
                                                variant={
                                                    active == route.name
                                                        ? "secondary"
                                                        : "ghost"
                                                }
                                                className={"text-base w-full"}
                                            >
                                                {route.name}
                                            </Button>
                                        </Link>
                                        {index != routes.length - 1 && (
                                            <Separator />
                                        )}
                                    </div>
                                ))}
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Link href={githubRepo} target="_blank">
                        <Button size={"icon"} variant={"ghost"}>
                            <Github size={20} />
                        </Button>
                    </Link>
                    <Button
                        size={"icon"}
                        variant={"ghost"}
                        onClick={() => {
                            setTheme(theme == "light" ? "dark" : "light");
                        }}
                    >
                        {theme == "light" && <Sun size={20} />}
                        {theme == "dark" && <Moon size={20} />}
                    </Button>
                </div>
            </header>
        </div>
    );
};

export default Header;
