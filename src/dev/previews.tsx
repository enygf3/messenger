import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import HomePage from '../pages/home/HomePage';
import ChatPage from '../pages/chat/ChatPage';

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}>
    <ComponentPreview path='/HomePage'>
      <HomePage />
    </ComponentPreview>
    <ComponentPreview path='/ChatPage'>
      <ChatPage />
    </ComponentPreview>
  </Previews>;
};

export default ComponentPreviews;
