import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Row, Col } from 'antd';
const items = [
  {
    key: '1',
    icon: <FaWhatsapp className="fas fa-desktop"/>,
    title: 'Whatsapp',
    content: 'We provide, and always strive to improve, ways for you to communicate with other WhatsApp users including through messages, voice calls, sending images and video.',
  },
  {
    key: '2',
    icon: <FaFacebook className="fas fa-desktop"/>,
    title: 'Facebook',
    content: '.Facebook Services is a tool that lets you manage different Facebook services automatically using your Android device.',
  },
  {
    key: '3',
    icon: <FaInstagram className="fas fa-database"/>,
    title: 'Instagram',
    content: 'You can contact Instagram support online via Instagram online Help Center, or by reporting a post directly.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Me</h2>
          <p>Thank you for visiting this page and showing interest in collaborating with My Travel Diary.</p>
        </div>
        <div className="contentHolder">
          <p>I am a curious man who loves to wander around to create memories and learn new things. More than destinations; I love meeting people and indulge in heartfelt conversations. I find joy in all the small things in life. Sometimes an exchange of smile with a stranger can uplift my mood. Emotions run high in my life. So, I do tend to get very emotional (a bit too much) about the places I like and people I love. A hopeless romantic by nature, this curious man doesn’t endorse any rude behaviour from anyone. And, Hey…I prefer the countryside anytime over cities, anywhere in the world.
            Want to know more about me? <span style={{ color: 'Blue' }}>Here you go…</span></p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;