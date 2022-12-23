import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { MdOutlineEmojiEmotions } from 'react-icons/md';
import {RiEmotionHappyLine, RiEmotionNormalLine, RiEmotionUnhappyLine, RiEmotionSadLine } from 'react-icons/ri'
import { colors } from '../../styles/Colors';
import { Container, RankingModal } from './styles';

import api from '../../utils/api'

type RankingProp = {
  rate: number
  rateowner: string
}

const RankingStars: React.FC<RankingProp> = ({rate, rateowner}) => {

  const [ranking, setRanking] = useState(1);
  const [openIconModal, setOpenIconModal] = useState(false)

  useEffect(()=>{
    setRanking(rate)
  }, [])

  const handleChangeRating = ()=>{
    api.post('/customers/uprating', {'id': rateowner, 'rating': ranking})
  }
  

  const iconSize = 22 

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
          onMouseLeave={()=> {handleChangeRating(); setOpenIconModal(false)}}
          key={1}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}>
            <MdOutlineEmojiEmotions onClick={() => {setRanking(5)}} size={iconSize} color={colors.lineDividerColor}/>
            <RiEmotionHappyLine onClick={() => {setRanking(4)}} size={iconSize} color={colors.lineDividerColor}/>
            <RiEmotionNormalLine onClick={() => {setRanking(3)}} size={iconSize} color={colors.lineDividerColor}/>
            <RiEmotionUnhappyLine onClick={() => {setRanking(2)}} size={iconSize} color={colors.lineDividerColor}/>
            <RiEmotionSadLine onClick={() => {setRanking(1)}} size={iconSize} color={colors.lineDividerColor}/>
          </RankingModal>
        }
        </AnimatePresence>
    </Container>
  );
}

export default RankingStars