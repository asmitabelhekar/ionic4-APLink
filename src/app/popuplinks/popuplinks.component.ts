import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-popuplinks',
  templateUrl: './popuplinks.component.html',
  styleUrls: ['./popuplinks.component.scss'],
})
export class PopuplinksComponent implements OnInit {

  popuplinksModel : any = {};
  // catagoryName: any
  test = new FormControl();
  responceOfPop :any
  
  constructor(
    public apiCall: ApiService,
    public pop: MatDialogRef<PopuplinksComponent>, 
    public activaRoute : ActivatedRoute,                
    @Inject(MAT_DIALOG_DATA) public flag: any) { }
  


  ngOnInit() {

    
    // alert(this.id);

   }


  postCategory(popuplinksModel) {
  

    console.log("pop",popuplinksModel)
    
    this.pop.close(popuplinksModel)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

  }

  closeDialog() {

    this.pop.close()

  }



}


