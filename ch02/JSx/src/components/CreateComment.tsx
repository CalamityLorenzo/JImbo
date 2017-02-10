import * as React from "react";

export interface CommentProps{
    defaultUser:string,
    defaultContent:string
} 

export interface CreateCommentState{
    user:string,
    content:string
}

export class CreateComment extends React.Component<CommentProps, CreateCommentState>{
    constructor(props:any){
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user:this.props.defaultUser,
            content:this.props.defaultContent
        }
    }
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
        console.log('submit')
    }
    render(){
        return (<form className="CreateComment" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleUserChange} value={this.state.user} placeholder="Your name"></input>
            <input type="text" onChange={this.handleTextChange} value={this.state.content} placeholder="Thoughts?"></input>
            <input type="submit" value="Post"/>
        </form>)
    }
}