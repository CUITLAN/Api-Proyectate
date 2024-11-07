import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Inscripciones } from './inscripciones.entity';
import { Administradores } from './administradores.entity';
import { Profesores } from './profesores.entity';

@Entity()
export class Cursos {
  @PrimaryGeneratedColumn()
  idCurso: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ type: 'date' })
  fechaInicio: Date;

  @Column()
  cupo: number;

  @ManyToOne(() => Administradores, administrador => administrador.cursos)
  administrador: Administradores;

  @ManyToOne(() => Profesores, profesor => profesor.cursos)
  profesor: Profesores;

  @OneToMany(() => Inscripciones, inscripcion => inscripcion.curso)
  inscripciones: Inscripciones[];
}
