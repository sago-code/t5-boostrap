import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // References to chart canvas elements
  @ViewChild('ventasChart') ventasChart!: ElementRef;
  @ViewChild('usuariosChart') usuariosChart!: ElementRef;
  
  // Dashboard summary data
  totalUsuarios: number = 150;
  ventasMensuales: number = 12500;
  ordenesPendientes: number = 23;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic
  }

  ngAfterViewInit(): void {
    this.inicializarGraficos();
  }

  // Initialize charts using Chart.js
  inicializarGraficos(): void {
    // Sales chart (bar)
    const ventasCtx = this.ventasChart.nativeElement.getContext('2d');
    new Chart(ventasCtx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [{
          label: 'Ventas ($)',
          data: [5000, 7000, 6000, 8000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
    
    // Users chart (doughnut)
    const usuariosCtx = this.usuariosChart.nativeElement.getContext('2d');
    new Chart(usuariosCtx, {
      type: 'doughnut',
      data: {
        labels: ['Administradores', 'Usuarios'],
        datasets: [{
          label: 'Usuarios',
          data: [10, 140],
          backgroundColor: ['#0d6efd', '#198754']
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  // User action methods
  agregarUsuario(): void {
    console.log('Agregar nuevo usuario');
  }

  editarUsuario(id: number): void {
    console.log('Editar usuario con ID:', id);
  }

  eliminarUsuario(id: number): void {
    console.log('Eliminar usuario con ID:', id);
  }

  exportarUsuarios(): void {
    console.log('Exportar lista de usuarios');
  }

  generarInforme(): void {
    console.log('Generar informe de usuarios');
  }
}
