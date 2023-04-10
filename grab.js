import { web3 } from "./provider.js";

export async function grab(blockNumber){
    const codes = []
    const router = "0x5097CBB61D3C75907656DC4e3bbA892Ff136649a"//sushi RouteProcessor2 on poly
    var data = await web3.eth.getBlock(blockNumber)    
    // console.log(data.transactions)
    var promises = data.transactions.map(async (transactionHash) => {
        try{        
            let transaction = await web3.eth.getTransaction(transactionHash);
            if( transaction.to != null){            
                let str = transaction.to
                // console.log(str)
                if (str === router){        
                    // var receipt = await web3.eth.getTransactionReceipt(transactionHash);        
                    // addresses.push(receipt.contractAddress)    
                    codes.push({
                        address:transaction.from,
                        hash:transactionHash
                        // contractAddress:receipt.contractAddress,
                        // byteCode:transaction.input
                    })               
                } 
            }
        }catch(e){
            console.log(e.message)
            console.log('Error on block:'+blockNumber)
        }
    }) 

    await Promise.all(promises)   
    // console.log(codes)
    return codes
}
// grab(41362851)
