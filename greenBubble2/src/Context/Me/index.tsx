//프로필 사진은 어떻게 가지고 올래??
import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext: IMyContext = {
    userInfo: undefined,
    login: (email: string, password: string) => {},
    getUserInfo: () => {},
    logout: () => {},
};

const MyContext = createContext(defaultContext); //사용자 로그인 정보

//상속 
interface Props {
    children: JSX.Element | Array<JSX.Element>; 
}

//이름, 이메일 확인하는 거 확인
const MyContextProvider = ({children}: Props) => {
    const [userInfo, setUserInfo] = useState<IMyInfo | undefined>(undefined);

    const login = (email: string, password: string): void => { //로그인 시 입력한 정보 가지고 오기
        AsyncStorage.setItem('token', 'blahblah').then(() => {
            setUserInfo({
                name: 'idd',
                email: 'idd',
            });
        });
    };

    const getUserInfo = (): void => { //저장된 정보가지고 오기
        AsyncStorage.getItem('token')
        .then(value => {
            if (value) {
              setUserInfo({
                name: 'idd', //가지고 와야
                email: 'idd',
              });
            }
          })
        .catch(() => {
            setUserInfo(undefined);
        });
    };

    const logout = (): void =>{ //로그아웃
        AsyncStorage.removeItem('token');
        setUserInfo(undefined);
    };

    useEffect(() =>{
        getUserInfo();
    }, []);


    return(
        <MyContext.Provider
            value={{
                userInfo,
                login,
                getUserInfo,
                logout,
        }}>
            {children}
        </MyContext.Provider>
    );
};

    export {MyContextProvider, MyContext};
