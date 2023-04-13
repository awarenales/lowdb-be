import { createPoint, deletePoint, getAllPoints } from "../database/index.js";

export async function getAll(req, res) {
  return res.json(await getAllPoints());
}

export async function create(req, res) {
  try {
    await createPoint(req.body);
    return res.status(200).end();
  } catch (error) {
    if (error.message === "CONFLICT")
      return res.status(409).json({ error: "Este ponto já existe" });
    return res.status(500).json({ error: "Erro desconhecido" });
  }
}
export async function remove(req, res) {
  try {
    await deletePoint(req.body);
    return res.status(200).end();
  } catch (error) {
    return res.status(500).json({ error: "Erro desconhecido" });
  }
}
