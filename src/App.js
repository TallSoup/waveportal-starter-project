import * as React from 'react';
// import { ethers } from 'ethers';
import './App.css';

export default function App() {
  const wave = () => {};

  return (
    <div className='mainContainer'>
      <div className='dataContainer'>
        <div className='header'>
          <span role='img' aria-label='wave emoji'>
            👋
          </span>{' '}
          Hello friend!
        </div>

        <div className='bio'>
          I'm Andrew and I'm learning about Smart Contracts with Solidity.
          Connect your Ethereum wallet and wave at me!
        </div>

        <button className='waveButton' onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
