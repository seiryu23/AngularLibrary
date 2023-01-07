export class User
{
    id: number;                    // ユーザid
    username!: string;             // ユーザ名
    mail_address!: string;         // メールアドレス
    password!: string;             // パスワード
    islogin!: boolean;             // ログイン状態
    belongCode!: string;           // 所属コード
    areaCode!: string;             // 担当地区コード
    created!: string;              // 登録日
    modified!: string;             // 更新日
    modifiedUserId!: number;       // 更新者ID

    constructor(value :any)
    {
        this.id = value.id;
        this.username = value.username;
        this.mail_address = value.mail_address;
        this.password = value.password;
        this.islogin = value.islogin;
        this.belongCode = value.belongCode;
        this.areaCode = value.areaCode;
        this.created = value.created;
        this.modified = value.modified;
        this.modifiedUserId = value.modifiedUserId;
    }
}
