
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
import { MyNFT } from "components/MyNFT";

export const BasicsView: FC = ({ }) => {

  return (
    <div className="footer-container w-full overflow-hidden -mt-4">

    <div className="w-full md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          My NFTs
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <MyNFT />
        </div>
       </div>
    </div>
    </div>
  );
};
