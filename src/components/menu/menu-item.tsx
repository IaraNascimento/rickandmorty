import { MenuItem } from "@/types/menu";
import Link from "next/link";

interface MenuItemComponentProps {
  item: MenuItem;
}

export default function MenuItemComponent({ item }: MenuItemComponentProps) {
  return <Link href={item.url}>{item.name}</Link>;
}
