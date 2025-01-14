import '../assets/css/main.css';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import { Link } from 'react-router-dom';


function SidebarMenu() {
  return (
    <div className="SidebarMenu">
      <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>

        <Sidebar>
          <Menu
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                [`&.active`]: {
                  backgroundColor: '#13395e',
                  color: '#b6c8d9',
                },
              },
            }}
          >
            <MenuItem component={<Link to="/mysite" />}> Home </MenuItem>
            {/* <MenuItem component={<Link to="/about" />}> About </MenuItem>
            <MenuItem component={<Link to="/experience" />}> Experience </MenuItem>
            <MenuItem component={<Link to="/skills" />}> Skills </MenuItem>
            <MenuItem component={<Link to="/projects" />}> Projects </MenuItem> */}
          </Menu>
        </Sidebar>;
      </div>

    </div>

  );
}

export default SidebarMenu;
