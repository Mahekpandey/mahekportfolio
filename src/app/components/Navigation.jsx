"use client";
import React from "react";
import { Home, User, Code, Phone, Book } from "lucide-react";
import { AnimeNavBar } from "./ui/anime-navbar";

const navItems = [
  {
    name: "Home",
    url: "#home",
    icon: Home
  },
  {
    name: "About",
    url: "#about",
    icon: User
  },
  {
    name: "Projects",
    url: "#projects",
    icon: Code
  },
  {
    name: "Blogs",
    url: "#blogs",
    icon: Book
  },
  {
    name: "Contact",
    url: "#contact",
    icon: Phone
  }
];

export const Navigation = () => {
  return <AnimeNavBar items={navItems} defaultActive="Home" />;
}; 