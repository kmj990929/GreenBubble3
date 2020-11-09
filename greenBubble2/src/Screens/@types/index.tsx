//화면 전환 시, 전달할 파라미터

/*엄격하게 하고 싶으면
type LoginStackParamList = {
    Login: {email: string, paswword: string};
    FindPassword: {email: string};
    SignUp: {email: string, name: string, password: string};
};
*/

type LoginStackNaviParamList = {
    Login: undefined;
    FindPassword: undefined;
    SignUp: undefined;
};

type BottomTabParamList = {
    FriendsList: undefined;
    ChatRoomList: undefined;
    Setting: undefined;
};

type SettingParamList = {
    DevInfo: undefined;
    Login: undefined;
    Setting: undefined;
}

type ChatParamList = {
    ChatRoomList: undefined;
    InsideRoom: undefined;
    /*
    InsideRoom: {
        id: number;
        name: string;
        photo: string;
    };*/
}

type ChatParamList2 = {
    FriendsList: undefined;
    InsideRoom: undefined;
}
