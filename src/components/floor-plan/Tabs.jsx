import React, { useState } from 'react';
import { TabContent } from './TabContent';

const Tab1Content = () => <div>Content for Tab 1</div>;
const Tab2Content = () => <div>Content for Tab 2</div>;
const Tab3Content = () => <div>Content for Tab 3</div>;

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedOption, setSelectedOption] = useState('Option 1A');

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    // Update pricing and EOI values based on the selected tab
    switch (tabNumber) {
      case 1:
        setSelectedOption('Option 1A');
        break;
      case 2:
        setSelectedOption('Option 2A');
        break;
      case 3:
        setSelectedOption('Option 3A');
        break;
      default:
        setSelectedOption('Option 1A');
    }
  };

  let content;

  switch (activeTab) {
    case 1:
      content = (
        <TabContent
          imageSrc="https://i.postimg.cc/pLsBMLCD/floor-plan.jpg"
          options={['700 sq. ft.', '900 sq. ft.', '1200 sq. ft.']}
          selectedOption={selectedOption}
          onSelectOption={(option) => setSelectedOption(option)}
          pricing={`$XXXX for ${selectedOption}`}
          eoiAmount={`$XXXX for ${selectedOption}`}
        />
      );
      break;
    case 2:
      content = (
        <TabContent
          imageSrc="https://i.postimg.cc/xyz123/floor-plan2.jpg"
          options={['Option 2A', 'Option 2B', 'Option 2C']}
          selectedOption={selectedOption}
          onSelectOption={(option) => setSelectedOption(option)}
          pricing={`$YYYY for ${selectedOption}`}
          eoiAmount={`$YYYY for ${selectedOption}`}
        />
      );
      break;
    case 3:
      content = (
        <TabContent
          imageSrc="https://i.postimg.cc/abc456/floor-plan3.jpg"
          options={['Option 3A', 'Option 3B', 'Option 3C']}
          selectedOption={selectedOption}
          onSelectOption={(option) => setSelectedOption(option)}
          pricing={`$ZZZZ for ${selectedOption}`}
          eoiAmount={`$ZZZZ for ${selectedOption}`}
        />
      );
      break;
    default:
      content = null;
  }

  return (
    <div>
      <div className="flex justify-around w-full bg-gray-800">
        <div
          className={`cursor-pointer w-full text-center py-5  ${
            activeTab === 1 ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => handleTabClick(1)}
        >
          3 BHK
        </div>
        <div
          className={`cursor-pointer w-full text-center py-5 ${
            activeTab === 2 ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700 border-l-2'
          }`}
          onClick={() => handleTabClick(2)}
        >
          2 BHK
        </div>
        <div
          className={`cursor-pointer w-full text-center py-5 ${
            activeTab === 3 ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700 border-l-2'
          }`}
          onClick={() => handleTabClick(3)}
        >
          1 BHK
        </div>
      </div>
      {content}
    </div>
  );
};
