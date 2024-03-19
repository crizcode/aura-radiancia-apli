export interface PersonEntity {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  userName: string;
  // No incluyas la propiedad 'pass' ya que no es necesario enviarla al frontend
  departmentId: number;
  roleId: number;
}