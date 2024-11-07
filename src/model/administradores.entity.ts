import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cursos } from './cursos.entity';
import { Noticias } from './noticias.entity';

@Entity()
export class Administradores {
  @PrimaryGeneratedColumn()
  idAdmin: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  contraseña: string;

  @OneToMany(() => Cursos, curso => curso.administrador)
  cursos: Cursos[];

  @OneToMany(() => Noticias, noticia => noticia.administrador)
  noticias: Noticias[];
}
