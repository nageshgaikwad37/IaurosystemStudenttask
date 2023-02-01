import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Istudent } from '../../model/student';
import { DashboardService } from '../../service/dashboard.service';
import { HttpcallsService } from '../../service/http.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  public StdArr: Istudent[] = [];
  constructor(
    private httpcall: HttpcallsService,
    private router: Router,
    private dashbordService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getallstd();
    this.updateStd();
  }

  getallstd() {
    this.httpcall.getAllstd().subscribe((res) => {
      this.StdArr = res;
      this.dashbordService.studentData = this.StdArr;
      this.dataSource = new MatTableDataSource(this.StdArr);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'address',
    'gender',
    'dob',
    'subjectEnroll',
    'action',
  ];
  dataSource!: MatTableDataSource<Istudent>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onStdEdit(row: Istudent) {
    console.log(row);
    let editId = '' + row.id;
    this.router.navigate(['studentAdd', editId]);
    localStorage.setItem('editId', editId);
  }

  updateStd() {
    this.httpcall.$updateEmitter.subscribe((res: any) => {
      this.StdArr.forEach((ele, i) => {
        if (ele.id === res.id) {
          this.StdArr[i] = res;
          this.dataSource = new MatTableDataSource(this.StdArr);
        }
      });
    });
  }

  onStdDelete(row: Istudent) {
    this.httpcall.deletestd(row.id).subscribe((res) => {
      this.StdArr = this.StdArr.filter((ele) => ele.id !== row.id);
      this.dataSource = new MatTableDataSource(this.StdArr);
      this.dashbordService.studentData = this.StdArr;
    });
  }
}
