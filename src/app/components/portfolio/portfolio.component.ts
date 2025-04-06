import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Asegúrate de tener esta importación
import { MenuComponent } from '../menu/menu.component';

register();

interface Proyecto {
  titulo: string;
  descripcion: string;
  lenguajes: string;
  frameworks: string;
  imagen: string;
  github: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent], // Asegúrate de que MenuComponent esté aquí
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  proyectos: Proyecto[] = [];

  showMenu = false;

  ngOnInit() {
    this.proyectos = [
      {
        titulo: 'Access Siska Movil',
        descripcion: 'Proyecto estudiantil, sobre app movil para manejar carnet estudiantil',
        lenguajes: "Typescript, xml",
        frameworks: 'React Native',
        imagen: '/images/Logo_access_siska_movil.jpg',
        github: "https://github.com/sago-code/front-access-siska-movil",
      },
      {
        titulo: 'Access Siska Web',
        descripcion: 'Proyecto estudiantil, sobre una app web para administrar y controlar los ingresos a la institucion educativa',
        lenguajes: 'Javascript, CSS, HTML',
        frameworks: 'React',
        imagen: '/images/Logo_access_siska_movil.jpg',
        github: "https://github.com/sago-code/front-access-siska-web",
      },
      {
        titulo: 'cocktail-app',
        descripcion: 'Aplicacion de prueba, para la creacion, edicion y eliminacion de cocteles',
        lenguajes: 'PHP, CSS, HTML',
        frameworks: 'Laravel',
        imagen: '/images/cocktail-app.jpg',
        github: 'https://github.com/sago-code/cocktail-app'
      },
      {
        titulo: 'test-quality-assurance',
        descripcion: 'Proyecto de prueba, para la creacion de pruebas unitarias y de regresion',
        lenguajes: 'Typescript, CSS, HTML',
        frameworks: 'React, Nx, Jest',
        imagen: '/images/OCMI-LOGO.jpg',
        github: 'https://github.com/sago-code/test-quality-assurance'
      },
      {
        titulo: 'kabod style eccomerce',
        descripcion: 'Proyecto universitario, de un aplicatibo web tipo eccomerce para la venta de ropa',
        lenguajes: 'Javascript, CSS, HTML',
        frameworks: 'React',
        imagen: '/images/kabod-style.jpg',
        github: 'https://github.com/sago-code/test-quality-assurance'
      }
    ];
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Asegurarse de que Swiper se inicialice correctamente en el navegador
      const swiperEl: any = document.querySelector('swiper-container');
      if (swiperEl) {
        const swiperParams = {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          navigation: true,
          pagination: false,
          slidesPerView: 'auto',
          spaceBetween: 20,
          centeredSlides: true,
        };
  
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
      }
    }
  }
  
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
