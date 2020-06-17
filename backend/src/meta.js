module.exports = app => {
  // const schemas = require('./config/validation/schemas.js')(app);
  const meta = {
    base: {
      atoms: {
      },
      functions: {
      },
    },
    validation: {
      validators: {
      },
      keywords: {},
      schemas: {
      },
    },
    event: {
      implementations: {
        'a-wechat:wechatMessage': 'event/wechatMessage',
        'a-wechat:wechatMessageMini': 'event/wechatMessageMini',
        'a-base:loginInfo': 'event/loginInfo',
      },
    },
  };
  return meta;
};
