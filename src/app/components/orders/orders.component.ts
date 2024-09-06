import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { routes } from '../../app.routes';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule , NgClass],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit{
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _OrderService = inject(OrderService)
  private readonly _Router = inject(Router)
  private readonly _CartService = inject(CartService)


  cartId:string|null = ''

  orders:FormGroup =  this._FormBuilder.group({
    details: [null , [Validators.required]],
    phone: [null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city: [null , [Validators.required]],
  })


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
       this.cartId = params.get('id')
        }
    })
    
  }


  ordersSubmit():void{
    console.log(this.orders.value)
    this._OrderService.checkOut(this.cartId , this.orders.value).subscribe({
      next: (res) => {
        
        if(res.status === 'success'){
          window.open(res.session.url , '_self')

        }
      },
      error: (err) =>{ 
        console.log(err)
      }
      })

  }
  payCash(){
    this._OrderService.cashPay(this.cartId, this.orders.value).subscribe({
      next: (res) => {
        
        if(res.status === 'success'){
          this._Router.navigate(['/allorders'])
          this._CartService.cartNumber.next(0)


        }
        },
        error: (err) =>{
          console.log(err)
          }
    })
  }

}
