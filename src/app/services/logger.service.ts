import { Injectable } from "@angular/core";

//Je ne mets rien et ca fonctionner
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logger(message: unknown): void {
    console.log('From LoggerService');
    console.log({message});
  }
}
