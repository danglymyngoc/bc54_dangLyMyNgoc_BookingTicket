import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions'

class ThongTinDatVe extends Component {
    render() {
        return (
            <tbody>
                {this.props.danhSachGheDuocChon.map((item) => {
                    return <tr>
                        <td>{item.soGhe}</td>
                        <td>{item.gia.toLocaleString()}</td>
                        <td><button onClick={() => { this.props.huyGhe(item) }} className='btn btn-danger'>x</button></td>
                    </tr>
                })}
            </tbody>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDuocChon: state.bookingTicketReducer.danhSachGheDuocChon
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (ghe) => {
            dispatch(huyGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatVe)
