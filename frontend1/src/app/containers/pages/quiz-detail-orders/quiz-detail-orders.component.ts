import { Component, OnInit } from '@angular/core';
import orderData, { IOrder } from 'src/app/data/orders';

@Component({
  selector: 'app-quiz-detail-orders',
  templateUrl: './quiz-detail-orders.component.html'
})
export class QuizDetailOrdersComponent implements OnInit {
  orders: IOrder[] = orderData;

  constructor() { }

  ngOnInit(): void {
  }

}
