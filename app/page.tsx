// 'use client'
import React from "react";

import Users from "@/components/Users";

export const metadata = {
  title: "Zona Chapín - Home",
  description: "Zona Chapín - Home",
}



export default function HomePage() {
  return (
    // server component
    <section>
      <h1>Zona Chap&iacute;n</h1>
      <button>Marry Me!</button>
      {/* client component */}
      <Users />
    </section>
  );
}
