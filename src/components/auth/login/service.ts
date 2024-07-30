import Configs from "@/configs/domain.json";
import get from "@/utils/api";

export function LoginService(params: string) {
  let url = `${Configs.API_URL}login/${params}`;

  return get(url);
}
