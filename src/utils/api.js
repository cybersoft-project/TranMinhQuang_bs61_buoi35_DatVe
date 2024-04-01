import axios from "axios";



export const getArrSeat = async ()=>{
    try {
        const response = await axios.get('../data/danhSachGhe.json')
        return response.data
    } catch (error) {
        throw error
    }
    
}