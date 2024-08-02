import Configs from "@/configs/domain.json";
import get from "@/utils/api";

export function ProductService() {
  let url = `${Configs.API_URL}product`;

  return get(url);
}
