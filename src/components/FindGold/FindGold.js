//This compnenet will show the diffents actions that can be preformed. 
import React from 'react';
import { connect } from 'react-redux';
import {farmGold, mineGold, casinoGold, houseGold} from '../../redux';
import './FindGold.css';

const FindGold = (props) => {



    return (
        <div className="componentBlock">
            <h5 className="compTitle">Do you fell lucky?</h5>

            <div className="gambleBox">
                <h1>Farm</h1>
                <p>Earns 2-5 Gold</p>
                <button onClick={props.farmGold}>Farm!</button>
            </div>

            <div className="gambleBox">
                <h1>Cave</h1>
                <p>Earns 5-10 Gold</p>
                <button onClick={props.mineGold}>Cave!</button>
            </div>

            <div className="gambleBox">
                <h1>Casino</h1>
                <p>Earn up to or Losse up to 100 Gold</p>
                <button onClick={props.casinoGold}>Casino!</button>
            </div>

            <div className="gambleBox">
                <h1>House</h1>
                <p>Earns 7-15 Gold</p>
                <button onClick={props.houseGold}>House!</button>
            </div>
        </div> // end gamble box
    )
}

// this passes the reducers(methods) in as props
const mapDispatchToProps = (dispatch) => ({
    farmGold: () => dispatch(farmGold()),
    mineGold: () => dispatch(mineGold()),
    casinoGold: () => dispatch(casinoGold()),
    houseGold: () => dispatch(houseGold())
})

export default connect(
    null,
    mapDispatchToProps
)(FindGold)