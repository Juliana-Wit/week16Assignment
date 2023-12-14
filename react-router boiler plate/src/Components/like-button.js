import React, { useState } from "react";

//When this like button is clicked it will show the user 
//how many times the button has been clicked. Each click 
//will add to the number displayed to the UI.

function LikeButton() {
    const [likes, setLikes] = useState(0);
    return(
        <button onClick={() => setLikes(likes =1)}>
            {likes} Likes
        </button>
    );
}
export default LikeButton;