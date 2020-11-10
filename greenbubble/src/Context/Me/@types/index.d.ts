//회원가입 시 사용자 정보
interface IMyInfo{
    email: string;
    name: string;
    //isLogin: boolean;
}

//사용자 로그인정보
interface IMyContext{
    //isLogin: boolean;
    isLoading: boolean;
    userInfo: IMyInfo | undefined;
    login: (email: string, password: string) => void;
    //getUserInfo: () => void;
    logout: () => void;
}