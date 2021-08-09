export const BACKEND_URL = "https://telepost.herokuapp.com";
// export const BACKEND_URL = "http://localhost:5000";

export const SIGNUP_URL = `${BACKEND_URL}/signup`;
export const SIGNIN_URL = `${BACKEND_URL}/signin`;
export const USERDATA_URL = `${BACKEND_URL}/usersecrets`;

export const POST_URL = `${BACKEND_URL}/post`;
export const ALLPOSTS_URL = `${POST_URL}/allposts`;
export const EDITPOST_URL = `${POST_URL}/edit`;
export const DELETEPOST_URL = `${POST_URL}/delete`;
export const LIKEPOST_URL = `${POST_URL}/like`;
export const DISLIKEPOST_URL = `${POST_URL}/dislike`;