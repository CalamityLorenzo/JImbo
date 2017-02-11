import * as React from "react"
import {CreateComment} from "./CreateComment"
import {IPostProps, IPostState} from "../datamodel"

export class Post extends React.Component<IPostProps,IPostState>{
    constructor(props:any){
        super(props);
        this.state={
            id:this.props.id,
            user:this.props.user,
            content: this.props.content
        }
    }
    render(){
        return(
            <div className="post">
                <h2 className="postAuthor" id={this.props.id.toString()} >{this.state.user}</h2>
                <div className="postBody" >{this.state.content}</div>
            </div>
        )
    }
}