import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { ListProductUseCase } from '../../domain/ports/in/list.product.use.case';
import { CreateProductUseCase } from '../../domain/ports/in/create.product.use.case';
import { UpdateProductUseCase } from '../../domain/ports/in/update.product.use.case';
import { DeleteProductUseCase } from '../../domain/ports/in/detele.product.use.case';

export class ProductService implements
ListProductUseCase,
CreateProductUseCase,
UpdateProductUseCase,
DeleteProductUseCase {

constructor(
  private listProductUseCase: ListProductUseCase,
  private createProductUseCase: CreateProductUseCase,
  private updateProductUseCase: UpdateProductUseCase,
  private deleteProductUseCase: DeleteProductUseCase
) {}

listProducts(): Observable<ProductModel[]> {
  return this.listProductUseCase.listProducts();
}

createProduct(product: ProductModel): Observable<ProductModel> {
  return this.createProductUseCase.createProduct(product);
}

findById(productId: number): Observable<ProductModel | null> { // Corregido el tipo de retorno a Observable<ProductModel | null>
  return this.listProductUseCase.findById(productId);
}


updateProduct(product: ProductModel): Observable<ProductModel> {
  return this.updateProductUseCase.updateProduct(product);
}

deleteProduct(productId: number): Observable<void> {
  return this.deleteProductUseCase.deleteProduct(productId);
}
}