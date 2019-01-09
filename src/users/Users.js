import React from 'react';
import Data from '../services/Data';
import style from './Users.module.css';

export default class Users extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            loaded : false,
            users: []
        }
    }

    getUsers = () => {
        Data.getUsers().then(
            result => {
                this.setState({
                    users: [...result.data],
                    loaded: true
                })
            }
        )
    }

    componentDidMount(){
        this.getUsers();
    }

    render(){

        const {loaded, users} = this.state;

        if(loaded){
            return  <section className={style.users}>
                        <h1>Users</h1>
                        <div>
                            {users.map((user,index) => (
                                <article key={index}>{user.name}</article>
                            ))}
                        </div>
                    </section>
        }else {
            return <div>Carregando</div>
        }

    }

}