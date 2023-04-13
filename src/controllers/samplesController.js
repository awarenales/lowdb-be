import {
  createSample,
  getAllSamples,
  getCriticalSamples,
} from "../database/index.js";

export async function getAll(req, res) {
  return res.json(await getAllSamples());
}
export async function getCritical(req, res) {
  return res.json(await getCriticalSamples());
}
export async function create(req, res) {
  await createSample(req.body);
  return res.status(200).end();
}
