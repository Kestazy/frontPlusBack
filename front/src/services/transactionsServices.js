import axios from 'axios';

const getTransactions = async () => {
    try {
        const response = await axios.get('/api/transactions')
        if(response.data !== undefined){
            return response.data;
        }
    } catch (error) {
        console.log(error)
    }
}

const setTransaction = async (transaction)=>{
    try {
        const response = await axios.post('/api/transaction', transaction);
        return response;
    } catch (error) {
        console.log(error)
    }
}

const transactionsService = {
    getTransactions,
    setTransaction
}

export default transactionsService