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

        window.ethereum.on("accountChangged", handleAccountChanged);
      }

      return () => {
        if(typeof window.ethereum !== "undefined") {
          window.ethereum.removeListener(
            "accountChanged". handleAccountChanged
          );
        }
      };
    }, []);

    const handleAccountChanged = (account) => {
      setAccount(account(0));
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
    return <div>Header</div>;
};

export default Header;
