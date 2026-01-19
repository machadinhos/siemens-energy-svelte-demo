class User {
  value: string | undefined = $state();

  get isLoggedIn(): boolean {
    return this.value !== undefined;
  }
}

export const user = new User();
