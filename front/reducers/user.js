import produce from 'immer';

const initialState = {
    isLoggingOut: false, // 로그아웃 시도중
    isLoggingIn: false, // 로그인 시도중
    logInErrorReason: '', //로그인 실패 사유
    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
    signUpErrorReason: '', // 회원가입 실패 사유
    me: null, // 내 정보
    followingList: [], // 팔로잉 리스트
    followerList: [], // 팔로워 리스트
    userInfo: null, // 남의 정보 
    isEditingNickname: false, // 이름 변경 중
    editNicknameErrorReason: '', // 이름 변경 실패 사유
    hasMoreFollower: false,
    hasMoreFollowing: false,
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {

        switch (action.type) {
            case LOG_IN_REQUEST: {
                draft.isLoading = true;
                draft.isLoggingIn = true;
                draft.logInErrorReason = '';
                break;
                // return {
                //     ...state,
                //     isLoading: true,
                //     isLoggingIn: true,
                //     logInErrorReason: '',
                // }
            }

            case LOG_IN_SUCCESS: {
                draft.isLoggingIn = false;
                draft.isLoading = false;
                draft.me = action.data;
                break;
                // return {
                //     ...state,
                //     isLoggingIn: false,
                //     me: action.data,
                //     isLoading: false,
                // }
            }

            case LOG_IN_FAILURE: {
                draft.isLoggingIn = false;
                draft.logInErrorReason = action.reason;
                draft.me = null;
                break;
                // return {
                //     ...state,
                //     isLoggingIn: false,
                //     logInErrorReason: action.error,
                //     me: null,
                // }
            }

            case LOG_OUT_REQUEST: {
                draft.isLoggingOut = true;
                break;
                // return {
                //     ...state,
                //     isLoggingOut: true,
                // }
            }

            case LOG_OUT_SUCCESS: {
                draft.isLoggingOut = true;
                draft.me = null;
                break;
                // return {
                //     ...state,
                //     isLoggingOut: false,
                //     me: null,
                // }
            }

            case SIGN_UP_REQUEST: {
                draft.isSigningUp = true;
                draft.isSignedUp = false;
                draft.signUpErrorReason = '';
                break;
                // return {
                //     ...state,
                //     isSigningUp: true,
                //     isSignedUp: false,
                //     signUpErrorReason: '',
                // }
            }

            case SIGN_UP_SUCCESS: {
                draft.isSigningUp = false;
                draft.isSignedUp = true;
                break;
                // return {
                //     ...state,
                //     isSigningUp: false,
                //     isSignedUp: true,
                // }
            }

            case SIGN_UP_FAILURE: {
                draft.isSigningUp = false;
                draft.signUpErrorReason = action.error;
                break;
                // return {
                //     ...state,
                //     isSigningUp: false,
                //     signUpErrorReason: action.error,
                // }
            }

            case LOAD_USER_REQUEST: {
                break;
                // return {
                //     ...state,
                // }
            }

            case LOAD_USER_SUCCESS: {
                if (action.me) {
                    draft.me = action.data;
                }
                draft.userInfo = action.data;
                break;
                // if (action.me) {
                //     return {
                //         ...state,
                //         me: action.data,
                //     }
                // }
                // return {
                //     ...state,
                //     userInfo: action.data
                // }
            }

            case LOAD_USER_FAILURE: {
                break;
                // return {
                //     ...state,
                // }
            }

            case FOLLOW_USER_REQUEST: {
                break;
                // return {
                //     ...state,
                // }
            }

            case FOLLOW_USER_SUCCESS: {
                draft.me.Followings.unshift({ id: action.data });
                break;
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Followings: [{ id: action.data }, ...state.me.Followings]
                //     },
                // }
            }

            case FOLLOW_USER_FAILURE: {
                break;
                // return {
                //     ...state,
                // }
            }

            case UNFOLLOW_USER_REQUEST: {
                break;
                // return {
                //     ...state,
                // }
            }

            case UNFOLLOW_USER_SUCCESS: {
                const index = draft.me.Followings.findIndex(v => v.id === action.data);
                draft.me.Followings.splice(index, 1);
                const index2 = draft.followingList.findIndex(v => v.id === action.data);
                draft.followingList.splice(index2, 1);
                break;
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Followings: state.me.Followings.filter(v => v.id !== action.data),
                //     },
                //     followingList: state.followingList.filter(v => v.id !== action.data),
                // }
            }

            case UNFOLLOW_USER_FAILURE: {
                break;
                // return {
                //     ...state,
                // }
            }
            case ADD_POST_TO_ME: {
                draft.me.Posts.unshift({ id: action.data });
                break;
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Posts: [{ id: action.data }, ...state.me.Posts],
                //     }
                // }
            }

            case REMOVE_POST_OF_ME: {
                const index = draft.me.Posts.findIndex(v => v.id === action.data);
                draft.me.Post.slice(index, 1);
                break;
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Posts: state.me.Posts.filter(v => v.id !== action.data),
                //     }
                // }
            }

            case LOAD_FOLLOWERS_REQUEST: {
                draft.followerList = !action.offset ? [] : draft.followerList;
                draft.hasMoreFollower = action.offset ? state.hasMoreFollower : true;
                break;
                // return {
                //     ...state,
                //     hasMoreFollower: action.offset ? state.hasMoreFollower : true   // 처음 데이터를 가져올 때는 더보기 버튼을 보여주는 걸로
                // }
            }

            case LOAD_FOLLOWERS_SUCCESS: {
                action.data.forEach((d) => {
                    draft.followerList.push(d);    
                })
                draft.hasMoreFollower = action.data.length === 3;
                break;
                // return {
                //     ...state,
                //     followerList: state.followerList.concat(action.data),
                //     hasMoreFollower: action.data.length === 3,
                // }
            }

            case LOAD_FOLLOWERS_FAILURE: {
                break;
                // return {
                //     ...state,
                // }
            }

            case LOAD_FOLLOWINGS_REQUEST: {
                draft.followingList = !action.offset ? [] : draft.followingList;
                draft.hasMoreFollowing =  action.offset ? state.hasMoreFollowing : true;
                break;
                // return {
                //     ...state,
                //     hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,
                // }
            }

            case LOAD_FOLLOWINGS_SUCCESS: {
                action.data.forEach((d) => {
                    draft.followingList.push(d)
                })
                draft.hasMoreFollowing = action.data.length === 3;
                break;
                // return {
                //     ...state,
                //     followingList: state.followingList.concat(action.data),
                //     hasMoreFollowing: action.data.length === 3,
                // }
            }

            case LOAD_FOLLOWINGS_FAILURE: {
                break;
                // return {
                //     ...state,
                // }
            }

            case REMOVE_FOLLOWER_REQUEST: {
                break;
                // return {
                //     ...state,
                // }
            }

            case REMOVE_FOLLOWER_SUCCESS: {
                const index = draft.me.Followers.findIndex( v => v.id === action.data);
                draft.me.Followers.splice(index, 1);
                const index2 = draft.followerList.findIndex(v => v.id === action.data);
                draft.followerList.splice(index2, 1);
                break;
                // return {
                //     ...state,
                //     me: {
                //         ...state.me,
                //         Followers: state.me.Followers.filter(v => v.id !== action.data),
                //     },
                //     followerList: state.followerList.filter(v => v.id !== action.data),
                // }
            }

            case REMOVE_FOLLOWER_FAILURE: {
                break;
                // return {
                //     ...state,
                // }
            }

            case EDIT_NICKNAME_REQUEST: {
                draft.isEditingNickname = true;
                draft.editNicknameErrorReason = '';
                break;
                // return {
                //     ...state,
                //     isEditingNickname: true,
                //     editNicknameErrorReason: '',
                // }
            }

            case EDIT_NICKNAME_SUCCESS: {
                draft.isEditingNickname = false;
                draft.me.nickname = action.data;
                break;
                // return {
                //     ...state,
                //     isEditingNickname: false,
                //     me: {
                //         ...state.me,
                //         nickname: action.data,
                //     },
                // }
            }

            case EDIT_NICKNAME_FAILURE: {
                draft.isEditingNickname = false;
                draft.editNicknameErrorReason = action.error;
                break;
                // return {
                //     ...state,
                //     isEditingNickname: false,
                //     editNicknameErrorReason: action.error,
                // }
            }

            default: {
                break;
                // return {
                //     ...state
                // }
            }
        }
    })

}


export default reducer;