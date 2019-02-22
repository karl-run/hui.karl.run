import React, { useEffect, useMemo, useState } from 'react'
import { animated, useSpring } from 'react-spring'

import { buildGibber } from '../../utilities/random'
import AnimatedBorder from '../general/AnimatedBorder'

import css from './GibberScroll.module.scss'

const rows = 20

const GibberScroll = () => {
  const gibber = useMemo(() => buildGibber(rows), [])
  const [rowOffset, setRow] = useState(0)

  const next = () => {
    setRow((rowOffset + 1) % 20)
  }

  useEffect(() => {
    const timer: any = setInterval(() => {
      next()
    }, 69)

    return () => {
      window.clearInterval(timer)
    }
  })

  const lines = [...gibber.slice(rowOffset), ...gibber.slice(0, rowOffset)]
  return (
    <AnimatedBorder className={css.root}>
      <pre>{lines.join('\n')}</pre>
    </AnimatedBorder>
  )
}

export default GibberScroll
