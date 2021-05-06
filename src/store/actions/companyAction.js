const fetchCompany = () => async(dispatch,getState, {getFirestore}) => {
    const firestore = getFirestore();
    let action = await firestore.collection("companies").get().then((data) => {
        let companies = []
        data.forEach((doc)=>{
            companies.push({id: doc.id ,name: doc.data().name})
        })
        return ({
            type: 'company/fetch',
            payload: companies
        })
    }).catch((err) => {
        return {
            type: 'company/error',
            payload: err
        }
    })
    dispatch(action)
    return (action.payload)
}

export default fetchCompany