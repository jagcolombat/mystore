import { ItemActionEnum } from '../enum/item-action.enum';
import { ProductDto } from '@ecommerce/shop/share/dto';

export interface ItemAction {
  action: ItemActionEnum,
  item: ProductDto
}
