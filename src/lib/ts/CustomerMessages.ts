export const UNKNOWN_ERROR = '定制化的消息';
export const CUSTOMER_MESSAGES = {
  "-503": UNKNOWN_ERROR,
};
/**
 * 我想异常还是得进行区分几类
 * 1. 前端框架封装的异常
 * 2. 后台异常
 * 2.1. 后台已知异常
 * 2.2. 后台未知异常
 * 如何进行区分呢?
 * 2.1 前端框架封装的异常是前端人员看的,那么日志或者控制台爆出来就行了,结构呢?
 * 结构直接参考后端的包装体可以吗?
 * 无所谓吧其实可以直接就一个消息就完事了,然后对应的异常处理处理掉
 * 2.2 后端异常的话,通过他的响应包装体扔出来,但是我们对应这一块的处理应该是对于响应码处理成对应前端的消息
 * 所以这块我们的消息用户化怎么做?
 * 一个通用消息(@lib/ts/GeneralMessages.ts)
 * 另外是定制消息(@lib/ts/CustomerMessages.ts)
 */

