// Antd
import { Menu } from "antd";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
// Nextjs & Reacts
import Link from "next/link";

const { Item } = Menu;

export default function TopNav() {
  return (
    <Menu mode="horizontal">
      <Item icon={<AppstoreOutlined />} key={"1"}>
        <Link href={"/"}>
          <a className="">App</a>
        </Link>
      </Item>
      <Item icon={<LoginOutlined />} key={"2"}>
        <Link href={"/login"}>
          <a className="">Login</a>
        </Link>
      </Item>
      <Item icon={<UserAddOutlined />} key={"3"}>
        <Link href={"/register"}>
          <a className="">Register</a>
        </Link>
      </Item>
    </Menu>
  );
}
