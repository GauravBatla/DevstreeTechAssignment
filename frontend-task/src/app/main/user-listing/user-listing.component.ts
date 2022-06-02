import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  constructor(private _ApiService: ApiService) { }
  total: any
  per_page: any
  p: any
  data: any
  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this._ApiService.getList(1).subscribe((res: any) => {
      if (res) {
        this.data = res.result
        this.total = res.total
        this.per_page = res.per_page
        this.p = res.page
      }
    },
      ((err: any) => {
        console.log(err);

      }))
  }

}
