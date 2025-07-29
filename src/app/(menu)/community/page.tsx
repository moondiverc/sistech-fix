export default function Community() {
  return (
    <div>
        <div className="bg-white/10 border border-white rounded-2xl max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center text-black">COMMUNITY FORUM</h1>
            <div>
                <div className="flex flex-col gap-4 items-start">
                    <button className="bg-white/50 text-black py-3 px-6 rounded w-48 h-12 text-left">Popular</button>
                    <button className="bg-white/50 text-black py-3 px-6 rounded w-48 h-12 text-left">Explore All Groups</button>
                    <button className="bg-white/50 text-black py-3 px-6 rounded w-48 h-12 text-left">My Group</button>
                </div>
            </div>
        </div>
    </div>
  )
}
