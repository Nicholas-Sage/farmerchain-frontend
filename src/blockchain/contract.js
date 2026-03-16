let web3;
let contract;
let account;

const contractAddress = "PASTE_CONTRACT_ADDRESS";
const abi = [PASTE_CONTRACT_ABI];

async function connectWallet() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await web3.eth.getAccounts();
        account = accounts[0];

        contract = new web3.eth.Contract(abi, contractAddress);

        console.log("Connected:", account);
    }
}