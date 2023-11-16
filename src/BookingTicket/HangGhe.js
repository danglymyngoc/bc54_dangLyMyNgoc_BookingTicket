import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {
    render() {

        return (
            <div>
                {this.props.hangGhe.danhSachGhe.map((item, index) => {
                    return <div className="text-warning" style={{ display: 'inline-flex', flexDirection: 'row', marginRight: 45 }}>
                        {item.soGhe}
                    </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hangGhe: state.bookingTicketReducer.thuTuGhe
    }
}

export default connect(mapStateToProps)(HangGhe)
