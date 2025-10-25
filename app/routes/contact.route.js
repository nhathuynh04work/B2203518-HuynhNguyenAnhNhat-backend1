import { Router } from "express";
import * as contacts from "../controllers/contact.controller.js";

export const router = Router();

router
	.route("/")
	.get(contacts.findAll)
	.post(contacts.create)
	.delete(contacts.removeAll);

router.route("/favorite").get(contacts.findAllFavorite);

router
	.route("/:id")
	.get(contacts.findOne)
	.put(contacts.update)
	.delete(contacts.remove);   

export default router;
