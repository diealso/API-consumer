export interface interInitialState {
    message: string,
    data: any[],
    selectedData: any[]
}

const initialState : interInitialState = {
    message: 'Please enter a query',
    data: [],
    selectedData: [],
};

const queryReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'SEARCHING':
            return {
                ...state,
                message: "Searching for '" + action.query + "' ...",
            };
        case 'BLANK':
            return {
                ...state,
                message: 'Please enter a query in the searchbox above.',
                data: [],
            };
        case 'ERRORSEARCHING':
            return {
                ...state,
                message: 'Ooooops, something went wrong while searching.',
            };
        case 'SAVEDATA':
            return {
                ...state,
                message: "Searched for '" + action.query + "'",
                data: action.response,
            };
        case 'SELECTQUERY':
            const newSelected: Array<string> = [...state.selectedData];
            newSelected.unshift((action.query));
            // newSelected.push((action.query));

            return {
                ...state,
                selectedData: newSelected,
            };
        case 'REMOVEQUERY':
            const selected = [...state.selectedData];
            const filteredQueries = selected.filter((item) => item !== action.query);

            return {
                ...state,
                selectedData: filteredQueries,
            };
        default:
            return state;
    }
};

export default queryReducer;
