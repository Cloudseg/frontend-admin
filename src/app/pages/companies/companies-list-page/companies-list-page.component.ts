import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/models/company.model';
import { filterPredicate } from 'src/app/helpers/filter-predicate';

@Component({
  selector: 'app-companies-list-page',
  templateUrl: './companies-list-page.component.html',
  styleUrls: ['./companies-list-page.component.scss']
})
export class CompaniesListPageComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true })
  private paginator: MatPaginator;

  readonly COLUMNS = ['id', 'cnpj', 'trading_name', 'corporate_name', 'price', 'options']

  dataSource: MatTableDataSource<Company>;

  constructor(private _companyService: CompanyService) { }

  ngOnInit(): void {
    this.load();
  }

  onFilter(event): void {
    this.dataSource.filter = event.target.value;
  }

  load(): void {
    this._companyService.get()
      .then((companies) => {
        this.dataSource = new MatTableDataSource<Company>(companies);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (obj, filter) => filterPredicate(obj, filter, this.COLUMNS);
      });
  }

}
