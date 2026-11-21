import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { y: 42, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
          once: true,
        },
      },
    )
  }, { scope: ref })

  return <div ref={ref} className={className}>{children}</div>
}
