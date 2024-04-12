import useAppStore from '@/store/appStore.ts';
import { Button, Divider, List } from 'antd';

const Store = () => {
  const { debug, isOpenSidebar, setDebug, setIsOpenSidebar } = useAppStore();

  const handleChangeDebug = () => {
    setDebug(!debug);
  };

  const handleChangeSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const list = [
    { title: 'Debug', value: debug.toString(), action: handleChangeDebug },
    { title: 'Sidebar', value: isOpenSidebar.toString(), action: handleChangeSidebar },
  ];
  return (
    <>
      <h1 className="component__h1">Development</h1>
      <h2 className="component__h2"> Local Storage Test (AppStore) </h2>
      <Divider />

      <List
        className="fs-4"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="primary" size="large" onClick={item.action} className="mt-10">
                {`Change ${item.title}`}
              </Button>,
            ]}
          >
            <List.Item.Meta title={item.title} description={item.value} />
          </List.Item>
        )}
      />
    </>
  );
};

export default Store;
