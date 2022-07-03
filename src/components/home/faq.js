import React from 'react';

import { Collapse } from 'antd';

const { Panel } = Collapse;


function AppFaq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Where do I go for other questions?" key="1">
            <p>For other questions or more information, please send an email to <a href="https://mail.google.com" target='_blank'><span style={{color:'orange'}}>trvldiaries@gmail.com</span></a>. We will come back to you as soon as possible!</p>
          </Panel>
          <Panel header="Travel Diaries doesn’t work the way it should on my iPad. What can I do?" key="2">
            <p>Travel Diaries should be working well on all tablets. However, we do notice that our application is slow on some very old iPads. This is difficult to avoid. Travel Diaries is a big application, so devices must be able to handle that. You can test this by opening other large applications on your iPad. If they work well and Travel Diaries does not, please contact us.</p>
          </Panel>
          <Panel header="What is the business model of Travel Diaries?" key="3">
            <p>We mainly earn from the printed diaries and branded content on our inspiration platform. We do not exclude any other business models in the future, but we will always be transparent about this and we will never sell any data of our customers to third parties without explicit permission.</p>
          </Panel>
          <Panel header="Can Travel Diaries be used offline?" key="4">
            <p>There is no offline application yet. You can use Travel Diaries online on all tablets, computers and smartphones. If you don’t have access to the Internet, we recommend that you write your texts in an offline word processing program like Word, Pages or Notes. When there is internet again, you can easily cut and paste your text. We'll look into expanding this with an offline version in the future. Keep informed of developments by subscribing to our newsletter!</p>
          </Panel>
          <Panel header="I can't choose the exact placement of the photo on my cover. Why not?" key="5">
            <p>Your diary will get thicker when you add more pages. That makes the spine of the cover larger as well. That is why the dimensions of the cover image cannot be completely determined in advance. It is important that the picture remains large and of high quality so that it will appear as sharp and beautiful as possible on the cover.</p>
          </Panel>
          <Panel header="I have a tip! To whom can I send it?" key="6">
            <p>Nice that you are thinking of us! Your feedback is more than welcome. Please send an email with your tips and suggestions to <a href="https://mail.google.com" target='_blank'><span style={{color:'orange'}}>trvldiaries@gmail.com</span></a> or contact us through the contact form on our website.</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default AppFaq;