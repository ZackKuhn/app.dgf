import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { MdOutlineEmojiEmotions } from 'react-icons/md';
import {RiEmotionHappyLine, RiEmotionNormalLine, RiEmotionUnhappyLine, RiEmotionSadLine } from 'react-icons/ri'
import { colors } from '../../styles/Colors';
import { Container, RankingModal } from './styles';

type RankingProp = {
  rate: number
}

const RankingStars: React.FC<RankingProp> = ({rate}) => {

  const [ranking, setRanking] = useState(0);
  const [iconColor, setIconColor] = useState('')
  const [openIconModal, setOpenIconModal] = useState(false)

  useEffect(()=>{
    setRanking(rate)
  }, [])

  const iconSize = 20

  const handleClick = ()=>{
    setOpenIconModal(!openIconModal)
  }

  return (
    <Container>
      <div className="RankingIcon" onClick={handleClick}>
        {
          ranking == 1 && <RiEmotionSadLine size={iconSize} color={colors.actionColor}/> ||
          ranking == 2 && <RiEmotionUnhappyLine size={iconSize} color={colors.actionColor}/> ||
          ranking == 3 && <RiEmotionNormalLine size={iconSize} color={colors.actionColor}/> ||
          ranking == 4 && <RiEmotionHappyLine size={iconSize} color={colors.actionColor}/> ||
          ranking == 5 && <MdOutlineEmojiEmotions size={iconSize} color={colors.actionColor}/>
        }
      </div>
      <AnimatePresence>
        {
          openIconModal &&
          <RankingModal
          key={1}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}>
            <MdOutlineEmojiEmotions size={iconSize} color={colors.lineDividerColor}/>
            <RiEmotionHappyLine size={iconSize} color={colors.lineDividerColor}/>
            <RiEmotionNormalLine size={iconSize} color={colors.lineDividerColor}/>
            <RiEmotionUnhappyLine size={iconSize} color={colors.lineDividerColor}/>
            <RiEmotionSadLine size={iconSize} color={colors.lineDividerColor}/>
          </RankingModal>
        }
        </AnimatePresence>
    </Container>
  );
}

export default RankingStars