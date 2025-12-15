import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Para operaciones de escritura, es mejor no usar CDN
  token: process.env.SANITY_API_TOKEN,
});
