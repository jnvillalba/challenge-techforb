export class LoginUsuario {
  tipoDocumento: string;
  nroDocumento: number;
  password: string;

  constructor(tipoDocumento: string, nroDocumento: number, password: string) {
    this.tipoDocumento = tipoDocumento;
    this.nroDocumento = nroDocumento;
    this.password = password;
  }
}
