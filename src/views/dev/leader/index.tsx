import { Button, Divider, Input, InputNumber, Modal } from 'antd';

import { apiLeader } from '@/services/leader';
import { AngryType } from '@/types';
import moment from 'moment';
import { useEffect, useState } from 'react';
import GuageChart from './components/GuageChart';
import LineChart from './components/LineChart';

const Leader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [writer, setWriter] = useState('');
  const [guage, setGuage] = useState(0);

  const [angryList, setAngryList] = useState<AngryType[]>([]);
  const [chartData, setChartData] = useState<{
    xAxis: Array<string>;
    data: Array<number>;
  }>({ xAxis: [], data: [] });

  const { error } = Modal;

  const onCreateGuage = async () => {
    if (!writer) {
      return error({
        title: 'Error',
        content: '작성자 성함을 입력해주세요.',
        okText: '확인',
      });
    }

    if (!guage) {
      return error({
        title: 'Error',
        content: '분노 게이지 값을 입력해주세요.',
        okText: '확인',
      });
    }

    try {
      await apiLeader.postAngry({ writer, guage: guage });
    } catch (e) {
      console.log(e);
    } finally {
      setIsOpen(false);
      handleLoadAngryList();
    }
  };

  const onClickCreateBtn = () => {
    const last = new Date(angryList.at(-1)?.create_date || '').getTime();
    const current = new Date().getTime();

    // 3분
    if (last + 1000 * 60 * 3 <= current) {
      setIsOpen(true);
    } else {
      error({ title: 'Error', content: '3분이 지나지 않았습니다 !', okText: '확인' });
    }
  };

  const handleLoadAngryList = async () => {
    const { data } = await apiLeader.getAngry();
    console.log('result: ', data);
    setAngryList(data);
    convertChartData(data);
  };

  const convertChartData = (list: AngryType[]) => {
    const result = {
      xAxis: list.map((item) => moment(item.create_date).format('MM/DD HH:mm')),
      data: list.map((item) => item.guage),
    };

    setChartData(result);
  };

  useEffect(() => {
    handleLoadAngryList();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-5">
        <div className="w-full pb-10">
          <h2 className="component__h2 font-bold">팀장님 분노 게이지</h2>
          <ul className="component__inform">
            <li>가장 최근에 등록된 분노 정도를 표현한 차트입니다.</li>
            <li>분노 게이지 등록 후 수정은 불가합니다.</li>
            <li>3분 간격으로 등록 할 수 있습니다.</li>
            <li className="pt-2 font-bold">{`마지막 등록 시간 : ${moment(angryList.at(-1)?.create_date).format('YYYY년 MM월 DD일 HH:mm:ss')}`}</li>
          </ul>

          <Button
            className="mt-5"
            type="primary"
            size="large"
            onClick={() => onClickCreateBtn()}
          >
            등록하기
          </Button>
        </div>

        <Divider />

        <div className="flex-1 h-[50rem]">
          <h2 className="component__h2">현재</h2>
          <GuageChart value={angryList.at(-1)?.guage || 0} />
        </div>
        <div className="flex-1 h-[50rem]">
          <h2 className="component__h2">기록</h2>
          <LineChart xAxis={chartData?.xAxis} data={chartData?.data} />
        </div>
      </div>

      {/* 게이지 등록 팝업 */}
      <Modal
        open={isOpen}
        title="분노 게이지 등록"
        onOk={() => onCreateGuage()}
        okText="등록"
        onCancel={() => setIsOpen(false)}
        cancelText="취소"
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <form className="py-10">
          <div>
            <span className="is-required">작성자</span>
            <Input
              className="mt-2"
              placeholder="작성자 성함을 입력해주세요."
              size="large"
              onChange={({ target }) => setWriter(target.value)}
              value={writer}
            />
          </div>
          <div className="mt-10">
            <span className="is-required">분노 게이지 (1 ~ 100)</span>
            <InputNumber
              className="mt-2 w-full"
              placeholder="현재 분노 정도를 입력해주세요."
              size="large"
              min={1}
              max={100}
              onChange={(value) => setGuage(value || 0)}
              value={guage}
              defaultValue={1}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Leader;
