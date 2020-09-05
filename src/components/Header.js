import React from "react";
import {Menu, Button, Icon} from "semantic-ui-react";

export default function Header() {
    return (
        <div className="header">
            <Menu borderless={true}>
                <Menu.Item position={"left"}>
                    <h1 id={"titlename"}>funniez</h1>
                </Menu.Item>
                <Menu.Item>

                </Menu.Item>
            </Menu>
        </div>
    )
}
