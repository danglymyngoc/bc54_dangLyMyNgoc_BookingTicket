import { DAT_GHE, DAT_LAI_GHE, HUY_GHE } from "./types"
import danhSachGhe from '../BookingTicket/danhSachGhe.json'
const initialState = {
    danhSachGhe: danhSachGhe,
    thuTuGhe: danhSachGhe[0],
    soDoGhe: danhSachGhe.filter(item => item.hang != ''),
    danhSachGheDuocChon: []

}

const bookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let newDSGheDuocChon = [...state.danhSachGheDuocChon]
            newDSGheDuocChon.push(action.ghe)
            let newSoDoGhe = [...state.soDoGhe]
            let new1 = newSoDoGhe.map(dsghe => dsghe.danhSachGhe.map(item => item)).flat(Infinity)
            let index = new1.findIndex(value => value.soGhe == action.ghe.soGhe)
            new1[index].daDat = 0
            state.danhSachGheDuocChon = newDSGheDuocChon
            state.soDoGhe = newSoDoGhe
            return { ...state }
        }
        case HUY_GHE: {
            let newDSGheDuocChon = state.danhSachGheDuocChon.filter(item => item.soGhe != action.ghe.soGhe)
            let newSoDoGhe = [...state.soDoGhe]
            let new1 = newSoDoGhe.map(dsghe => dsghe.danhSachGhe.map(item => item)).flat(Infinity)
            let index = new1.findIndex(value => value.soGhe == action.ghe.soGhe)
            new1[index].daDat = false
            state.soDoGhe = newSoDoGhe
            state.danhSachGheDuocChon = newDSGheDuocChon
            return { ...state }
        }
        case DAT_LAI_GHE: {
            let newSoDoGhe = [...state.soDoGhe]
            let new1 = newSoDoGhe.map(dsghe => dsghe.danhSachGhe.map(item => item)).flat(Infinity)
            let index = new1.findIndex(value => value.soGhe == action.ghe.soGhe)
            let newDSGheDuocChon = state.danhSachGheDuocChon.filter(item => item.soGhe != action.ghe.soGhe)
            new1[index].daDat = false
            state.soDoGhe = newSoDoGhe
            state.danhSachGheDuocChon = newDSGheDuocChon
            return { ...state }
        }
        default:
            return { ...state }
    }

}

export default bookingTicketReducer