import Base from '@/lib/ts/Base'
import NetBase, {FrontFrameworkError} from "@/lib/ts/NetBase";
import {DEFAULT_MESSAGES} from "@/lib/ts/GeneralMessages";
const
    XML = '/reqxml',
    LOCAL = '/reqlocal',
    BINARY = '/reqbinary',
    SAVE_MAP = '/reqsavemap',
    READ_MAP = '/reqreadmap',
    SAVE_FILE = '/reqsavefile',
    SOFT_TODO = '/reqsofttodo',
    LOAD_FILE = 'reqloadfile',
    SIGNATURE = 'reqsignature',
    TZT_VIDEO = '/tztvideo';
const requestAjaxEngine = Base.NetBase.create({
    baseUrl: XML,
    serializationField: "DATA",
    baseFail: (err: NeTztResponse<any> | FrontFrameworkError)=> {
        if(err instanceof FrontFrameworkError){
            console.error(`前端框架发生异常: %s`, err.message);
        } else {
            // 后端返回异常处理
            const { ERRORNO } = err;
            // 异地登录
            if (ERRORNO === "-101" || ERRORNO === "-102" || ERRORNO === "-103" || ERRORNO === "-104") {
                alert(console.log(DEFAULT_MESSAGES[ERRORNO]));
                // todo dialog when
            }
            // 参数校验异常
            if (ERRORNO === "-403") {
                alert(console.log(DEFAULT_MESSAGES[ERRORNO]));
                // todo dialog when
            }
            // 未知异常处理
            if (ERRORNO === "-999") {
                alert(console.log(DEFAULT_MESSAGES[ERRORNO]));
                // todo dialog when
            }

        }
    },
    baseSuccess: (res: NeTztResponse<any>) => {
        alert(`请求成功`);
    }
});
declare interface AjaxEngineCommonRequest extends NetParams{
    /**
     * 功能号
     */
    action: number;

    /**
     * 请求服务器(0:行情;1:交易;2:资讯)
     */
    ReqlinkType?: number;
}
export interface NeTztResponse<T> {
    /**
     * request action
     */
    ACTION: string,
    /**
     * errorNo
     */
    ERRORNO: string,
    /**
     * error handle type enum(errorCustomer,errorDetail,alert,login,retry)
     */
    ERRORHANDLETYPE: string,
    /**
     * error info
     */
    ERRORHANDLEINFO: string,
    /**
     * error message
     */
    ERRORMESSAGE: string,
    DATA: T;
}
export interface TicketListRequest extends AjaxEngineCommonRequest{
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 是否展示(1:展示;0:不展示)
     */
    isShow?: number;
    /**
     * 单页记录数
     */
    pageRowCount?: number;
    /**
     * 页码
     */
    pageNo?: number;
    /**
     * 用户手机登录凭证
     */
    userToken?: string;
    /**
     * 优惠券状态(0:下架;1:已上架;2:全部)
     */
    status?: number;
}
declare interface TicketItem {
    val: string;
    coupon_id: number;
    use_end_date: string;
    type: string;
    full_value_reduction: string;
    count_all_perday: string;
    end_date: string;
    count_received: string;
    count_all: string;
    coupon_url: string;
    count_useable: number;
    coupon_product_id: string;
    cls: string;
    activity_id: number;
    count_one_total: string;
    status: string;
    begin_date: string;
    count_receivable: number;
    activity_name: string;
    coupon_name: string;
    count_one_perday: string;
    is_show: string;
    use_begin_date: string;
    lvl: string;
    coupon_url_type: string;
    count_left: string;
}
export interface TicketListResponse {
    /**
     * 总数
     */
    rowcount: number;
    /**
     * 数据
     */
    rds: TicketItem[];
    fields: string[];
}
/**
 * 获得优惠券列表
 * @param request
 */
export const getTicketList = (request: TicketListRequest) => {
    request.action = 45208;
    return requestAjaxEngine.getAjax<TicketListResponse>(request);
}
