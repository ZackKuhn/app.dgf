import React from 'react'

//Loader imports
import Lottie from 'react-lottie-player';
import dgthus_successfull from '../../assets/lottieAnimations/dgthus_successfull.json';
import serverError from '../../assets/lottieAnimations/serverError.json';
import coneServerError from '../../assets/lottieAnimations/coneServerError.json';

export function SuccessfulAnimation() {
  return (
    <div className="loadingContainer">
      <Lottie
        loop={false}
        animationData={dgthus_successfull}
        play
        style={{ width: 160, height: 160 }}
      />
    </div>
  )
}

export function ServerErrorAnimation() {
  return (
    <div className="loadingContainer">
      <Lottie
        loop={false}
        animationData={serverError}
        play
        style={{ width: 88, height: 88 }}
      />
    </div>
  )
}

export function ConeServerErrorAnimation() {
  return (
    <div className="loadingContainer">
      <Lottie
        loop={false}
        animationData={coneServerError}
        play
        style={{ width: 200, height: 200 }}
      />
    </div>
  )
}

