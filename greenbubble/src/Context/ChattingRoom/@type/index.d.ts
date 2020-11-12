

interface IUserProfile{
    name: string;
    photo: string;
}

interface IChatRoom extends IUserProfile{
    id: number;
}