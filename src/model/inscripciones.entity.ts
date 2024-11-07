import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Cursos } from './cursos.entity';

@Entity()
export class Inscripciones {
  @PrimaryGeneratedColumn()
  idInscripcion: number;

  @ManyToOne(() => Usuario, usuario => usuario.inscripciones)
  usuario: Usuario;

  @ManyToOne(() => Cursos, curso => curso.inscripciones)
  curso: Cursos;

  @Column({ type: 'date' })
  fechaInscripcion: Date;
}
