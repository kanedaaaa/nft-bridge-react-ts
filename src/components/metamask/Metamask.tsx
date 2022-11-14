import "./Metamask.css";
import Button from "../button/Button";
import { useState } from "react";

declare const window: any;

const getAccounts = async (): Promise<string> => {
  let accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return accounts[0];
};

const Metamask = () => {
  const [account, setAccount] = useState("");

  const connect = () => {
    if (typeof window !== "undefined") {
      getAccounts().then((res: string) => {
        setAccount(res);
      });
    }
  };

  if (account === "") {
    return (
     <Button text="Connect" func={connect} />
    );
  } else {
    return (
        <div className="account">
            <p>{account}</p>
        </div>
    )
  }
};

export default Metamask;
