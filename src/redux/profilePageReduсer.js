import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_USER_STATUS = "GET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCESS = "SAVE_PHOTO_SUCESS";

let initialState = {
  postsData: [
    {
      id: 1,
      name: "Arthur Onoprienko",
      message: "Всем привет я тут новенький!!",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia4OplrCNe7nvXgSfm31BVW4f6mN4pV4Q9Q&usqp=CAU",
      likeCount: 5,
    },
    {
      id: 2,
      name: "Denis Titov",
      message: "Я качаю банки как зверь!",
      url: "https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png",
      likeCount: 0,
    },
    {
      id: 3,
      name: "Daria Onoprienko",
      message: "Будешь ехать домой, купи чипсиков!",
      url: "https://i.pinimg.com/736x/84/dd/6e/84dd6e50b90c7bf1319ebbc3711cfff4.jpg",
      likeCount: 83,
    },
    {
      id: 4,
      name: "Ksenia Gulchinskaya",
      message: "Я опаздываю на работу",
      url: "https://author.today/content/2021/03/25/8488dde4a706465f96bf00ec457e4ec3.png",
      likeCount: 12,
    },
    {
      id: 5,
      name: "Anton Taran",
      message: "Тебе еду сегодня привозить?",
      url: "https://download-cs.net/steam/avatars/3434.jpg",
      likeCount: 72,
    },
    {
      id: 6,
      name: "Vitalii Shmatko",
      message: "Это будет весело!",
      url: "https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg",
      likeCount: 23,
    },
    {
      id: 7,
      name: "Vitalii Shmatko",
      message: "Вы же прийдете?",
      url: "https://www.meme-arsenal.com/memes/a5dd2f55b36488a10172f4f84352846b.jpg",
      likeCount: 2,
    },
    {
      id: 8,
      name: "Denis Titov",
      message: "Я точно буду!",
      url: "https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png",
      likeCount: 0,
    },
    {
      id: 9,
      name: "Denis Titov",
      message: "Залетайте в Titov Gym!",
      url: "https://meragor.com/files/styles//ava_800_800_wm/standoff_1q.png",
      likeCount: 441,
    },
  ],
  profile: null,
  status: "",
};

const profileReduсer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 9,
        name: "Anton Onoprienko",
        message: action.newPostText,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/COA_of_Kharkiv_Oblast.svg/1200px-COA_of_Kharkiv_Oblast.svg.png",
        likeCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case GET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      };
    case SAVE_PHOTO_SUCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getStatus = (status) => ({
  type: GET_USER_STATUS,
  status,
});
export const updateStatus = (status) => ({
  type: UPDATE_USER_STATUS,
  status,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const savePhotoSucess = (photos) => ({
  type: SAVE_PHOTO_SUCESS,
  photos,
});

export const getProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(getStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.result === 0) {
    dispatch(getStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.result === 0) {
    dispatch(savePhotoSucess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.result === 0) {
    dispatch(getProfile(userId));
  }
};
export default profileReduсer;
