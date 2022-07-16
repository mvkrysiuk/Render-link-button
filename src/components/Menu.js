import React from "react";
import MenuItem from "./MenuItem";
import { listsDoc } from "../data/constans";

export default class Menu extends React.Component {
    render() {
        return (
            listsDoc.map(list => 
                <MenuItem 
                    key = {list.title}
                    title = {list.title}
                    link = {list.link}
                />
            )
        );
    }
}