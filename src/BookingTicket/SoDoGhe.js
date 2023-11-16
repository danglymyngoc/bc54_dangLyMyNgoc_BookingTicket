import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datGheAction, datLaiGheAction } from '../redux/actions'
import { DAT_GHE } from '../redux/types'

class SoDoGhe extends Component {

    renderGhe = () => {
        return (
            this.props.soDoGhe.map(dsghe => dsghe.danhSachGhe.map(item => {
                switch (item.daDat) {
                    case true: {
                        return <button className='gheDuocChon'>
                            {item.soGhe}
                        </button>

                    } break
                    case false: {
                        return <button onClick={() => { this.props.datGhe(item) }} className='ghe'>
                            {item.soGhe}
                        </button>
                    } break
                    default: return <button onClick={() => { this.props.datLaiGhe(item) }} className='gheDangChon'>
                        {item.soGhe}
                    </button>
                }
            }))
        )


    }
    render() {

        return (

            <div>
                {this.renderGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDuocChon: state.bookingTicketReducer.danhSachGheDuocChon,
        soDoGhe: state.bookingTicketReducer.soDoGhe
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        },
        datLaiGhe: (ghe) => {
            dispatch(datLaiGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoDoGhe)

