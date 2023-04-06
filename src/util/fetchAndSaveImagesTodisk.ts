import { writeFileSync } from 'fs';

export async function fetchAndSavaImagesToDisk(imageUrl: any): Promise<void> {
  const imageResults = await fetch(imageUrl);
  const imageBlobs = await imageResults.blob();
  const buffer = Buffer.from(await imageBlobs.arrayBuffer());

  writeFileSync(`./out/${new Date().getTime()}.png`, buffer);
}
