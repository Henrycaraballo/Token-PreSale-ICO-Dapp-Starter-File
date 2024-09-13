import React, { useState, useEffect } from "react";

const Header = ({
  account,
  CONNECT_WALLET,
  setAccount,
  setLoader,
  setOwnerModel,
  shortenAddress,
  details,
  currency,
  ownerModel,
}) => {

  const [isMetaMaskInstalled, 
    setIsMetaMaskInstalled] = useState(false);

    useEffect(() => {
      if (typeof window.ethereum !== "undefined") {
        setIsMetaMaskInstalled(true);

        window.ethereum.on("accountsChangged", handleAccountsChanged);
      }

      return () => {
        if(typeof window.ethereum !== "undefined") {
          window.ethereum.removeListener(
            "accountsChanged". handleAccountsChanged
          );
        }
      };
    }, []);

    const handleAccountsChanged = (accounts) => {
      setAccount(accounts(0));
    };

    const connectMetaMask = async() => {
      if(typeof window.ethereum !== "undefined"){
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]);
        } catch (error) {
          console.log(error);
        } 
      } else {
        console.log("Metamask no está instalada");
      }
    };
    return {
      <header className="site-header header--transparent ico-header">
        <div className="header__main-wrap">
          <div className="container mxw_1640">
            <div className="header__main ul_li_betwen">
              <div className="header__left ul_li">
                <div className="header_logo">
                  <a href="/">
                  <img src="assets/"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>;
    };
};

export default Header;
