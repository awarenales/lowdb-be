import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { generateSampleId, paramPasses } from "../../utils/parameters.js";

const db = new Low(new JSONFile("db.json"));
await db.read();

export async function getAllPoints() {
  return db.data.points;
}

export async function createPoint(body) {
  const pointExists = db.data.points.find(
    ({ x, y }) => x === body.x && y === body.y,
  );
  if (pointExists) throw new Error("CONFLICT");

  const id = db.data.points.length + 1;
  db.data.points.push({ id, ...body, samples: [] });
  await db.write();
}

export async function deletePoint(body) {
  const indexToDelete = db.data.points.findIndex(
    (point) => point.id === body.id,
  );
  db.data.points.splice(indexToDelete, 1);
  await db.write();
}

export async function getAllSamples() {
  const allSamples = [];
  db.data.points.forEach((point) => {
    point.samples.forEach((sample) => {
      allSamples.push({
        ...sample,
        pointId: point.id,
        pointLabel: `${point.name} (${point.x}, ${point.y})`,
      });
    });
  });
  return allSamples;
}

export async function getCriticalSamples() {
  const allSamples = await getAllSamples();
  return allSamples.filter(
    ({ parameter, value }) => !paramPasses(parameter, value),
  );
}

export async function createSample(body) {
  const { pointId, ...sample } = body;
  const id = generateSampleId(body);
  db.data.points
    .find((point) => point.id === pointId)
    .samples.push({ id, ...sample });
  await db.write();
}
