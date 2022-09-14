import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import {Link} from "react-router-dom"
import React from "react";

const Navigation: React.FC = () => {
  return (
    <>
      <Header className="bg-white shadow-md ">
        <Menu className="flex justify-center items-center ant-menu-horizontal py-2"> 
        <Link to={"/"}>
          <Menu.Item className="text-gray-900">
            News Case
          </Menu.Item>
          </Link>
        </Menu>
      </Header>
    </>
  );
};
export default Navigation;
