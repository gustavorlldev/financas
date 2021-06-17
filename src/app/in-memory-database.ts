import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: "Lazer", description: "Pagamento Almoço" },
      { id: 1, name: "Saúde", description: "Pagamento Plano de saude" },
      { id: 1, name: "Salário", description: "Recebimento do salario" },
      { id: 1, name: "Freelas", description: "Trabalhos como freelancer" },
    ];
    return { categories };
  }
}
