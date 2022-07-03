import React from 'react';
import { Button } from 'antd';
import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'WELCOME TO MY TRAVEL DIARY',
    content: 'A TRAVEL DIARY about destinations, lifestyles, people and cultures.It takes you on a virtual journey through engaging content and inviting photographs.',
  },
  {
    key: '2',
    title: 'Travel make you happy',
    content: 'Travel makes us happy, because it offers us the opportunity to step outside our well-worn, self-constructed, plebian realities and provides a platform to explore and practice our ideal visions for ourselves.',
  },
  {
    key: '3',
    title: 'Travelling can broaden the mind',
    content: 'Travelling to different countries and places helps in exploring many things and gives us opportunities to meet people, understand the nature, and broaden our vision.',
  },
]

function openLink(url, newTab) {
  newTab
    ? window.open(url, "_blank", "noopener noreferrer")
    : (window.location.href = url);
}

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                <Button type="primary" size="large" onClick={() => openLink("http://localhost:3001/", true)}><i className="fas fa-newspaper"></i>News</Button>
                {/* <Button type="primary" size="large" onClick={() => openLink("http://localhost:3001/", true)}><i className="fas fa-blog"></i>Blogs</Button> */}
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;