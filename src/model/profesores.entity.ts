import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cursos } from './cursos.entity';

@Entity()
export class Profesores {
  @PrimaryGeneratedColumn()
  idProfesor: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  contraseña: string;

  @Column()
  especialidad: string;

  @OneToMany(() => Cursos, curso => curso.profesor)
  cursos: Cursos[];
}
