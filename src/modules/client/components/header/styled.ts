import styled from 'styled-components';
import { Layout, Menu } from 'antd';

export const HeaderWrapper = styled(Layout.Header)<{ $bg: string }>`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 64px;
  line-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-image: url(${props => props.$bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  overflow: hidden;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const EmblemIcon = styled.div<{ $bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 24px;
  cursor: pointer;
  background-image: url(${props => props.$bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
`;

export const StyledMenu = styled(Menu)`
  flex: 1;
  min-width: 0;
  background: transparent;
  border-bottom: none;
  color: rgba(36, 33, 33, 0.85);
`;