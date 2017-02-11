import * as React from "react"
import {Post} from "./Post"
import {Comment} from "./Comment"
import {CreateComment} from "./CreateComment"
import {ICommentThread, IComments} from "../datamodel"
// This holds the whole thing together.
export class CommentThread extends React.Component<ICommentThread, IComments>{
    constructor(props:any){
        super(props);
        this.handleCreateComment = this.handleCreateComment.bind(this);
        this.state={
            comments:this.props.comments
        };
    }
    handleCreateComment(name:string, content:string) : void{
    var newId = Math.floor(Math.random() * 100000) + 200;
       var newComments = this.state.comments.concat([{
           id: newId,
           user:name,
           content:content
       }]);
        this.setState({
            comments: newComments
        });
    }
    render() : JSX.Element{
        return (
            <div className="commentBox">
                <Post id={this.props.id} user={this.props.user} content={this.props.content} />
                {this.state.comments.map(cmt=>{
                           return <Comment key={cmt.id} id={cmt.id} user={cmt.user.toString()} content={cmt.content.toString()} />
                    })}
                <CreateComment user="" content="" onCreateComment={(s,e)=>this.handleCreateComment(s,e)} />
            </div>
        )
    }
} 