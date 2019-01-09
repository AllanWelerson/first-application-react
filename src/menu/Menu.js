import React from 'react';
import {Link} from 'react-router-dom';
import style from './Menu.module.css';

export default class Menu extends React.Component {

    render(){

        return ( <nav className={style.menu}>
                    <ul>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                    </ul>
                </nav>
                )

    }

}