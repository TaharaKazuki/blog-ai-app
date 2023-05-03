import React from "react"
import Link from "next/link"
import Image from "next/image"

type Props = {
  className?: string
}

const TrendingCard = ({ className }: Props) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      // href={`${process.env.NEXT_PUBLIC_URL}/post`}
      href="/"
    >
      <div className="z-0 relative w-full h-full bg-wh-500">image</div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-serif bg-accent-orange text-wh-900">
          category
        </h4>
        <div className="text-wh-100 mt-2">post title</div>
      </div>
    </Link>
  )
}

export default TrendingCard
