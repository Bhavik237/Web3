import { useEffect, useState } from 'react'
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import './App.css'

function App() {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  const walletAddress = "YourWalletPublicKeyHere"; // Replace with your wallet public key

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const connection = new Connection(clusterApiUrl('mainnet-beta'));
        const publicKey = new PublicKey(walletAddress);
        const walletBalance = await connection.getBalance(publicKey);
        setBalance(walletBalance / LAMPORTS_PER_SOL); // Convert from lamports to SOL
        setLoading(false);
      } catch (err) {
        console.error("Failed to retrieve wallet balance:", err);
        setLoading(false);
      }
    };

    fetchBalance();
  }, [walletAddress]);

  return (
    <>
      <div>
      <h2>Solana Wallet Balance</h2>
      {loading ? (
        <p>Loading...</p>
      ) : balance !== null ? (
        <p>Wallet Balance: {balance} SOL</p>
      ) : (
        <p>Failed to retrieve balance.</p>
      )}
      </div>

    </>
  )
}

export default App
