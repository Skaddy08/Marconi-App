import React from 'react'
import "../home.css"
import Mint from './Mint'

export default function Home() {
  return (
    <div>
        <section className=''>
          <div className="section1 px-4">
            {/* <div className="floatimg"> */}
                <img src="marconiGif.gif" alt="" className="homeimg my-4" />
                <br />
                <br />
              {/* </div> */}
              <div className="section1Text">
                <h2 className='homeHeading'>NFTs that rewards Holder</h2>
                <br />
                <h3>Mint Your Marconi </h3>
                
                </div>
            </div>
          </section>

          <section className="section2 my-4">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <p><strong> Marconi NFTs on TLOS</strong></p> 
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p> <strong>Marconi NFT</strong> is a unique collectables on the TELOS blockchain featuring unique mechanism for the NFT holders. <br />
                            Just mint your NFT on Telos blockchain and enjoy the passive income.
                        </p>
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       <p><strong> Grand Price to the luck holder </strong></p> 
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        One lucky Marconi NFT holder will 20% of total treasure balance at the last mint of the Marconi NFT. <br />
                        All winners are choose randomly and owner cannot be the winner as owner of the contract cannot mint the NFTs
                        <br />
                        So stand a chance to win big rewards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                      
                      <p><strong> Get awesome rewards by just holding the NFTs</strong></p> 
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        Every time the new NFT is minted 20% from the mint amount will be rewarded back to any random NFT holder <br />
                        So just hold your Marconi NFT and earn passive income.
                      </p>
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                      
                      <p className='accp'><strong>Tradable NFTs on TLOS </strong></p> 
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        The NFTs will be tradable on the TLOS blockchain so holders can trader their NFTs for the real TLOS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </section>
    </div>
  )
}
