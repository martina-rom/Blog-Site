import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src="https://media.istockphoto.com/id/1424722148/photo/buyer-takes-a-beautiful-bouquet-from-the-seller.jpg?s=612x612&w=0&k=20&c=iNSVeoEZUCrmf4aHb_uKRS47WLrBNfL8hr5KXv7mso4="   
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            Lorem ipsum dolor sit amet </span>
            <hr />
            <span className="postDate"> 1 hour ago</span>
        </div>
        <p className="postDescription">
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    )
}
