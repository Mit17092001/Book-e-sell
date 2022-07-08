import { OrderAddModel } from "../models/OrderModel";
import request from "./request";

class OrderService {
	ENDPOINT = "api/order";

	public async placeOrder(order: OrderAddModel) {
		return order
	}
}

export default new OrderService();
