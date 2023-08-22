"use client";

import Image from "next/image";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Home() {
  const { value } = useSelector((state: RootState) => state.counter);
  return (
    <main>
      <h1 className="text-4xl">Next js redux</h1>
      <Counter counter={value} />
    </main>
  );
}
