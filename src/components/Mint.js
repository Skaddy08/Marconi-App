import React,{useEffect, useState} from 'react'
import { ethers, utils } from 'ethers';
// import Abi from './Abi';
import "../mint.css"
import {Abi} from './Abi.js'
// import '../App.css'

// Contract Address:- 0x5e3d3E223B9406414dA0583eA9C85fE5caf4C7d0

// Rinkeby Marconi NFT
// Address - 0x9A72059c6f11521c7C3dB5Cd1BA357Df4648B10e

// Tlos Marconi NFT Final address
// Address 0xf6aB5ec244845B35AE66bA5c3B6a009Ed7A21c0B

export default function Mint() {
    
    const contractAddress = "0x3900bfcEFBCdBDf6228f26361BeBFa2446b46E32"


    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contractInst = new ethers.Contract(contractAddress , Abi, provider.getSigner())

    const [mintedNFT, setMintedNft]  = useState(0)

    useEffect(() => {
      
       mintedNft()

    })
    


    async function mintNFT(){
        // const txData = {
        //     value: ethers.utils.parseUnits('0.01', 'ether')
        // }
        const txData = {
            value: ethers.utils.parseUnits('3', 'ether'), gasLimit: 250000, gasPrice: ethers.utils.parseUnits('600', 'gwei') 
        }
        const getNft = await contractInst.mint(txData)
        mintedNft()
        // console.log("MInt btn")
    }   

    async function mintedNft(){
        let m = await contractInst.totalSupply()
        // console.log(m.toString())
        setMintedNft(m.toString())
    }

    // async function getMetadata(){
    //     let m = await contractInst.balanceOf("0x92382c1EC09a72cd4a6bA024C4553a16a2250C2F")
    //     console.log("Token Uri for 1 is ", m.toString())
    // }


    return (
        <div>

{/* //////////////////////// */}
        <div className="container my-5">
        <div className="row align-items-center">

        <div className="col">
            <img className="img-fluid new1 my-10" style={{width : "80%"}} src="3.png"  alt="marconi"/>
            <h3 className='my-2'>Get Your TLOS Marconi </h3>
        </div>

        <div className="col my-12" >
            <h1>Mint Your MARCONI</h1>
            <br />
            <button className="mintBtn my-2" onClick={mintNFT}>Mint</button>
            <br />
            <h4 className="mintNumber my-3">Total Mint {mintedNFT} / 50</h4>
            <p>One Marconi will cost 3 TLOS</p>
            {/* <button className="mintBtn my-2" onClick={getMetadata}>getMetadata</button> */}

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
   
    </div>
    </div> 
    </div>
  )
}
