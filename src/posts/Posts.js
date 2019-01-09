import React from 'react';
import Data from '../services/Data';
import style from './Posts.module.css';

export default class Posts extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            posts : [],
            loaded: false
        }
       
        
    }

    getPosts = () =>{
        Data.getPosts().then(
            result => {
                this.setState((stateB) =>({
                   posts: [...result.data],                    
                   loaded: true
                })
            )}
        ).catch(
            err =>{
                console.log(err);
            }
        )
    }

    componentDidMount(){
        this.getPosts();               
    }

    componentDidUpdate(){
       
    }

    componentWillUnmount(){
       
    }


   

    render(){

        const {posts, loaded} = this.state;

        if(loaded){
            return  <section className={style.posts}>
                        <h1>Posts</h1>
                        <span>Curretly under construction </span>
                        <div>
                        {posts.map((post, index) => (
                            <article key={index}>{post.title}</article>
                        ))}
                        </div>
                    </section>
        }else{
            return <div>Carregando</div>
        }

        
    }

}
