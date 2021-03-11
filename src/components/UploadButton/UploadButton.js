import React from 'react';
import './UploadButton.scss';
import SVGIcon from '../SVGIcon/SVGIcon';
import Button from '../Button/Button';
import getPublicURL from '../../utils/getPublicURL';


export default function UploadButton({ buttonData, children }) {
  const { state, content, icon } = buttonData;
  return (
    <>
    <Button state={state}>
      {children}
      <SVGIcon src={`assets/icons${getPublicURL(icon)}`} height={12} />
    </Button>
    </>
  );
}