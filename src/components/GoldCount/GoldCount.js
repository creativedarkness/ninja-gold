// This componet will keep count of the gold earned from the FindGold component
import React from 'react';
import {connect} from 'react-redux';
import './GoldCount.css';

const GoldCount = (props) => {

    return (
        <div className='componentBlockCount'>
            <h5 className="compTitle">Pocketbook</h5>
            <h1>Gold Count {props.gold}</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    gold: state.gold
})

export default connect(
    mapStateToProps, 
    null
) (GoldCount)