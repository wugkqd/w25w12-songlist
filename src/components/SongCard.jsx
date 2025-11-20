import { Link } from 'react-router-dom'

export default function SongCard({ song }) {
  return (
    <Link 
      to={`/song/${song.id}`} 
      className="cursor-pointer bg-white shadow-md rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
      <img 
        src={`https://picsum.photos/128/128?random=${song.id}`} 
        alt={`${song.title} 앨범 이미지`}
        className="w-32 h-32 mb-2" 
      />
      <div className="text-lg font-bold">{song.title}</div>
      <div className="text-gray-500">{song.singer}</div>
    </Link>
  )
}