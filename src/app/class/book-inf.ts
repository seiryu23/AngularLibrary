import { DbAccessService } from '../core/services/db-access.service'
import { Injectable } from '@angular/core';

const TABLE_NAME = 'bookInf';

@Injectable
(
  {
  providedIn: 'root'
  }
)

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

  constructor
  (
    private bookInfDBAS: DbAccessService,
    bookInf : BookInf
  )
  {
    this.bookId = bookInf.bookId;
    this.bookName = bookInf.bookName;
    this.bookType = bookInf.bookType;
    this.isLending = bookInf.isLending;
    this.periodDate = bookInf.periodDate;
    this.borrowerId = bookInf.borrowerId;
    this.landlordId = bookInf.landlordId;
    this.created = bookInf.created;
    this.modified = bookInf.modified;
    this.modifiedUser = bookInf.modifiedUser;
  }

  //　貸出中の本を抽出
  LendingTrueSelect()
  {
    let strWhere :string = 'isLending = true';
    this.bookInfDBAS.SelectFunc(TABLE_NAME,strWhere);
  }
}
