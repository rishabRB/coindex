const KeyManager=require('../lib/keyManager')
const CryptoAPI=require('../lib/CryptoAPI')

const check={
    
    async price(cmd){
        try{

            const keyManager=new KeyManager()
            const key=keyManager.getKey();

            const crypto=new CryptoAPI(key)
    
            const res= await crypto.getPriceData(cmd.coin,cmd.curr)

            console.log(res);
        }catch(err){
           console.log(err.message.red)
        }

    }
}


module.exports=check