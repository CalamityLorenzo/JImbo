import * as React from "react";

export interface CommentProps{
    handleContentChange:void,
    handleUserChange:void,
    handleSubmit:void
    user:string,
    content:string
} 

export interface CreateCommentState{
    user:'',
    content:''
}

export class CreateComment extends React.Component<CommentProps, CreateCommentState>{
    handleUserChange(this:any, evt:any):void{
        console.log('boom');
    }
    render(){
        return <form className="CreateComment">
            <input type="text" onChange={this.handleUserChange} value={this.state.user} placeholder="Your name"></input>
        </form>
    }
}