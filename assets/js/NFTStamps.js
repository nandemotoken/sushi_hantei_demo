//左から0,1,2,3,4,5。
nftaddressArray = [ 
    //sushi 会員権
    "0x01a5f896b8a24ad35e853bce648249125f402a10" 
    //テスト用
    //"0x5c12d95274ce2b4cccada6df9fa2e12c44237ce6"

]

const howtogetlist = [
    //Ticket 0
    "限られた人だけが保有できる寿司NFTです" 
]

//画像左から0,1,2,3,4,5。
async function checksushi( _num ){
    const web3rpc = new ethers.providers.JsonRpcProvider("https://rpc-mainnet.maticvigil.com/");
    const mycontract = await new ethers.Contract( nftaddressArray[_num] , abi , web3rpc );
    //mycontract = await new web3rpc.eth.Contract(abi, nftaddressArray[_num]);
    console.log(useraddress);
    let fromblockchain0 = await mycontract.balanceOf(useraddress);
    
 //   console.log("bug check")
    if (fromblockchain0==0){
        //    console.log("bug check2")
        window.alert("寿司会員権を持っていません");
        return;
        //        throw new Error('I Have No Token.'+ _num );
    } else {
        window.alert("寿司会員権を持っています");
    }
    
    
}



async function howtoget( _num ){
    window.alert(howtogetlist[_num]);
}