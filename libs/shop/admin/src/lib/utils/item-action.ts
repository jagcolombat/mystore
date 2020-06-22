import { ItemActionEnum } from './item-action.enum';
import { ProductDto } from '@ecommerce/shop/share/dto';

export interface ItemAction {
  action: ItemActionEnum,
  item: ProductDto
}
