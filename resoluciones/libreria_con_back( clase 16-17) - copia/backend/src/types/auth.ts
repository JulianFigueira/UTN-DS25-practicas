// Lo que envía el front al login
export interface LoginRequest {
  email: string;
  password: string;
}

// Lo que devuelve el backend al login
export interface LoginResponse {
  success: boolean;
  data: {
    user: {
      id: number;
      email: string;
      role?: string;
    };
    token: string;
  };
}
