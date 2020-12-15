export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 
     'BQCohZbtQDJYo4Helt4yThjBP-IhbbAF-FfTuLUiY1Sm5AEBbILPBM5LHlSMfs_AT-q6L7LIGAP7U0rvmgMpB68QLrS7bdlRpf8CiaP1F1Qp5jauDXWLB2rNXL8z4C7_COz8IS-ZOEZHSFTL7ikoRuCooeX9sNQa'
};

const reducer = (state, action) => {
    console.log(action);

// Action -> type, [payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                token: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;