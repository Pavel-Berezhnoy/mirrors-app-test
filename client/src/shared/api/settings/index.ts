import { instance } from "..";
import { Settings } from "../../types/settings";

export async function getSettings() {
  try {
    const response = await instance.get<Settings>('settings')
    return response.data
  } catch (e) {
    console.error(e)
    return
  }
}