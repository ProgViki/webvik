import React from 'react'

const SimpleBanner = () => {
  return (
    <div className='bg-primary'>
      <div className='container mx-auto px-8 md:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 '>
        <div>
          <iframe src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
                className='aspect-video w-full h-96 md:h-96 rounded-2xl'
                // frameborder="0"
                title='Youtube video player'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                >
        </iframe>
        </div>
        <div>
          <h1 className='text-2xl font-bold text-center'>Market your next project with webvik</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, maiores. 
          Quis totam debitis deserunt distinctio beatae iure unde rem saepe.</p>
      </div>
      </div>
    </div>
  )
}

export default SimpleBanner
