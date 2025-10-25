export function create(req, res) {
	res.send({ message: "create handler" });
}

export function findAll(req, res) {
	res.send({ message: "findAll handler" });
}

export function findOne(req, res) {
	res.send({ message: "findOne handler" });
}

export function update(req, res) {
	res.send({ message: "update handler" });
}

export function remove(req, res) {
	res.send({ message: "remove handler" });
}

export function removeAll(req, res) {
	res.send({ message: "removeAll handler" });
}

export function findAllFavorite(req, res) {
	res.send({ message: "findAllFavorite handler" });
}
