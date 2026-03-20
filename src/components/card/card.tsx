import { Episode } from "@/types/episode";
import Link from "next/link";

interface CardProps {
  ep: Episode;
}

export default function Card({ ep }: CardProps) {
  return <Link href={`episodes/${ep.id}`}>{ep.id}</Link>;
}
