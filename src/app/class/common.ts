export class Common
{
  kindCode! : number;      // 種別
  code! : number;          // コード
  name1! : string;         // コード名1(略称)
  name2! : string;         // コード名2
  data1! : string;         // データ1
  data2! : string;         // データ2
  data3! : string;         // データ3
  data4! : string;         // データ4
  freeFlg1! : boolean;     // フリーフラグ1
  freeFlg2! : boolean;     // フリーフラグ2
  freeFlg3! : boolean;     // フリーフラグ3
  freeFlg4! : boolean;     // フリーフラグ4
  created! : string;       // 登録日
  modified! : string;      // 更新日
  modifiedUser! : number;  // 更新者

  constructor(value :any)
  {
      this.kindCode = value.kindCode;
      this.code = value.code;
      this.name1 = value.name1;
      this.name2 = value.name2;
      this.data1 = value.data1;
      this.data2 = value.data2;
      this.data3 = value.data3;
      this.data4 = value.data4;
      this.freeFlg1 = value.freeFlg1;
      this.freeFlg2 = value.freeFlg2;
      this.freeFlg3 = value.freeFlg3;
      this.freeFlg4 = value.freeFlg4;
      this.created = value.created;
      this.modified = value.modified;
      this.modifiedUser = value.modifiedUser;
  }
}
