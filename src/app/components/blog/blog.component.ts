import { Component, ViewEncapsulation } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent {
  arrayNoticias: Noticia[] = [
    {
      titulo: 'Título de la noticia 1',
      urlImg: 'https://picsum.photos/200',
      contenido:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nostrum iure alias corrupti, rationedolores repellat provident delectus sunt architecto, accusamus excepturi ullam vero non molestiasvoluptatem tempore minima ducimus!',
      fechaPublic: '6/5/2023',
    },
    {
      titulo: 'Título de la noticia 2',
      urlImg: 'https://picsum.photos/200',
      contenido:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nostrum iure alias corrupti, rationedolores repellat provident delectus sunt architecto, accusamus excepturi ullam vero non molestiasvoluptatem tempore minima ducimus!',
      fechaPublic: '8/6/2023',
    },
  ];
  listadoNoticias: string = '';
  tituloInput: string = '';
  urlImagenInput: string = '';
  cuerpoInput: string = '';

  cargarNoticias(): string {
    this.listadoNoticias = '';
    this.arrayNoticias.forEach((noticia) => {
      this.listadoNoticias += this.getTemplateNoticia(noticia);
    });
    return this.listadoNoticias;
  }

  inicializarForm(): void {
    this.tituloInput = '';
    this.urlImagenInput = '';
    this.cuerpoInput = '';
  }

  getTemplateNoticia(noticia: Noticia): string {
    return `<article  class="noticia">
    <div><h2>${noticia.titulo}</h2></div>
    <div class="wraperNoticia">
      <div>
          <img
            class="imagen"
            src="${noticia.urlImg}"
            alt="${noticia.titulo}"
          />
        </div>
        <div>
        ${noticia.contenido}
        <p class="fechaPublic">Fecha de publicación: ${noticia.fechaPublic}</p>
        </div>
      </div>
    </article>`;
  }

  publicarNoticia(): void {
    if (
      (this.tituloInput !== null &&
        this.tituloInput !== '' )&&
        (this.urlImagenInput !== null &&
        this.urlImagenInput !== '') &&
      (this.cuerpoInput !== null && this.cuerpoInput !== '')
    ) {
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);
      this.arrayNoticias.push({
        titulo: this.tituloInput,
        urlImg: this.urlImagenInput,
        contenido: this.cuerpoInput,
        fechaPublic: hoy.toLocaleDateString(),
      });
      this.inicializarForm();
    } else {
      alert('Debes de completar todos los campos del formulario');
    }
  }
}
