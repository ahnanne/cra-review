import './App.scss';
import UploadButton from '../components/UploadButton/UploadButton';
import buttonDatas from '../data/button.json';

function App() {
  const buttons = buttonDatas.data;
  console.log(buttons[0]["content"]);
  return (
    <>
      {buttons.map((button) => (
        <UploadButton key={button.id} buttonData={button}>{button.content}</UploadButton>
      ))}
    </>
  )
}

export default App
