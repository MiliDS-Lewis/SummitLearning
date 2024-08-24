import { GalleryHero } from '@/components/GalleryHero'
import { Gallery } from '@/components/Gallery'
import { getAllItems, getGalleryTags } from '@/lib/getItems'

import 'lightgallery/css/lightgallery.css'

export const metadata = {
  title: 'Gallery - Summit Learning',
  description:
    "Step inside Summit Learning Preschool & Elementary's vibrant learning environment with our photo gallery.",
}

export default function GalleryPage() {
  const gallery = getAllItems('gallery')
  const tags = getGalleryTags()

  return (
    <>
      <GalleryHero />
      <Gallery gallery={gallery} tags={tags} />
    </>
  )
}
