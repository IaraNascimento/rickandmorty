import { MenuItem } from "@/types/menu";
import MenuItemComponent from "./menu-item";

import { MenuNavigation } from "./styles";

export default function Menu() {
  const menu: Array<MenuItem> = [
    {
      id: "00",
      name: "Home",
      url: "/",
    },
    {
      id: "01",
      name: "Personagens",
      url: "/characters",
    },
    {
      id: "02",
      name: "Lugares",
      url: "/locations",
    },
    {
      id: "03",
      name: "Episódios",
      url: "/episodes",
    },
  ];

  return (
    <MenuNavigation>
      <ul>
        {menu.map((el) => (
          <li key={el.id}>
            <MenuItemComponent item={el} />
          </li>
        ))}
      </ul>
    </MenuNavigation>
  );
}
