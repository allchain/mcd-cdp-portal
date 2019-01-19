import React from 'react';
import styled from 'styled-components';
import { Flex } from '@makerdao/ui-components';
import Jazzicon from '../Jazzicon';

import SidebarFeeds from './Feeds';
import SidebarSystem from './System';

// currency units are failing diff checker
// READ only mode button

// TODO: Use theme variables
const StyledSidebarDashboard = styled.div`
  section {
    padding: 0 20px;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: content-box;
  }
`;

const Section = styled.section`
  padding: 0 20px;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: content-box;
`;

const Header = styled(Section)`
  height: 50px;
  margin-top: 1px;
`;

const Network = styled(Section)`
  height: 30px;
  line-height: 30px;
  color: #48495f;
  font-size: 12px;
`;

const networkColors = {
  kovan: '#690496',
  mainnet: '#1abc9c'
};

const Dot = styled.span`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin: 0 1rem 0 0.2rem;
  background: ${props => networkColors[props.network] || '#000'};
`;

const StyledAddress = styled.span`
  line-height: 24px;
  font-size: 15px;
  color: #231536;
  margin: 0 14px;
`;

const ADDRESS = '0x999999...B1gDog';
function SidebarDashboard({ feeds, system, networkName, networkDisplayName }) {
  return (
    <StyledSidebarDashboard>
      <Header>
        <Flex height="50px" alignItems="center">
          <Jazzicon address={ADDRESS} />
          <StyledAddress>{ADDRESS}</StyledAddress>
        </Flex>
      </Header>
      <Network>
        <Dot network={networkName} />
        {networkDisplayName}
      </Network>
      <Section>
        <SidebarFeeds feeds={feeds} />
      </Section>
      <Section>
        <SidebarSystem system={system} />
      </Section>
    </StyledSidebarDashboard>
  );
}

export default SidebarDashboard;