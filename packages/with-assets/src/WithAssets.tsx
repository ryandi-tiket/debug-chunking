import React from 'react'

const imgUrl = new URL('sample.jpg', import.meta.url)
const vidUrl = new URL('loading-tman-white.mp4', import.meta.url)

export const WithImage: React.VFC = () => <img src={imgUrl.toString()} alt="" />

export const WithVideo: React.VFC = () => (
  <video src={vidUrl.toString()} autoPlay loop />
)
