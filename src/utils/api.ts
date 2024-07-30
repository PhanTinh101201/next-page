import axios from "axios";

export default async function get(url: string) {
  const result = await axios.get(url);

  return result;
}
