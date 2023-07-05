import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
 listadoNoticias:Noticia[]=[
  {
    titulo:'',
    urlImg:"",
    contenido : "",
    fechaPublic: "2023/05/06"
  },
  {
    titulo:'',
    urlImg:"",
    contenido : "",
    fechaPublic: "2023/05/08"
  }
 ];
}
