//redux file to hold the start and all the actions with corresponding reducers
import { createStore } from 'redux';

// export const countGold = () => ({
//     type: 'COUNT_GOLD'
// });

export const farmGold = () => ({
    type: 'FARM_GOLD'
})

export const mineGold = () => ({
    type: 'MINE_GOLD'
})
export const casinoGold = () => ({
    type: 'CASINO_GOLD'
})

export const houseGold = () => ({
    type: 'HOUSE_GOLD'
})

export const reducers = (state = initialState, actions) => {
    switch (actions.type) {
        case 'COUNT_GOLD':
            return state;

        case 'FARM_GOLD':
            let farmMin = 2;
            let farmMax = 4;
            let farmGold = state.gold;
            let farmed = Math.floor(Math.random() * (farmMax - farmMin)) + farmMin;
            farmGold += farmed;
            return Object.assign(
                {},
                state,
                {
                    jackpots: [
                        ...state.jackpots,
                        `You've farmed ${farmed} gold at the Farm`
                    ],
                    gold: farmGold,
                }
            )
        case 'MINE_GOLD':
            let mineMin = 2;
            let mineMax = 4;
            let mineGold = state.gold;
            let mined = Math.floor(Math.random() * (mineMax - mineMin)) + mineMin;
            mineGold += mined;
            return Object.assign(
                {},
                state,
                {
                    jackpots: [
                        ...state.jackpots,
                        `You've found ${mined} gold at the Cave`
                    ],
                    gold: mineGold,
                }
            )
        case 'CASINO_GOLD':
            let casinoMin = -100;
            let casinoMax = 100;
            let casinoGold = state.gold;
            let gambled = Math.floor(Math.random() * (casinoMax - casinoMin)) + casinoMin;
            casinoGold += gambled;

            if(gambled === 0) {
                return Object.assign(
                    {},
                    state,
                    {
                        jackpots: [
                            ...state.jackpots,
                            `You busted, try agian.`
                        ],
                    }
                )
            } else if (gambled < 0){
                return Object.assign(
                    {},
                    state,
                    {
                        jackpots: [
                            ...state.jackpots,
                            `You've lost ${gambled} gold at the Casino`
                        ],
                        gold: casinoGold,
                    }
                )
            } else {
                return Object.assign(
                    {},
                    state,
                    {
                        jackpots: [
                            ...state.jackpots,
                            `You've Earned ${gambled} gold at the Casino`
                        ],
                        gold: casinoGold,
                    }
                )
            }
        case 'HOUSE_GOLD':
            let houseMin = 7;
            let houseMax = 15;
            let houseGold = state.gold;
            let houseOdds = Math.floor(Math.random() * (houseMax - houseMin)) + houseMin;
            houseGold += houseOdds;
            return Object.assign(
                {},
                state,
                {
                    jackpots: [
                        ...state.jackpots,
                        `You've Earned ${houseOdds} gold from the House`
                    ],
                    gold: houseGold,
                }
            )

        default:
            return state;
    }
}

//set the Initial State
const initialState = {
    jackpots: [],
    gold: 0,
};

export function configureStore(initialState = initialState) {
    { }
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();