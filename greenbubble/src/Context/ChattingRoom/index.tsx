import React, {useState, useEffect, createContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';


interface Props{
    children: JSX.Element | Array<JSX.Element>;
    cache?: boolean;
}
interface IChatRoomData{
    getRoomList: (number?: number) => Array<IChatRoom>;
}

const ChatRoomDataContext = createContext<IChatRoomData>({
    getRoomList: (number: number = 7) => {
        return [];
    },
});

const ChatRoomDataProvider = ({cache, children}: Props) => {
    const[userList, setUserList] = useState<IUserProfile>>([]);

    const getCacheData = async (key: string) => {
        const cacheData = await AsyncStorage.getItem(key);
        if(cache === false || cacheData === null){
            return undefined;
        }

        const cacheList = JSON.parse(cacheData);

        if(cacheList.length !== 7){
            return undefined;
        }

        return cacheList;
    };

    const setCachedData = (key: string, data:Array<any>) => {
        AsyncStorage.setItem(key, JSON.stringify(data));
    }

    const setUsers = async () => {
        const cachedData = await getCacheData('UserList');
        if (cachedData) {
          setUserList(cachedData);
          return;
        }
    
        try {
          const response = await fetch(
            'https://raw.githubusercontent.com/dev-yakuza/users/master/api.json',
          );
          const data = await response.json();
          setUserList(data);
          setCachedData('UserList', data);
        } catch (error) {
          console.log(error);
        }
      };
    

}

const RoomContextProvider = ({children} : Props) => {
    const[room, setRoom] = useState<Array<IChatRoom>>([]);

    const initData = async () => {
        try{
            const list = await AsyncStorage.getItem();
            if(list != null){
                setRoom(JSON.parse(list));
            }
        }catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        initData();
    }, []);

    return(
        <RoomContext.Provider
            value={{
                addRoom,
            }}>
                {children}
            </RoomContext.Provider>
    );
};

export {RoomContextProvider, RoomContext};
