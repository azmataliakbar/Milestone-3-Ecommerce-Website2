import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});


// import { createClient } from 'next-sanity'
// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId: 's99ga764',
//   dataset: 'production',
//   useCdn: false, // Disable CDN to fetch fresh data
//   apiVersion: '2025-01-02',
// });
