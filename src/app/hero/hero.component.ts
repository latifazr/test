import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LineToLineMappedSource } from 'webpack-sources';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
a:string ="";
b:number;
res:number;
c : string ="+,*,/,-";
x : string ="";
y : string ="";
op : string ="";
  constructor() { }

  ngOnInit() {
  }

  affiche(k:string){
    this.a += k;
  }
  
  calcule(){
    for( let i=0;i<this.a.length;i++){
      if(this.c.indexOf(this.a[i])>-1){
         
        this.op = this.a[i];

        for( let j=0;j<i;j++){
          this.x += this.a[j];
        }
        
        for( let j=i+1;j<(this.a.length);j++){
          this.y += this.a[j];
          
        }
        
      }
    }
    console.log(this.x);
    console.log(this.y);
    console.log(this.op);
    if (this.op == "+"){ this.b = parseInt(this.x)+parseInt(this.y);}
    if (this.op == "-"){ this.b = parseInt(this.x)-parseInt(this.y);}
    if (this.op == "*"){ this.b = parseInt(this.x)*parseInt(this.y);}
    if (this.op == "/"){ this.b = parseInt(this.x)/parseInt(this.y);}
  }
}
