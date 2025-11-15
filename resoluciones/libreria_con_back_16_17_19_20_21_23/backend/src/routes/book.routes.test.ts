import request from 'supertest';
import { app } from '../app';

describe('GET /api/books', () => {
  let token: string;

  beforeAll(async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@test.com', password: 'admin123' });
    token = res.body.token || res.body.data?.token;
  });

  
  test('debe retornar 404 para libro inexistente', async () => {
    const response = await request(app)
      .get('/api/books/99999')
      .set('Authorization', `Bearer ${token}`);
    
    expect(response.status).toBe(404);
  });
});
