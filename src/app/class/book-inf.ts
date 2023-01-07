export class BookInf
{
  bookId!: number;               // 本管理id
  bookName!: string;             // 本の名前
  bookType!: number;             // 本の種別
  isLending!: boolean;           // 貸出状況
  periodDate!: string;           // 貸出期限
  borrowerId!: number;           // 借主id
  landlordId!: number;           // 貸主id
  created!: string;              // 登録日
  modified!: string;             // 更新日
  modifiedUser!: number;         // 更新者

  constructor(value :any)
  {
      this.bookId = value.bookId;
      this.bookName = value.bookName;
      this.bookType = value.bookType;
      this.isLending = value.isLending;
      this.periodDate = value.periodDate;
      this.borrowerId = value.borrowerId;
      this.landlordId = value.landlordId;
      this.created = value.created;
      this.modified = value.modified;
      this.modifiedUser = value.modifiedUser;
  }
}
