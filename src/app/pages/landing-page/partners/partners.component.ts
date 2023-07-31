import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {


  ngOnInit() {
   
  }

 partners = [
  {
    name:'Jorge Henriquez',
  description:'   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique odio quo numquam deleniti recusandae eveniet facilis dolore fugit quaerat magnam iure ipsum ad minus, voluptatem cumque mollitia maiores saepe.j',
  img:'/assets/img/yorch.png'
},
{
  name:'Melina Maldonado',
description:'   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique odio quo numquam deleniti recusandae eveniet facilis dolore fugit quaerat magnam iure ipsum ad minus, voluptatem cumque mollitia maiores saepe.m',
img:'/assets/img/mei.jpg'
} 
 ]


  

}
