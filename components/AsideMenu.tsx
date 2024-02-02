import React from "react";
import Link from "next/link";

const AsideMenu = () => {
  return (
    <aside className="w-1/6 h-max">
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/reading">
            <p>Reading</p>
          </Link>
        </li>
        <li>
          <Link href="/listening">
            <p>Listening</p>
          </Link>
        </li>
        <li>
          <Link href="/speaking">
            <p>Speaking</p>
          </Link>
        </li>
        <li>
          <Link href="/writing">
            <p>Writing</p>
          </Link>
        </li>
        <li>
          <Link href="/grammer">
            <p>Grammer</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideMenu;
