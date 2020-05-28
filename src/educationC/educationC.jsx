import React from 'react';
import '../education.css'


export class Education extends React.Component{
    render(){
        return(
            <div>
                <div className = "blockchain-section" style = {{ backgroundColor: 'white', border: '8px solid  #E41235', width: '600px', height: '500px',position: 'relative', left: '50px', top: '15px', marginTop: "10px", marginBottom: "25px", fontFamily: 'Open Sans Condensed'}}>
                    <h1 style = {{color: "#434343", fontSize:"28px", textAlign: "center"}}> What is Blockchain? </h1>
                   
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '19px'}}> <strong>Blockchain is a distributed ledger that maintains a growing list of ordered records called blocks. A block is simply a record of a new transaction that is added to the blockchain if it has been verified.</strong></p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '19px'}}> Blockchain Technology has <strong>five</strong> key components:</p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '19px'}}> <strong>1.) Decentralized </strong>meaning there is no single authority in control of the blockchain. </p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '19px'}}> 2.)<strong> Public</strong> meaning anyone can access the blockchain.</p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '19px'}}> 3.) <strong>Secure</strong> meaning no single authority could exploit the blockchain.</p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '19px'}}> 4.) <strong>Consensus-model</strong> meaning transactions are legitimized by all participants of the blockchain.</p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '19px'}}> 5.) <strong>Instantaneous</strong> meaning all transactions on the blockchain are carried out rather quickly relative to traditional systems. </p>
                </div>


                <div className = "bitcoin-section" style = {{ backgroundColor: 'white', border: '8px solid  #E41235', width: '600px', height: '500px', position: 'absolute', right: '50px', top: '166px', marginTop: "10px", marginBottom: "25px", fontFamily: 'Open Sans Condensed'}}>
                    <h1 style = {{color: "#434343", fontSize:"28px", textAlign: "center"}}> What is Bitcoin? </h1>
                    
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '20px'}}>  <strong>Bitcoin is a peer-to-peer electronic cash payments system with five key components:</strong> </p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '20px'}}> 1.) <strong>Decentralized</strong> meaning there is no single authority in control of the bitcoin network. </p> 
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '20px'}}> 2.) <strong>Pseudonymous</strong> meaning all transactions are done without giving up true identity/confidential information. </p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '20px'}}> 3.) <strong>Immutable</strong> meaning no transactions can be reversed. </p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '20px'}}> 4.) <strong>Limited supply</strong> meaning there will only ever be 21 million bitcoin. </p>
                    <p style = {{color: "#434343", marginLeft: "20px", marginRight: "20px", lineHeight: "1.5", fontFamily: 'Open Sans Condensed', fontSize: '20px'}}> 5.) <strong>Public</strong> meaning every single transaction done on the bitcoin network is posted on a public ledger called the <strong>Blockchain</strong> which anyone can <a href="https://blockstream.info/" rel="noopener noreferrer" target = "_blank"> access</a>. </p>
                </div>


                <div id="more-information-resources-section" style = {{ backgroundColor: 'white', border: '8px solid #E41235', position: "relative", marginLeft: "50px", marginRight: "50px", marginBottom: "75px",top: "25px",fontFamily: 'Open Sans Condensed'}}>
                    <h1 style = {{color: "#434343", fontSize:"28px", textAlign: "center", fontFamily: 'Open Sans Condensed'}}> Additional Resources </h1>

                    <h2 style = {{color: "#434343", fontSize:"24px", textIndent: '20px', fontFamily: 'Open Sans Condensed'}}> Articles </h2>


                    <p><a href="https://blog.lopp.net/bitcoin-timestamp-security/" style = {{position: "relative", left: "100px", target:"_blank", fontFamily: 'Open Sans Condensed', fontSize: "28px"}}>Bitcoin Timestamp Security </a></p>
                    <p><a href="https://nakamoto.com/what-are-the-key-properties-of-bitcoin/" style = {{position: "relative", left: "100px", target: "_blank", fontFamily: 'Open Sans Condensed', fontSize: "28px"}}> What are the Key Properties of Bitcoin? </a></p>
                    <p><a href="https://blog.lopp.net/who-controls-bitcoin-core-/" style = {{position: "relative", left: "100px", target: "_blank", fontFamily: 'Open Sans Condensed', fontSize: "28px"}}> Who Controls Bitcoin Core? </a></p>


                    <h2 style = {{color: "#434343", fontSize:"24px", textIndent: '20px', fontFamily: 'Open Sans Condensed'}}> Videos </h2>
                    <iframe title = "btc video" style = {{position: "relative", left: "100px", marginBottom: "20px", border: "3px solid #E41235", width:"507", height:"285", src:"https://www.youtube.com/embed/SSo_EIwHSd4", frameborder:"0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, allowfullscreen"}}></iframe>
                    <iframe title = "blockchain video" style = {{position: "relative", left: "200px", marginBottom: "20px", border: "3px solid #E41235", width:"507", height:"285", src:"https://www.youtube.com/embed/L-Qhv8kLESY", frameborder:"0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, allowfullscreen"}}></iframe>
                </div>
            </div>


            
        )
    }
}



export class Home extends React.Component {
    render(){
        return(
            <div>
        
            </div>
        )
    }
}

export default Education