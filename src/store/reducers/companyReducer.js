const initState = []
  
const getCompanyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'company/fetch':
            return action.payload;
        case 'company/error':
            console.log('department err');
            console.log(action.payload)
            return state
        default:
            return state;
    }
};

export default getCompanyReducer;