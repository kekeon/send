import { Button, notification } from 'antd';
import React, { Fragment } from 'react';

const NOTIFICATION_KEY = 'NOTIFICATION_MSG_KEY';

// 需要确认的提示
export function confirmTips (message: string = '系统繁忙') {
  let key: string = `open${Date.now()}`;

  const btn: React.ReactNode = (
    <Button
      type="primary"
      onClick={() => {
        notification.close(key);
      }}>确定</Button>);

  let msg: React.ReactNode = (<Fragment>{message} </Fragment>);


  notification.destroy();
  notification.warn({
    message: '温馨提示',
    description: msg,
    duration: 2,
    btn: btn,
    key: key
  });
}

// 错误提示框
export function warnTipsTips(message: string  = '系统繁忙') {
  notification.destroy();
  notification.warn({
    message: '温馨提示',
    description: message,
    key: NOTIFICATION_KEY
  });
}

// 正确提示框
export function successTips(message: string = '操作成功') {
  notification.destroy();
  notification.success({
    message: '温馨提示',
    description: message,
    key: NOTIFICATION_KEY
  });
}
