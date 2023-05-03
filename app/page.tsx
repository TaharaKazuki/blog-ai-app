import Trending from "./shared/Trending"

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <div className="hidden md:block"></div>
        </div>
        <div className="basis-1/4"></div>
      </div>
    </main>
  )
}
