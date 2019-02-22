import React, { memo } from 'react'
import { animated, useSpring } from 'react-spring'

import css from './AnimatedBorder.module.scss'

type AnimatedBorderProps = {
  // delay?: number,
  children: React.ReactChild
  className?: string
}

const AnimatedBorder = memo(({ children, className, ...rest }: AnimatedBorderProps) => {
  const props = useSpring({
    from: { strokeDasharray: 10, strokeDashoffset: 0 },
    to: async (next: any) => {
      await next({ strokeDasharray: 100 })
      await next({ strokeDashoffset: 100, strokeDasharray: 3 })
      await next({ strokeDashoffset: 0, strokeDasharray: 0, immediate: true })
    },
    delay: 500 * Math.random(),
  })

  return (
    <div className={`${css.animatedBorderRoot} ${className}`} {...rest}>
      {children}
      <svg className={css.svg}>
        <animated.rect
          x={0}
          y={0}
          strokeWidth={4}
          width="100%"
          height="100%"
          stroke="green"
          fill="none"
          // style={props}
        />
      </svg>
    </div>
  )
})

export default AnimatedBorder
