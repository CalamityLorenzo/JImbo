import * as React from "react"

import {IComment, ICommentProps, ICommentState} from "../datamodel"

export class Comment extends React.Component<ICommentProps, undefined>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <div className="comment">
                <h2 className="commentAuthor">{this.props.user}</h2>
                <span className="commentContent">{this.props.content}</span>
            </div>
        )
    }
}