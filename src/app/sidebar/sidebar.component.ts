import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare var $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
    icontype?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },{
        path: '/lancamento',
        title: 'Lançamentos',
        type: 'sub',
        icontype: 'construction',
        collapse: 'components',
        children: [
            {path: '#', title: 'Em Lote', ab:'LT', icontype:'apps'},
            {path: 'individual', title: 'Lançamento Individual', ab:'IND', icontype:'content_paste'}
        ]
    },{
        path: '/consultas',
        title: 'Consultas',
        type: 'link',
        icontype: 'search'

    },{
        path: '/configuracao',
        title: 'Configurações',
        type: 'sub',
        icontype: 'settings',
        collapse: 'tables',
        children: [
            {path: '#', title: 'Alçadas', ab:'RT', icontype:'manage_accounts'},
            {path: '#', title: 'Unidade x CIF', ab:'ET', icontype:'published_with_changes' }
        ]
    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ps: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
