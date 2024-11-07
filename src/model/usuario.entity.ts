import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Inscripciones } from './inscripciones.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  contraseña: string;

  @Column({ type: 'date' })
  fechaRegistro: Date;

  @OneToMany(() => Inscripciones, inscripcion => inscripcion.usuario)
  inscripciones: Inscripciones[];
}
