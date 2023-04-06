import { AxiosError } from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  // org_id
  organization: 'org_id',

  // api_key
  apiKey: 'api_key  ',
});

try {
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion(
    {
      model: 'text-davinci-003',
      prompt: 'Hello world',
    },
    {
      timeout: 1000,
      headers: {
        'Example-Header': 'example',
      },
    }
  );
  console.log(completion.data.choices[0].text);
} catch (error) {
  console.error(
    ((error as AxiosError).response?.data as { error: unknown }).error
  );
}
