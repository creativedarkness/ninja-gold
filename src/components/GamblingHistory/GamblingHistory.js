// This compnent will show the list of actions perfromed by the FindGold compnent
import React from 'react';
import {connect} from 'react-redux';

const GamblingHistory = (props) => {
    return (
        <div className="componentBlock">
            <h5 className="compTitle">Your Gambling Problem</h5>
            <ul>
                {
                    props.jackpots.map((record, idx) => {
                        return (
                            <li className="listItem" key={idx}>
                            {record}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    jackpots: state.jackpots,
})

export default connect(
    mapStateToProps, 
    null
) (GamblingHistory)