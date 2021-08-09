import React from 'react';
import './Post.css';
// import editBtn from '../Assets/edit.png'

const Post = (props) => {

  var likeClasses = ["im", "like-img", "im-thumb-up"];
  var dislikeClasses = ["im", "like-img", "im-thumb-down"];
  var likes = props.likesArr.length - props.dislikesArr.length;

  if (props.currentUserLike === 1) {
    likeClasses.push("green-txt");
  }
  if (props.currentUserLike === -1) {
    dislikeClasses.push("red-txt");
  }

  return (
    <div className="post-div">
      <div className="post-header">
        <div className="author-div">
          <i class="fas fa-user-circle"></i>
          {/* <img
            src={props.authorPic}
            className="author-pic"
            alt="ProPic"
          ></img> */}
          <div className="author-name">{props.authorName}</div>
        </div>
        <div className="edit-btn-div shake-rotate">
          <button className="edit"><i class="fas fa-pencil-alt" aria-hidden="true" onClick={props.edit}></i></button>
          <button class="remove">


            <i class="fas fa-trash" aria-hidden="true" onClick={props.delete}></i></button>
          {/* <img
            
            className="edit-btn"
            alt="Edit"
            onClick={props.edit}
          ></img> */}
        </div>
      </div>
      <div className="post-text">{props.text}</div>
      <div className="post-footer">
        <div className="like-dislike-div">
          <div className="like-div">
            {/* <i className="far fa-thumbs-up" aria-hidden="true" onClick={props.like}></i> */}
            <i onClick={props.like} className={likeClasses.join(" ")}></i>
          </div>
          <div className="like-counter">{likes}</div>
          <div className="dislike-div">
            <i
              onClick={props.dislike}
              className={dislikeClasses.join(" ")}
            ></i>
          </div>
        </div>
        <div class="share">



          <i class="fas fa-share-alt" aria-hidden="true"></i></div>
        {/* <div className="delete-div">
          <i
            onClick={props.delete}
            className="im im-trash-can delete-btn"
          ></i>
        </div> */}
      </div>
    </div>
  );
}

export default Post;