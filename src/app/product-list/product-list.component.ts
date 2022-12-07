import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private productService: ProductService) { }
  tablemode:boolean =  true;
  addProduct= false;
  editMode  = false;
  loading: boolean = true;
  prodList =[] ; //or  prodDet:<Products> Products ={} 
  prodListnew:any = {}
  currentData:any = {}
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    
    this.productService.getProducts().subscribe((d) => {      
      this.prodList = d;
      this.loading = false
    })
  }

  delete(data)
  {
    console.log(data)
    this.productService.deleteProduct(data).subscribe(
      (d)=>{
        this.prodList.splice(this.prodList.findIndex((d) => d.id == data.id), 1);
      }
    )
  }
  edit(prodListitem)
  {
    
    if(prodListitem.editable)
    {
      this.editMode = false
      prodListitem.editable = !prodListitem.editable;
      console.log(prodListitem)
      this.productService.updateProduct(prodListitem).subscribe();
    }
    else
    {
      this.editMode = true
      prodListitem.editable = !prodListitem.editable;
      this.currentData = {...prodListitem}; 
    }
    

  }
  Add()
  {
    this.addProduct = !this.addProduct;
    this.prodListnew = {}
  }

  AddProduct(prodListnew)
  {
    this.productService.addProduct(prodListnew).subscribe(
      (data)=>{        
       this.prodList.push(data);   
       this.prodListnew = {}  
       this.addProduct = !this.addProduct;
      }
    )
  }
  cancel(prodListitemid)
  {
    this.editMode = false
    this.currentData.editable = !this.currentData.editable;
    this.prodList[this.prodList.findIndex((d) => d.id == prodListitemid)] = this.currentData;
   
  }

}
