import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/Interfaces/icategory';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{
  private readonly _CategoriesService = inject(CategoriesService)
  categoriesList:Icategory[]=[];

  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
      
        this.categoriesList = res.data
        
      },
      error: (err) => {
        console.log(err)
        }
    })
  }



  isClicked:boolean = false

imgSrc:string= ''
name:string= ''
slug:string= ''

open(imgSrc:string , name:string ,slug:string):void{
  this.isClicked = true
  this.imgSrc = imgSrc
  this.name = name
  this.slug = slug
}


}
