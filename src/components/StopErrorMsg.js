import { message } from 'antd';

const StopErrorMsg = (msg) => {
  message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
    rtl: true,
  });
 message.error(msg);
};


export default StopErrorMsg;