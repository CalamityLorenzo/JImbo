// Interfaces objets for commenting system
export interface ICreateCommentProps{
    user?:string,
    content?:string,
    onCreateComment:(name:string, content:string)=>void
} 

export interface ICreateCommentState{
    user:string,
    content:string
}

export interface IComment{
    id:number,
    user:string,
    content:string
}

export interface ICommentProps extends IComment{
    key:number
}

export interface ICommentState extends IComment{
    key:number;
}


export interface IPostProps extends IComment{
}

export interface IPostState extends IComment{
}

export interface ICommentThread extends IComment, IComments{
    
}

export interface IComments {
    comments:Array<IComment>
}