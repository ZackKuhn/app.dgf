import { motion } from "framer-motion";
import styled from "styled-components";

import {colors} from '../../styles/Colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px; 
  cursor: pointer;
  .RankingIcon{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 8px 0;
    width: 40px;
    height: 40px; 
    :hover{
      background-color: ${colors.firstContainerColor};
    }
  }
 
`

  export const RankingModal = styled(motion.div)`
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
    width: 40px;
  align-items: center;
  position: absolute;
  height: fit-content;
  margin-bottom: -174px;
  background-color: ${colors.secondContainerColor};
  border-radius: 8px;
`