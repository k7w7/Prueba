export type Cargo = {
    id: number, 
    codigo: string,
    nombre: string,
    activo: boolean,
    idUsuarioCreacion: number
}
export type Departamento = {
    id: number, 
    codigo: string,
    nombre: string,
    activo: boolean,
    idUsuarioCreacion: number
}
export type Usuario = {
    id: number,
    nombreUsuario: string,
    primerNombre: string,
    segundoNombre: string,
    primerApellido: string,
    segundoApellido: string,
    idDepartamento: number,
    idCargo: number,
    cargo?: Cargo,
    departamento?: Departamento
}