import type { Metadata } from "next";
import CareerDetails from "./CareerDetails";

export const metadata: Metadata = {
  title: "Career | Sukan M",
  description: "Career with Sukan Marketing",
};

export default function CareerDetailPage() {
  return <CareerDetails />;
}
