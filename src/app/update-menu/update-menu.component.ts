import { Component, OnInit, AfterViewInit, ViewChild , ElementRef} from '@angular/core';
import { DataService } from '../data.service';
import { MenuInterface } from '../interfaces/menu';
import { ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit, AfterViewInit{
  //variable for storing information added to form
  @ViewChild('menuForm') form!: NgForm;

  //variable for modal
  @ViewChild('modal') modal!:ElementRef;

  //boolean that determines if modal is an add or edit form
  editMode: boolean = false;

  //used to assigned headings to table
  displayedColumns: string[] = ['id', 'name', 'size','image','cost','action','add'];
 
  constructor(private dataservice:DataService ,private router:Router) { }

  //variable for storing menu items 
  items!: MenuInterface[];

  id:any


  productId:any
  //grab menu  info from database
  ngOnInit(): void {
    this.dataservice.getMenuRequest().subscribe((result)=>{
       this.items = result;
    })

  }

  ngAfterViewInit() {
    // console.log(this.modal);
  }

//post http request for data inside form
 getUserFunction(value:any){

    if(this.editMode){
      this.updateForm()
    }

    else{
      this.editMode = false

      //object that stores information to be added to database
      const info = {
        id: 0,
        menu_name : value.menu_name,
        menu_description : value.menu_description,
        menu_size : parseFloat(value.menu_size),
        imageUrl : "https://source.unsplash.com/1600x900/?food",
        cost: parseFloat(value.cost)
      }
  
      //posting information to database from forms
      this.dataservice.postMenuDetails(info).subscribe((result)=>{
        // console.log(info)
        let currentUrl = this.router.url
        this.router.navigateByUrl("/", {skipLocationChange:true}).then(()=>{
        this.router.navigate([currentUrl]);
      });
      })
    }

}
 

  //delete menu function 
  delete(id:any) {
    this.dataservice.deleteMenu(id).subscribe((result)=> {
      let currentUrl = this.router.url
      this.router.navigateByUrl("/", {skipLocationChange:true}).then(()=>{
        this.router.navigate([currentUrl]);
      });
      // console.log(id)
    }
    );
  }

  //functiion for modal
  modalFunction(){
    this.modal.nativeElement.style.display = 'block'
  }


  // update action on click event
  update(id:any){
    this.modalFunction()
    this.productId = id
    let currentProduct = this.items.find((item)=>{
      return item.id === id
    })

    //setting the values inside form to edit and update menu information 
    this.form.setValue({
      menu_name: currentProduct?.menu_name,
      menu_description: currentProduct?.menu_description,
      menu_size:currentProduct?.menu_size,
      imageUrl : "https://source.unsplash.com/1600x900/?food",
      cost:currentProduct?.cost
    })
    this.editMode = true;
    this.id = id
  }

    //update function
  updateForm(){
    this.dataservice.updateMenuDetails(this.id, this.form.value).subscribe((item)=>{
      
      let currentUrl = this.router.url
      this.router.navigateByUrl("/", {skipLocationChange:true}).then(()=>{
      this.router.navigate([currentUrl]);
      });
    })
  }

  //function that displays modal that contains form for adding new data to the database 
  addFunction(){
    this.editMode = false;
    this.form.setValue({
      menu_name:'',
      menu_description: '',
      menu_size:'',
      imageUrl : '',
      cost: ''
    })
    this.modalFunction()
  }

  closeModal(){
    this.modal.nativeElement.style.display = 'none'
  }
  
}

