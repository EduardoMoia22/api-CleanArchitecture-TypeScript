import { HttpResponse } from ".";

export interface Controller{
  handle: () => Promise<HttpResponse>
} 