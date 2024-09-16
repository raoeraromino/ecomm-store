import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import MainNav from "./MainNav";
import { getCategories } from "@/lib/actions/categories";
import NavbarAction from "./NavbarAction";

const Navbar = async () => {
  const data = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={data} />
          <NavbarAction />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
