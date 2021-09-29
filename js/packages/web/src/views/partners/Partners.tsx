import * as anchor from '@project-serum/anchor';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import React from 'react';
import { Layout } from 'antd';
import { Row, Col, Typography, Card, Image, Button } from 'antd';
import styled from 'styled-components';
import { MintButtonComponent } from './MintButtonComponent';

export const PartnersView = props => {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  const treasury = new anchor.web3.PublicKey(
    process.env.REACT_APP_TREASURY_ADDRESS!,
  );

  const config = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_CONFIG!,
  );

  const candyMachineId = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_ID!,
  );

  const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

  const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
  const connection = new anchor.web3.Connection(rpcHost);

  const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

  const txTimeout = 30000; // milliseconds (confirm this works for your project)

  // console.log('treasury', treasury);
  // console.log('config', config);
  // console.log('candyMachineId', candyMachineId);
  // console.log('network', network);
  // console.log('rpcHost', rpcHost);
  // console.log('connection', connection);
  // console.log('startDateSeed', startDateSeed);

  const mintBtnComponentProps = {
    candyMachineId,
    config,
    connection,
    startDate: startDateSeed,
    treasury,
    txTimeout,
  };

  return (
    <Layout>
      <Content>
        <StyledCard1>
          <Row
            style={{
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '5%',
              marginBottom: '2%',
            }}
          >
            <Col span={12}>
              <Image
                src="/img/SolSleepyZZZ.png"
                preview={false}
                height={300}
                width={550}
              ></Image>
            </Col>
            <Col span={12}>
              <Title style={{ color: 'black' }}>
                Solaknights x SolSleepyZZZ
              </Title>
              Our partnership with SolSleepyZZZ is built off our love for games
              and NFTs! With this partnership you will be able to grab a
              randomized Solaknight AND a Special Shield with the SolSleepyZZZ
              Logo on it. These will be one of a kind and never available again,
              minting will begin soon and will be announced on both Solaknights
              and SolSleepyZZZ's discord! Please note, they have a VIP pass
              going on right now where VIP memebers can get 50% off select NFTs
              such as Solaknights for a limited time. VIP is required to get the
              'VIP Early Adopter' mints of Solaknights you see on the top left
              of the image.
            </Col>
          </Row>
          <StyledButton1>Coming Soon</StyledButton1>
        </StyledCard1>
        <StyledCard2>
          <Row
            style={{
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '5%',
              marginBottom: '2%',
            }}
          >
            <Col span={12}>
              <Title style={{ color: 'black' }}>Solaknights x Dippers</Title>
              We are proud to announce our very first partnership with our good
              friend Dippers! Dippers is all about Unreal Engine Development! We
              are proud to partner with Dippers and they are minting 2 versions
              of Chris P. Bacon, a protagonist in their upcoming game! On the
              left we have the adult version, where on the right we have the
              childhood version of this beautiful Pig. Please note this NFT is
              obtainable as soon as metaplex implements a 'Buy Now' function
              instead of bidding!
            </Col>
            <Col span={1}></Col>
            <Col span={11} style={{ display: 'flex' }}>
              <Image
                src="/img/ChrisPBaconAdult.png"
                preview={false}
                // height={300}
                // width={275}
                className="responsive-image"
              ></Image>
              <Image
                src="/img/ChrisPBaconBaby.png"
                preview={false}
                // height={300}
                // width={275}
                className="responsive-image"
              ></Image>
            </Col>
          </Row>
          <MintButtonComponent {...mintBtnComponentProps} />
          <StyledButton2>Coming Soon</StyledButton2>
        </StyledCard2>
      </Content>
    </Layout>
  );
};

const StyledCard1 = styled(Card)`
  & {
    background: linear-gradient(90deg, #aaf3f2 30%, #ead8ee 60%);
    margin: 3%;
    color: black;
    font-size: 18px;
    border-radius: 25px;
  }
`;
// #cc89c7
const StyledCard2 = styled(Card)`
  & {
    background: #cc89c7;
    margin: 3%;
    color: black;
    font-size: 18px;
    border-radius: 25px;
  }
`;

const StyledButton1 = styled(Button)`
  & {
    width: 100%;
    color: #1d1c1c;
    margin-bottom: 20px;
    padding: 20px 10px;
    border-radius: 8px;
    height: 58px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    /* color: #1aabcf; */
    align-items: center;
    /* text-align: right; */
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1aabcf;
    border: 2px solid black;
  }
`;

const StyledButton2 = styled(Button)`
  & {
    width: 50%;
    margin-bottom: 20px;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 20px 10px;
    background: #1d1c1c;
    border-radius: 8px;
    height: 58px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    text-align: right;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #cc89c7;
    margin-left: 25%;

    :hover {
      color: #fff;
      background: #1d1c1c;
      border-color: #cc89c7;
    }
  }
`;
