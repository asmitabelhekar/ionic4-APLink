import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../../component/popup/popup.component';
import { ApiService } from '../../service/apiservice/api.service';
import { environment } from '../../../environments/environment';
import { ToastController ,ActionSheetController} from '@ionic/angular';
import { DeletTechnologiesPopComponent } from 'src/app/delet-technologies-pop/delet-technologies-pop.component';



@Component({
  
  selector: 'app-technologies',
  templateUrl: './technologies.page.html',
  styleUrls: ['./technologies.page.scss'],

})

export class TechnologiesPage implements OnInit {

  categoryName: any = []

  id: any;

  constructor(
    
    public router: Router,
    public dialog: MatDialog,
    public apiCall: ApiService,
    public toast : ToastController,
   private actionSheetController : ActionSheetController


  ) { }

  async openActionSheet() {
     let id=this.id
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
      
    // let url = environment.base_url + "categories/" + this.id
    // this.apiCall.delete(url, id).subscribe(response => {
    //   console.log("response", response);

    //   // this.getAllLinks();
    //   this.presentToast("link deleted successfully")
    // })
        }
      },
    
       {
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

  ngOnInit() {

    this.getCategory();

  }




  nextPage(data) {

    this.id = data;
    this.router.navigate(['/links', { ttt: this.id }]);

  }

  





  getCategory() {

    let url = environment.base_url + "category?size=100";
    // let url = "http://3.6.135.154:27200/api/v1.0.0/category";

    // console.log("url", url);
    this.apiCall.get(url).subscribe(response => {
    console.log("response", response);
    this.categoryName = response['result']['list'];


    })
 

  }




  
  optionsdailog():void{
 
    let dialogRef = this.dialog.open(DeletTechnologiesPopComponent, {
      // height: '200px',
      // width: '200px', 
   
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result:`, result); // Pizza!
    
  });
  }




  openDialog(): void {

    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      // alert(result);

      
      let send_data = {

        "name": result['catagoryName'],
        "description": "string",
        "sequenceNumber": "1",
  
      }
      console.log("send",send_data);

      let url = environment.base_url + "category";
    console.log("url", url);
    this.apiCall.post(url, send_data).subscribe(response => {
      console.log("response", response);

      this.getCategory();
      this.presentToast("category is addeds")

    })
    
  });

  
  }



async presentToast(message) {
  const toast = await this.toast.create({
  message: message,
  duration: 4000
  });
  toast.present();
  }


  

}