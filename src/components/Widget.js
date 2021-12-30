import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
const Widget = () => {
  return (
    <div className='widget-right'>
      <div className='search'>
        <label htmlFor='imp'>
          <BiSearch className='search-icon' />
        </label>
        <input
          type='text'
          id='imp'
          className='searchbox'
          placeholder='Search Twitter'
        />
      </div>
      <div className='widget_container'>
        <h2>What's happening</h2>
        <div className='tweets'>
          <TwitterTweetEmbed tweetId='1461079207698698244' />
          <TwitterShareButton
            url={'https://www.tesla.com'}
            options={{ text: '#spaceX is awesome', via: 'elonmask' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Widget
