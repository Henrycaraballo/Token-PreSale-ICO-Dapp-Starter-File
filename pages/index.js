import React, { useState, useEffect, useContext } from "react";

import {
  Footer, 
  Header,
  About, 
  Brand, 
  Contact, 
  Faq, 
  Features, 
  Hero, 
  Loader, 
  Progress, 
  SideBar, 
  Team, 
  Token, 
  TokenInfo, 
  Roadmap, 
  Popup, 
  TransferToken,
  Owner,
  TransferCurrency,
  Donate,
  UpdateAddress,
  UpdatePrice,
} from "../Components/index";
import { TOKEN_ICO_Context } from "../context/index";
import { shortenAddress } from "../Utils/index";
import { SELECT_EVENT } from "web3modal";

const index = () => {
  const {
    TOKEN_ICO,
    BUY_TOKEN,
    TRANSFER_ETHER,
    DONATE,
    UPDATE_TOKEN,
    UPDATE_TOKEN_PRICE,
    TOKEN_WITHDRAW,
    TRANSFER_TOKEN,
    CONNECT_WALLET,
    ERC20,
    CHECK_ACCOUNT_BALANCE,
    setAccount,
    setLoader,
    addtokenToMetaMask,
    TOKEN_ADDRESS,
    loader,
    account,
    currency,
  } = useContext (TOKEN_ICO_Context);

  const [ownerModel, setOwnerModel] = useState(false);
  const [buyModel, setBuyModel] = useState(false);
  const [transferModel, setTransferModel] = useState(false);
  const [transferCurrency, setTransferCurrency] = useState(false);
  const [openDonate, setOpenDonate] = useState(false);
  const [openUpdatePrice, setOpenUpdatePrice] = useState(false);
  const [openUpdateAddress, setOpenUpdateAddress] = useState(false);
  const [details, setDetails] = useState();

  useEffect(()=> {
    const fetchData = async () => {
      const items = await TOKEN_ICO();
      console.log(items);

      setDetails(items);
    };
    fetchData();
  }, [account]); 

  return (
    <>
      <div className="body_wrap">
        {ownerModel && (
          <Owner 
            setOwnerModel={setOwnerModel}
            currency={currency} 
            details={details}
            account={account}
            setTransferModel={setTransferModel}
            setTransferCurrency={setTransferCurrency}
            setOpenDonate={setOpenDonate}
            TOKEN_WITHDRAW={TOKEN_WITHDRAW}
            setOpenUpdatePrice={setOpenUpdatePrice}
            setOpenUpdateAddress={setOpenUpdateAddress}
          />
        )}

        {buyModel && (
          <Popup
            setBuyModel={setBuyModel}
            BUY_TOKEN={BUY_TOKEN}
            currency={currency}
            details={details}
            account={account}
            ERC20={ERC20}
            TOKEN_ADDRESS={TOKEN_ADDRESS}
            setLoader={setLoader}
          />
        )}

        {transferModel && (
          <TransferToken 
            setTransferModel={setTransferModel}
            TRANSFER_TOKEN={TRANSFER_TOKEN} 
            ERC20={ERC20} 
            setLoader={setLoader}
          />
        )}

        {
          transferCurrency && (
            <TransferCurrency
              setTransferCurrency={setTransferCurrency}
              TRANSFER_ETHER={TRANSFER_ETHER}
              details={details}
              currency={currency}
              CHECK_ACCOUNT_BALANCE={CHECK_ACCOUNT_BALANCE}
              setLoader={setLoader}
            />
          )}

          {openDonate && (
            <Donate
              details={details}
              currency={currency}
              setOpenDonate={setOpenDonate}
              DONATE={DONATE}
            />
          )}

          {openUpdatePrice &&(
            <UpdatePrice
              detail={detail}
              currency={currency}
              setOpenUpdatePrice={setOpenUpdatePrice}
              UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}
            />  
          )}

          {openUpdateAddress && (
            <UpdateAddress
              details={details}
              currency={currency}
              setOpenUpdateAddress={setOpenUpdateAddress}
              UPDATE_TOKEN={UPDATE_TOKEN}
              ERC20={ERC20}
              setLoader={setLoader}
            />
          )}
          {loader && <Loader />}

          <Header 
            account={account} 
            CONNECT_WALLET={CONNECT_WALLET} 
            setAccount={setAccount}
            setLoader={setLoader}
            setOwnerModel={setOwnerModel}
            shortenAddress={shortenAddress}
            details={details} 
            currency={currency}
            ownerModel={ownerModel}
          />
          <SideBar />
          <Hero 
            setBuyModel={setBuyModel}
            account={account}
            CONNECT_WALLET={CONNECT_WALLET}
            setAccount={setAccount}
            setLoader={setLoader}
            details={details}
            addtokenToMetaMask={addtokenToMetaMask}
          />
          <About />
          <Features />
          <Token />
          <TokenInfo details={details} />
          <Team />
          <Faq />
          <Contact />
          <Footer />
      </div>
    </>
  );
};

export default index;
