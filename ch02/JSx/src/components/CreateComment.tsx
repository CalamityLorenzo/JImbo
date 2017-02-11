import * as React from "react";
import {ICreateCommentProps, ICreateCommentState} from "../datamodel"

export class CreateComment extends React.Component<ICreateCommentProps, ICreateCommentState>{
    constructor(props:any){
        super(props);
        this.onCreateComment = this.props.onCreateComment;
        this.onCreateComment = this.onCreateComment;
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user:this.props.user,
            content:this.props.content
        }
    }
    onCreateComment: (name:string, content:string)=>void
    handleUserChange(evt:any):void{
        this.setState({user:evt.target.value});
    }
    handleTextChange(evt:any):void{
        this.setState({
            content:evt.target.value
        })
    }
    handleSubmit(evt:any):void{
        evt.preventDefault();
        this.onCreateComment(this.state.user, this.state.content);
    }
    render(){
        return (<form className="CreateComment" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleUserChange} value={this.state.user} placeholder="Your name"></input>
            <input type="text" onChange={this.handleTextChange} value={this.state.content} placeholder="Thoughts?"></input>
            <input type="submit" value="Post"/>
        </form>)
    }
}