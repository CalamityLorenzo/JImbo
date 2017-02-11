import * as React from "react";
import * as ReactDOM from "react-dom";

var PostData = require("./PostData.json")
// import {CreateComment} from "./components/CreateComment";
import {CommentThread} from "./components/CommentThread";

//    <CreateComment defaultUser='Pigeon' defaultContent="" />
ReactDOM.render(
    <CommentThread id={PostData.id} user={PostData.user} content={PostData.content} comments={PostData.comments} />
, document.getElementById('commentCentrals')
)

