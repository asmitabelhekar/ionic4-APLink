import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {

  popupModel : any = {};
  // catagoryName: any
  test = new FormControl();
  responceOfPop :any
  
  id=""
  constructor(
    public apiCall: ApiService,
    public pop: MatDialogRef<PopupComponent>, 
    public activaRoute : ActivatedRoute,                
    @Inject(MAT_DIALOG_DATA) public flag: any) { }
  


  ngOnInit() {

    this.id = this.activaRoute.snapshot.params['ttt'];
    
    // alert(this.id);

   }


  postCategory(popupModel) {
  

    console.log("pop",popupModel)
    
    this.pop.close(popupModel)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

  }

  closeDialog() {

    this.pop.close()

  }



}


