import React, { useEffect, useMemo, useState } from 'react'
import { animated, useSpring } from 'react-spring'

import { buildGibber, modSlice } from '../../utilities/random'
import AnimatedBorder from '../general/AnimatedBorder'

import css from './GibberScroll.module.scss'

const rows = 20

const GibberScroll = () => {
  const gibber = useMemo(() => buildGibber(rows), [])
  const [rowOffset, setRow] = useState(0)

  const next = () => {
    setRow(rowOffset + 1)
  }

  useEffect(() => {
    const timer: any = setInterval(() => {
      next()
    }, 69)

    return () => {
      window.clearInterval(timer)
    }
  })

  const lines = modSlice(gibber, rowOffset)
  return (
    <AnimatedBorder className={css.root}>
      <pre>{lines.join('\n')}</pre>
    </AnimatedBorder>
  )
}

export default GibberScroll
