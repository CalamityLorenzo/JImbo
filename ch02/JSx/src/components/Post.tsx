import * as React from "react"
import {CreateComment} from "./CreateComment"

export interface IComment{
    id:number,
    user:string,
    content:string
}

export interface IPostProps{
    userDef:string,
    content:string,
    id:number
    comments:IComment[]
}
export interface IPostState{
    user:string,
    content:string,
    id:number
}

export class Post extends React.Component<IPostProps,IPostState>{
    constructor(props:any){
        super(props);
        this.state={
            user:this.props.userDef,
            content: this.props.content,
            id:this.props.id
        }
    }
    render(){
        return(
            <div className="post">
                <h2 className="postAuthor" id={this.props.id.toString()} >{this.state.user}</h2>
                <div className="postBody" >{this.state.content}</div>
                {this.props.children}
                <CreateComment defaultUser="" defaultContent="" />
            </div>
        )
    }
}