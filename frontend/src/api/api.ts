class Api {
  private headers;

  constructor() {
    const token = localStorage.getItem('token');

    this.headers = new Headers({
      'Content-Type': 'application/json',
    });

    if (token) this.headers.append('Authorization', `Bearer ${token}`);
  }

  public async signin({ email, password }: any): Promise<any> {
    const body = {
      user: {
        email,
        password,
      },
    };

    const init = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    };

    const request = new Request('http://localhost:3001/users/sign_in', init);
    const response: Response = await fetch(request);

    if (!response.ok) return null;

    const token: string = response.headers.get('Authorization') || '';

    if (response.body) {
      const user = await response.json();
      return {
        user,
        token,
      };
    }

    return null;
  }

  public async signout(): Promise<void> {
    const init = {
      method: 'DELETE',
      headers: this.headers,
    };

    const request = new Request('http://localhost:3001/users/sign_out', init);
    await fetch(request);
  }

  public async home(): Promise<any> {
    const init = {
      method: 'GET',
      headers: this.headers,
    };

    const request = new Request('http://localhost:3001/', init);
    const response: Response = await fetch(request);
    const data = await response.json();
    return data;
  }
}

export default Api;
