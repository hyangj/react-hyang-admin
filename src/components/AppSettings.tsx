import useAppStore from '@/store/appStore.ts';
import { Button } from 'antd';
import { useState } from 'react';
import { ChromePicker } from 'react-color';

export default function AppSettings() {
  const { color, setColor } = useAppStore();
  const [isOpenSetting, setIsopenSetting] = useState(false);

  const handleChangeColor = (value: string) => {
    setColor(value);
  };

  return (
    <div className={`setting ${isOpenSetting ? 'open' : ''}`}>
      <div className="setting__btn" onClick={() => setIsopenSetting(!isOpenSetting)}>
        <i className="icon icon_setting" />
      </div>
      <ul className="setting__list">
        <li className="setting__item">
          <span className="setting__item-title">Color</span>
          <span>{color}</span>
          <Button size="small" className="ml-3" onClick={() => setColor('#151515')}>
            Clear
          </Button>
          <ChromePicker
            className="colorPicker"
            color={color}
            onChange={(value) => handleChangeColor(value.hex)}
          />
        </li>
      </ul>
    </div>
  );
}
