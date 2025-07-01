import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { postAPI } from '../../../lib/api/api'

const BannerSec = async () => {
  const res = await postAPI('homebannervideo', { banner_id: 1 })
  const videoId = res?.data?.video_url?.trim() || null;

  console.log("Fetched Vimeo Video ID:", videoId);
  const vimeoSrc = videoId
    ? `https://player.vimeo.com/video/1008391441?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0&api=1&player_id=vvvvimeoVideo-${videoId}`
    : null

  return (
    <section className="hero-section position-relative vh-100 overflow-hidden h-full flex items-center justify-center">
      <div className="video-background position-absolute w-100 h-100">
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          
          {vimeoSrc ? (
            <iframe
              src={vimeoSrc}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          ) : (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
              }}
            >
              Video is not available
            </div>
          )}
        </div>
      </div>
      <div className="hero-bottom-part-ab">
        <Link href="#" className="search-icon-banner">
          <Search />
        </Link>
      </div>
    </section>
  )
}

export default BannerSec
