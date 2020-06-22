import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { GridApi, GridOptions } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { CustomHeaderComponent } from './custom-header.component';
import { ProductGridDef } from '@ecommerce/shop/utils';
import { ItemAction } from '../../../../admin/src/lib/utils/item-action';
import { ItemActionEnum } from '../../../../admin/src/lib/utils/item-action.enum';

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
  columnDefs: any;
  gridReady: boolean;
  public gridOptions: GridOptions;
  private gridApi: GridApi;
  public context: any;
  private subscriptions: Subscription[] = [];
  public selectableProd = true;


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
    //this.gridApi = this.gridOptions.api;
    this.updateGridOptions();
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
      rowSelection: 'multiple',
      rowClassRules: { 'refund-prod': 'data.isRefund === true' },
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
    const res = this.gridOptions.api.updateRowData({ add: [data] });
    //this.gridOptions.api.updateRowData({ remove: selectedData });
  }

  onDeleteRow(data) {
    console.log('onDeleteRow', data);
    const res = this.gridOptions.api.updateRowData({ remove: [data] });
  }

  onUpdateRow(data) {
    console.log('onUpdateRow', data, this.gridOptions.api.getDisplayedRowCount());
    data.price = Number(data.price).toFixed(2);
    this.gridOptions.api.forEachNode(function(node) {
      if(node.data.id === data.id){
        node.setData(data)
      };
    });
    //const res = this.gridOptions.api.updateRowData(data);
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
    //this.updateData.emit(true);
  }

  updateItems(arrPO?: any[]) {
    this.clearData();
    this.data.map(data => {
      console.log('updateItems', data);
      this.onAddRow(data);
    });
  }

  /*onRemoveSelected() {
    const selectedData = this.gridOptions.api.getSelectedRows();
    console.log('selectedData', selectedData);
    if(selectedData.length > 0 && this.selectableProd){
      console.log('remove selected');
      this.invoiceService.delPOFromInvoice(selectedData)
        .subscribe(data => {
            console.log('delPOFromInvoice', data);
            this.invoiceService.setInvoice(data);
            const res = this.gridOptions.api.updateRowData({ remove: selectedData });
          },
          err => {
            console.log(err);
            this.cashService.openGenericInfo('Error', err.error);
          });

      // printResult(res);
      //this.invoiceService.setTotal();
      this.updateData.emit(true);
      // this.deleteOnInvoice();
    }
  }*/

  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }
}
