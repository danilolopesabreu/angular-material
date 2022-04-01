import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';


import * as Chartist from 'chartist';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['dashboard.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }

  scrollTela(el: HTMLElement){
    let rowGraficos = $('#divRowGraficos');
    let height = rowGraficos[0].scrollHeight;
    console.log('height: '+height)
    //rowGraficos.scrollTop(345);
    //$('#divRowGraficos').animate({scrollTop: 345},1000);
    //$.scrollTo( $('#divRowAcoes'), 500); 
    //$.scrollTo('#divRowAcoes', 800, {easing:'elasout'});
    //var $target = $('#divRowAcoes');
    //$target.scrollTo('i', 800);
    //el.scrollIntoView();
  }

  public tableData: TableData;
  startAnimationForLineChart(chart: any) {
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;
      chart.on('draw', function(data: any) {

        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  }
  startAnimationForBarChart(chart: any) {
      let seq2: any, delays2: any, durations2: any;
      seq2 = 0;
      delays2 = 40;
      durations2 = 300;
      chart.on('draw', function(data: any) {
        if (data.type === 'bar') {
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }

      });
            
      seq2 = 0;
  }
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {
      this.tableData = {
          headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
          dataRows: [
              ['US', 'USA', '2.920	', '53.23%'],
              ['DE', 'Germany', '1.300', '20.43%'],
              ['AU', 'Australia', '760', '10.35%'],
              ['GB', 'United Kingdom	', '690', '7.87%'],
              ['RO', 'Romania', '600', '5.94%'],
              ['BR', 'Brasil', '550', '4.34%']
          ]
       };
      /* ----------==========     Daily Sales Chart initialization    ==========---------- */

      const dataDailySalesChart = {
          labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
          series: [
              [12, 15, 7, 9, 13, 10, 3]
          ]
      };

     const optionsDailySalesChart = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 20, 
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      };

      const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);
      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart = {
          labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
          series: [
              [12, 7, 14, 3, 11, 9, 10],
              [9, 7, 4, 5, 6, 7, 8]
          ]
      };

      const optionsCompletedTasksChart = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 20, 
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      };

     const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart,
      optionsCompletedTasksChart);

     this.startAnimationForLineChart(completedTasksChart);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      const dataWebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [54200, 94300, 32000, 78000, 53000, 85300, 32600, 43400, 56800, 61000, 35600, 75521]

        ]
      };
      const optionsWebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 100000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      const responsiveOptions: any = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

      this.startAnimationForBarChart(websiteViewsChart);

      $('#worldMap').vectorMap({
        map: 'world_en',
        backgroundColor: 'transparent',
         borderColor: '#818181',
         borderOpacity: 0.25,
         borderWidth: 1,
         color: '#b3b3b3',
         enableZoom: true,
         hoverColor: '#eee',
         hoverOpacity: null,
         normalizeFunction: 'linear',
         scaleColors: ['#b6d6ff', '#005ace'],
         selectedColor: '#c9dfaf',
         selectedRegions: null,
         showTooltip: true,
         onRegionClick: function(element, code, region)
         {
             var message = 'You clicked "'
                 + region
                 + '" which has the code: '
                 + code.toUpperCase();

             alert(message);
         }
      });

       /*  **************** Public Preferences - Pie Chart ******************** */

          const dataPreferences = {
              labels: ['62%', '32%', '6%'],
              series: [62, 32, 6]
          };
  
          const optionsPreferences = {
              height: '212px'
          };
  
          new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);
  
   }

   ngAfterViewInit() {
       const breakCards = true;
       if (breakCards === true) {
           // We break the cards headers if there is too much stress on them :-)
           $('[data-header-animation="true"]').each(function(){
               const $fix_button = $(this);
               const $card = $(this).parent('.card');
               $card.find('.fix-broken-card').click(function(){
                   const $header = $(this).parent().parent().siblings('.card-header, .card-image');
                   $header.removeClass('hinge').addClass('fadeInDown');

                   $card.attr('data-count', 0);

                   setTimeout(function(){
                       $header.removeClass('fadeInDown animate');
                   }, 480);
               });

               $card.mouseenter(function(){
                   const $this = $(this);
                   const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                   $this.attr('data-count', hover_count);
                   if (hover_count >= 20) {
                       $(this).children('.card-header, .card-image').addClass('hinge animated');
                   }
               });
           });
       }
       $('div.ct-chart svg g.ct-labels foreignObject span.ct-label.ct-vertical.ct-start').css( "width", "35px" );
   }
}
