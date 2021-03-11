import React from 'react';
import './UploadButton.scss';
import SVGIcon from 'components/SVGIcon/SVGIcon';
import Button from 'components/Button/Button';
import getPublicURL from 'utils/getPublicURL';


export default function UploadButton({ buttonData, children }) {
  const { state, icon } = buttonData;
  return (
    <>
    <Button state={state}>
      {children}
      <SVGIcon src={`assets/icons${getPublicURL(icon)}`} height={12} />
    </Button>
    </>
  );
}