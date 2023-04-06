import { AxiosError } from 'axios';
import { Configuration, OpenAIApi } from 'openai';
import { fetchAndSavaImagesToDisk } from './util/fetchAndSaveImagesTodisk';

const configuration = new Configuration({
  // org_id
  organization: 'org_id',

  // api_key
  apiKey: 'api_key  ',
});

try {
  const openai = new OpenAIApi(configuration);

  const response = await openai.createImage({
    prompt: 'This is a test prompt',
    n: 1,
    size: '1024x1024',
  });

  response.data.data.forEach(image => {
    fetchAndSavaImagesToDisk(image.url);
  });
} catch (error) {
  console.error(
    ((error as AxiosError).response?.data as { error: unknown }).error
  );
}
