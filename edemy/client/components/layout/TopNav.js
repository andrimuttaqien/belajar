// Antd
import { Menu } from "antd";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
// Nextjs & Reacts
import Link from "next/link";
import { useState, useEffect } from "react";
const { Item } = Menu;

export default function TopNav() {
  const [current, setCurrent] = useState("");
  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
    console.log(window.location.pathname);
  }, [process.browser && window.location.pathname]);
  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Item
        icon={<AppstoreOutlined />}
        key={"/"}
        onClick={(e) => setCurrent(e.key)}
      >
        <Link href={"/"}>
          <a className="">App</a>
        </Link>
      </Item>
      <Item
        icon={<LoginOutlined />}
        key={"/login"}
        onClick={(e) => setCurrent(e.key)}
      >
        <Link href={"/login"}>
          <a className="">Login</a>
        </Link>
      </Item>
      <Item
        icon={<UserAddOutlined />}
        key={"/register"}
        onClick={(e) => setCurrent(e.key)}
      >
        <Link href={"/register"}>
          <a className="">Register</a>
        </Link>
      </Item>
    </Menu>
  );
}
