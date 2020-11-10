//프로필 사진은 어떻게 가지고 올래??
import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';


//상속 
interface Props {
    cache?: boolean; //기존에 저장된 데이터가 있는지
    children: JSX.Element | Array<JSX.Element>; 
}
//친구 프로필
const FriendContext = createContext<IFriendProfile>({
    name: '홍길똥',
    photo: '',
});

const FriendProfileProvider = ({cache, children}: Props) =>{
    const[friendList, setFRreindList] = useState<Array<IFriendProfile>>([]);

//캐시데이터가 있으면 가져옴
    const getCacheData = async(key: string) => {
        const cacheData = await AsyncStorage.getItem(key);
        if(cache === false || cacheData === null){
            return undefined;
        }

        const cacheList = JSON.parse(cacheData);
        return cacheList;
    };
    //문자열로 전달받은 배열 데이터를 문자열로 저장해 AsyncStorage에 저장
    const setCacheData = (key: string, data: Array<any>) => {
            AsyncStorage.setItem(key, JSON.stringify(data));
    };


    //사용자 프로필 설정하기
    const setFRreinds = async() =>{
        const cachedData = await getCacheData('UserList');
        if(cachedData){
            setFRreindList(cachedData);
            return;
        }
        else{
            console.log("setFriendsList Error!");
         }
    };
    
    //컴포넌트가 화면에 표시된 후, 한 번만 실행되도록 or 친구가 추가되었을 때 -> count변수?
    useEffect(() => {
        setFRreinds();
    }, []);

    return(
        <FriendContext.Provider
            value={{
                name: '',
                photo: '',
            }}>
                {children}
            </FriendContext.Provider>
    )
};

export{FriendProfileProvider, FriendContext};
