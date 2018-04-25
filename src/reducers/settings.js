const settings = (state = [], action)=>{
    switch (action.type) {
        case 'SHOW_FEED':
            return [
                ...state,
                {
                    feedVisible: true
                }
            ];
        case 'HIDE_FEED':
            return [
                ...state,
                {
                    feedVisible: false
                }
            ];
        default:
            return state
    }
};

export default settings