import { Component, OnInit } from '@angular/core';

import { MatDialogModule, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/apiservice/api.service';

import { environment } from '../../../environments/environment';
import { ToastController ,ActionSheetController} from '@ionic/angular';
import { PopuplinksComponent } from 'src/app/popuplinks/popuplinks.component'

// import {RouterModule} from '@angular/RouterModule';
@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
})
export class LinksPage implements OnInit {


  linkName: any;
  titileName: any;
  categoryName = [

  ]

  categoryId: any;

  constructor(

    public dialog: MatDialog,
    public rou: ActivatedRoute,
    public router: Router,
    public apiCall: ApiService,
    public toast : ToastController,
     private actionSheetController : ActionSheetController
    

  ) { }

  contt: any;
  flag: number;
  res: any;

  ngOnInit() {

    this.categoryId = this.rou.snapshot.params['ttt'];
    // alert(this.categoryId);
    // alert("get id:"+this.categoryId);
    this.getAllLinks();
    this.createlinks();


  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {


          
         
        }
      },   {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  getAllLinks() {

    let url = environment.base_url + "categories/" + this.categoryId + '/links?size=100';
    console.log("url", url);
    this.apiCall.get(url).subscribe(response => {
      console.log("link::::", response);
      this.categoryName = response['result']['list'];

    })

  }
  


  



  back() {

    this.router.navigate(['/technologies']);

  }
  // options(){
  //   let dialogRef = this.dialog.open(DeletTechnologiesPopComponent, {
  //     height: '400px',
  //     width: '600px',
  //   });


  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log("this dailog is given option"); // Pizza!
  //   });
    
  //   dialogRef.close('Pizza!');
  // }

  openDialog(): void {
    this.flag = 0

    this.contt = { "cont": 0 }
    const dialogRef = this.dialog.open(PopuplinksComponent, {
      width: '250px',



    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


      let url = environment.base_url + "categories/" + this.categoryId + '/links';
      console.log("url", url);
      this.apiCall.post(url, result).subscribe(response => {
        console.log("response", response);

        this.getAllLinks();
        this.presentToast("link is addeds")
   
        this.getAllLinks();

      })

    });
    
  }

  createlinks() {
  }





  // delet(data) {

  //   let url = environment.base_url + "categories/" + this.categoryId + '/links/' + data;
  //   console.log("url", url);
  //   this.apiCall.delete(url, data).subscribe(response => {
  //     console.log("response", response);

  //     this.getAllLinks();
  //     this.presentToast("link deleted successfully")
  //   })
  // };






async presentToast(message) {
  const toast = await this.toast.create({
  message: message,
  duration: 4000
  });
  toast.present();
  }



}







