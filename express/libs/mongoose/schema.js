/**
 * Created by byte on 2015/7/19.
 * App DB Schema
 */
module.exports.user = {
    nickname:String,//�ǳ�
    name:String,//����
    sex:Number,//1Ϊ�У�2ΪŮ��0Ϊδ֪
    headimgurl:String,//�û�ͷ�����һ����ֵ����������ͷ���С����0��46��64��96��132��ֵ��ѡ��0����640*640������ͷ�񣩣��û�û��ͷ��ʱ����Ϊ�ա����û�����ͷ��ԭ��ͷ��URL��ʧЧ
    age:Number,//����
    phone:String,//�ֻ�
    city:'',//���ڳ���
    province:'',//����ʡ��
    country:'',//���ڹ���
    tousername:String,//��ע�Ĺ��ں�
    openid:String,//openid
    unionid:String,//ֻ�����û������ںŰ󶨵�΢�ſ���ƽ̨�ʺź󣬲Ż���ָ��ֶ�
    remark:String,//���ں���Ӫ�߶Է�˿�ı�ע�����ں���Ӫ�߿���΢�Ź���ƽ̨�û��������Է�˿��ӱ�ע
    groupid:String,//�û����ڵķ���ID
    subscribe_time:String//�û���עʱ�䣬Ϊʱ���������û�����ι�ע����ȡ����עʱ��,��λΪ����
};