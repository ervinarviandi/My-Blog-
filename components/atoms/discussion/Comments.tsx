"use client"

import React from 'react'
import Giscus from '@giscus/react';
const Comments = () => {
  return (
    <>
  <Giscus
   id="comments"
   repo="ervinarviandi/My-Blog-"
   repoId="R_kgDOLGUTNQ"
   category="Q&A"
   categoryId="DIC_kwDOLGUTNc4CdjX4"
   mapping="pathname"
   term="Welcome to @giscus/react component!"
   reactionsEnabled="1"
   emitMetadata="0"
   inputPosition="bottom"
   theme="dark_protanopia"
   lang="id"
   loading="lazy"
  />
    </>
  )
}

export default Comments