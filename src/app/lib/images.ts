import Ibanez from '../../public/ibanez.png'
import Fender from '../../public/fender.png'
import type { StaticImageData } from 'next/image'

export const imagesArray: { id: string; src: StaticImageData; alt: string }[] = [
  { id: 'ibanez', src: Ibanez, alt: 'Ibanez Guitar' },
  { id: 'fender', src: Fender, alt: 'Fender Guitar' },
]
