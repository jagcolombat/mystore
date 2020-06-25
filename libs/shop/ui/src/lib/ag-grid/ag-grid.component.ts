import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { GridApi, GridOptions } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { CustomHeaderComponent } from './custom-header.component';
import { ItemAction, ItemActionEnum, ProductGridDef } from '@ecommerce/shop/utils';

@Component({
  selector: 'ecommerce-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnChanges, OnInit, OnDestroy {
  @Output() updateData = new EventEmitter<boolean>();
  @Output() evSelItem = new EventEmitter<any>();
  @Input() columns: [ProductGridDef];
  @Input() data: any;
  @Input() item: ItemAction;
  @Input() footer: boolean;
  items = new Array<any>();
  columnDefs: any;
  gridReady: boolean;
  public gridOptions: GridOptions;
  private gridApi: GridApi;
  public context: any;
  private subscriptions: Subscription[] = [];
  public selectableProd = true;
  bottomData: Array<any>;

  constructor() {
    this.context = { componentParent: this };
  }

  ngOnChanges(sc: SimpleChanges){
    console.log('change', sc);
    if(sc.data && this.gridReady) this.updateItems();
    if(sc.item && this.gridReady) {
      //this.item.item.price = +this.item.item.price.toFixed(2);
      switch (this.item.action) {
        case ItemActionEnum.ADD:
          this.onAddRow(this.item.item);
          break;
        case ItemActionEnum.UPD:
          this.onUpdateRow(this.item.item);
          break;
        case ItemActionEnum.DEL:
          this.onDeleteRow(this.item.item);
          break;
      }
    }
  }

  ngOnInit() {
    this.updateGridOptions();
    if(this.footer) {
      this.setTotal();
    }
  }

  onGridReady(params){
    console.log('on grid ready');
    this.gridReady = true;
    this.gridApi = params.api;
    if(this.data) this.updateItems(this.data);
  }

  private createColumnDefs() {
    this.columnDefs = [{
      headerCheckboxSelection: this.selectableProd,
      checkboxSelection: this.selectableProd,
    }];

    this.columns.map((v, i, arr) => {
      this.columnDefs[i] = {...this.columnDefs[i],
        headerComponentFramework: CustomHeaderComponent,
        headerComponentParams: { displayName: v.title },
        field: v.field,
        type: v.type,
        width: v.width
      }
    });
  }

  updateGridOptions(){
    console.log('update grid options');
    this.gridOptions = <GridOptions>{
      rowData: [],
      /*rowSelection: 'multiple',*/
      onGridReady: () => {
        console.log('grid ready on update grid options');
        this.gridOptions.api.sizeColumnsToFit();
      },
      onRowSelected: (ev) => {
        console.log('onRowSelected', ev);
        //this.invoiceService.invoiceProductSelected = this.gridOptions.api.getSelectedRows();
        this.evSelItem.emit(this.gridOptions.api.getSelectedRows());
      },
      onRowClicked: (ev) => {
        console.log('onRowClicked', ev);
        //this.invoiceService.invoiceProductSelected = this.gridOptions.api.getSelectedRows();
        this.evSelItem.emit(this.gridOptions.api.getSelectedRows());
      },
      onBodyScroll: (ev) => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      onGridColumnsChanged: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      rowHeight: 60,
      rowStyle: {'font-size': '16px'}
    };
    this.createColumnDefs();
  }

  selectOrDeselectAll() {
    if(this.selectableProd){
      if (this.gridOptions.api.getSelectedNodes().length !== this.gridOptions.api.getDisplayedRowCount()) {
        this.gridOptions.api.selectAll();
      } else {
        this.gridOptions.api.deselectAll();
      }
    }
  }

  onAddRow(data) {
    console.log('onAddRow', data, this.gridOptions.api.getDisplayedRowCount());
    data.price = Number(data.price).toFixed(2);
    // Calculate totals
    if(this.footer && this.bottomData.length){
      this.items.push(data);
      this.calculateTotal();
    }

    this.gridOptions.api.updateRowData({ add: [data] });
  }

  onDeleteRow(data) {
    console.log('onDeleteRow', data);
    // Calculate totals
    if(this.footer && this.bottomData.length) {
      this.items.splice(this.items.findIndex((v, i) => v.id === data.id), 1);
      this.calculateTotal();
    }
    this.gridOptions.api.deselectAll();

    this.gridOptions.api.updateRowData({ remove: [data] });
  }

  onUpdateRow(data) {
    //console.log('onUpdateRow', data, this.gridOptions.api.getDisplayedRowCount());
    // Calculate totals
    if(this.footer && this.bottomData.length) {
      this.items.splice(this.items.findIndex((v, i) => v.id === data.id), 1, data);
      this.calculateTotal();
    }
    this.gridOptions.api.deselectAll();

    this.gridOptions.api.forEachNode(function(node) {
      if(node.data.id === data.id){
        node.setData(data);
      }
    });
  }

  getRowData() {
    const rowData = [];
    this.gridOptions.api.forEachNode(function(node) {
      rowData.push(node.data);
    });
    console.log('Row Data:', rowData);
    return rowData;
  }

  clearData() {
    this.gridOptions.api.setRowData([]);
    if(this.footer && this.bottomData.length)
      this.setTotal();
  }

  updateItems(arrPO?: any[]) {
    this.clearData();
    this.data.map(data => {
      console.log('updateItems', data);
      this.onAddRow(data);
    });
  }

  calculateTotal(){
    let pricesTotal = 0;
    this.items.forEach((v, i) => {
      pricesTotal += +v['price'] * +v['quantity'];
    });
    this.setTotal(pricesTotal)
  }

  setTotal(total?: number){
    this.bottomData = [{
      name: 'Total',
      description: undefined,
      price: undefined,
      quantity: total ? total.toFixed(2) : 0,
    }];
  }

  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }
}
