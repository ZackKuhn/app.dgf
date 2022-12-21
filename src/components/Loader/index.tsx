import React from 'react'

//Loader imports
import Lottie from 'react-lottie-player';
import dgthus_loader from '../../assets/lottieAnimations/dgthus_loader.json';

export default function Loader() {
  return (
    <div className="loadingContainer">
      <Lottie
        loop
        animationData={dgthus_loader}
        play
        style={{ width: 100, height: 100 }}
      />
    </div>
  )
}

