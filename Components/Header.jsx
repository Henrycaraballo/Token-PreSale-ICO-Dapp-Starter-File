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
    return (
      <header className="site-header header--transparent ico-header">
        <div className="header__main-wrap">
          <div className="container mxw_1640">
            <div className="header__main ul_li_betwen">
              <div className="header__left ul_li">
                <div className="header_logo">
                  <a href="/">
                  <img src="assets/img/logo/logo"></img>
                  </a>
                </div>
              </div>

              <div className="main-menu__wrap ul_li navbar navbar-expand-xl ">
                <nav className="main-menu collapse navbar-collaps">
                  <ul>
                    <li className="active has-mega-menu">
                      <a href="/">Inicio</a>
                    </li>
                    <li>
                      <a className="scrollspy-btn" href="#about">Nosotros</a>
                    </li>
                    <li>
                      <a className="scrollspy-btn" href="#roadmap">MapaRuta</a>
                    </li>
                    <li>
                      <a className="scrollspy-btn" href="#team">Equipo</a>
                    </li>
                    <li>
                      <a className="scrollspy-btn" href="#faq">Faq</a>
                    </li>                    
                    <li>
                      <a className="scrollspy-btn" href="#contact">Contacto</a>
                    </li>

                    <li>
                      <a className="scrollspy-btn"
                        style={{
                          cursor:"pointer",
                        }}
                        onClick={() => ownerModel? setOwnerModel(false) : setOwnerModel(true)
                        }
                      >
                        Herramientas
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              
              <div className="header__action ul_li">
                <div className="d-xl-none">
                  <a className="header__bar hamburger_menu">
                    <div className="header__bat-icon">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </a>
                </div>

                {account ? (
                  <div className="header__acount">
                    <a 
                      onClick={() => 
                        navigator.clipboard.writeText(details?.address)
                      }
                    >
                      {shortenAddress(details?.address)}: {
                      details?.maticBal.slice(0, 6)}
                      {currency}
                    </a> 
                  </div> 
                ) : (
                  <div className="header__account">
                    <a onClick={() => connectMetaMask()}>Conecta Billetera</a>
                  </div>
                )}
              </div>                            
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;
