import axiosinstance from "../axiosinstance";

export default async function getUserInfo(){
    try {
        const response = await axiosinstance.get(
            `/users`,
        )
        return response.data;
    } catch{
        console.log('오류 발생')
    }
}