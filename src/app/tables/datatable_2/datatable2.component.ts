// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, AfterViewInit } from '@angular/core';

declare interface DataTable2 {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
    selector: 'app-data-table2-cmp',
    templateUrl: 'datatable2.component.html',
    styleUrls:['datatable2.css']
})

export class DataTable2Component implements OnInit, AfterViewInit {
    public dataTables2: DataTable2;

  popularGrid(){
    this.dataTables2 = {
      headerRow: [ 'Data do Registro', 'CIF', 'ID', 'Reais (R$)', 'Tipo de Lançamento', 'Justificativa', '' ],
      footerRow: [ 'Data do Registro', 'CIF', 'ID', 'Reais (R$)', 'Tipo de Lançamento', 'Justificativa', '' ],
      dataRows: [
          ['15/12/2021 17:31', '04.01.07.001.0133.0000', '00004520211215l', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
          ['03/12/2021 11:21', '05.01.07.001.0133.0000', '00004520211215l', 'R$0,00', 'Lançamento Genérico', 'asdfdgf',''],
          ['15/12/2021 09:30', 'Múltiplos CIFs', '00004520211215l', 'R$777,70', 'Múltiplos Tipos de Lançamentos', 'asdfdgf',''],
          ['16/07/2021 17:31', '06.01.07.001.0133.0000', '00004520211215l', 'R$0,00', 'Manutenção de FE', 'qwerty',''],
          ['14/12/2021 11:21', '07.01.07.001.0133.0000', '00004520211215l', 'R$0,00', 'Lançamento Genérico', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','']
      ]
   };
  }

    ngOnInit() {
        
      this.popularGrid();
    }

    constructor(){
     
    }

    ngAfterViewInit() {
      $('#datatables2').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          url: '../../../assets/js/data_table_pt_br.json'
        }

      });

      let table = $('#datatables2').DataTable();

       // Edit record
       table.on('click', '.btn-success', function(e) {
        let $tr = $(this).closest('tr');
        if ($($tr).hasClass('child')) {
          $tr = $tr.prev('.parent');
        }

        let data = table.row($tr).data();
        alert('aprovar: ' + data[0] + ' ' + data[1] + ' ' + data[2] );
        e.preventDefault();
      });

      // Delete a record
      table.on('click', '.btn-danger', function(e) {
        let $tr = $(this).closest('tr');

        if ($($tr).hasClass('child')) {
          $tr = $tr.prev('.parent');
        }

        let data = table.row($tr).data();
        alert('remover: ' + data[0] + ' ' + data[1] + ' ' + data[2] );

        table.row($tr).remove().draw();
        e.preventDefault();
      });

      //Like record
      table.on('click', '.btn-primary', function(e) {
        alert('clicou p detalhar');
        //e.preventDefault();
      });

      $('.card .material-datatables label').addClass('form-group');


    }
}
