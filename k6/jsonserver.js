import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 1,
  duration: '30s',
};
export default function () {

  const url = 'https://api.jsonserver.io/cars';

  const params = {
    headers: {
      'X-Jsio-Token': '2b8fb41add354d990d1acd8557cd35e4'
    },
  };

  const resp = http.get(url, params);
  console.log(resp.body)
  console.log(resp.status)
  sleep(1);
}