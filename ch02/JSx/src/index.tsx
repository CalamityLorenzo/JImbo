import * as React from "react";
import * as ReactDOM from "react-dom";

var PostData = require("./PostData.json")
// import {CreateComment} from "./components/CreateComment";
import {Post} from "./components/Post";

//    <CreateComment defaultUser='Pigeon' defaultContent="" />
ReactDOM.render(
    <Post id={0} userDef="Derek Hinds" content="Everybody should follow their web posts - Sammy j" comments={PostData.comments} />
, document.getElementById('commentCentrals')
)

